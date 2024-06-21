import React, { useState } from 'react';

export default function Textform(props) {
    const light = 'light';
    const dark = 'dark';

    const [text, setText] = useState("");
    const [feedback, setFeedback] = useState("");

    const handleupClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Your text was uppercased", "success");
    }

    const handlelowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Your text was lowercased", "success");
    }

    const handleclearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Your text is cleared", "success");
    }

    // const handlealternate1Click = () => {
    //     let newText = '';
    //     for (let i = 0; i < text.length; i++) {
    //         if (i % 2 === 0) {
    //             newText += text[i].toUpperCase();
    //         } else {
    //             newText += text[i].toLowerCase();
    //         }
    //     }
    //     setText(newText);
    //     props.showAlert("Your text was converted to alternate case2 (big first)", "success");
    // }

    const handlealternateClick = () => {
        let newText = '';
        for (let i = 0; i < text.length; i++) {
            if (i % 2 === 0) {
                newText += text[i].toLowerCase();
            } else {
                newText += text[i].toUpperCase();
            }
        }
        setText(newText);
        props.showAlert("Your text was converted to alternate case1 (small first)", "success");
    }

    const handlecapitalClick = () => {
        let newText = text.split(' ').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
        setText(newText);
        props.showAlert("Your text was capitalized", "success");
    }

    const handlecamelcaseClick = () => {
        let newText = text.toLowerCase().split(' ').map((word, index) => {
            if (index === 0) {
                return word;
            }
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join('');
        setText(newText);
        props.showAlert("Your text was Camel cased", "success");
    };

    const handlecopyClick = () => {
        navigator.clipboard.writeText(text)
            // .then(() => {
            //     setFeedback("Text copied to clipboard");
            // })
            // .catch(err => {
            //     setFeedback(`Could not copy text: ${err}`);
            // });
        props.showAlert("Your text copied to clipboard", "success");
    }

    const handlemorsecodeClick = () => {
        const morseCodeMap = {
            'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
            'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
            'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
            '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
            ' ': ' / '
        };

        let newText = text.toUpperCase().split('').map(char => morseCodeMap[char] || '').join(' ');
        setText(newText);
        props.showAlert("Your text was converted to Morse code", "success");
    }

    const handleremoveextraspacesClick = () => {
        let newText = text.split(/[ ]+/).join(' ');
        setText(newText);
        props.showAlert("Extra spaces were removed from your text", "success");
    }

    const handleCgpaToPercentageClick = () => {
        let newText = '';
        const cgpa = parseFloat(text);
        if (!isNaN(cgpa) && cgpa < 7) {
            const percentage = (cgpa * 7.1) + 12;
            newText = `Your CGPA: ${cgpa}\nEquivalent Percentage: ${percentage}%`;
            props.showAlert("CGPA converted to percentage", "success");
        }
        else if(!isNaN(cgpa) && cgpa >= 7) {
            const percentage = (cgpa * 7.4) + 12;
            newText = `Your CGPA: ${cgpa}\nEquivalent Percentage: ${percentage}%`;
            props.showAlert("CGPA converted to percentage", "success");
        }
        setText(newText);
    }

    const handleChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className="container" style={{color: props.mode === dark ? 'white' : 'black'}}>
                <h1>{props.title}</h1>
                <div className="form-group">
                    <textarea 
                        className="form-control" 
                        value={text}  
                        style={{
                            backgroundColor: props.mode === dark ? 'black' : 'white',
                            color: props.mode === dark ? 'white' : 'black'
                        }} 
                        onChange={handleChange} 
                        id="myText" 
                        rows="10"
                    ></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-dark my-3 mx-2 my-1" onClick={handleupClick}>UPPER CASE</button>
                <button disabled={text.length===0} className="btn btn-dark my-3 mx-2 my-1" onClick={handlelowClick}>LOWER CASE</button>
                {/* <button disabled={text.length===0} className="btn btn-dark my-3 mx-2 my-1" onClick={handlealternate1Click}>ALTERNATE CASE1</button> */}
                <button disabled={text.length===0} className="btn btn-dark my-3 mx-2 my-1" onClick={handlealternateClick}>ALTERNATE CASE</button>
                <button disabled={text.length===0} className="btn btn-dark my-3 mx-2 my-1" onClick={handlecapitalClick}>CAPITALIZED CASE</button>
                <button disabled={text.length===0} className="btn btn-dark my-3 mx-2 my-1" onClick={handlecamelcaseClick}>CAMEL CASE</button>
                <button disabled={text.length===0} className="btn btn-dark my-3 mx-2 my-1" onClick={handlecopyClick}>COPY TEXT</button>
                <button disabled={text.length===0} className="btn btn-dark my-3 mx-2 my-1" onClick={handlemorsecodeClick}>MORSE CODE</button>
                <button disabled={text.length===0} className="btn btn-dark my-3 mx-2 my-1" onClick={handleremoveextraspacesClick}>REMOVE EXTRA SPACES</button>
                <button disabled={text.length===0} className="btn btn-dark my-3 mx-2 my-1" onClick={handleclearClick}>CLEAR ALL</button>
                <button disabled={text.length===0} className="btn btn-dark my-3 mx-2 my-1" onClick={handleCgpaToPercentageClick}>CGPA TO PERCENTAGE</button>
            </div> 
            <div className="container my-3" style={{color: props.mode === dark ? 'white' : 'black'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((word) => word.length > 0).length} words and {text.length} letters</p>
                <p><b>{0.008 * text.split(" ").filter((word) => word.length > 0).length} Minutes to Read</b></p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something to preview :)"}</p>
                {feedback && <p><i>{feedback}</i></p>}
            </div>
        </>
    )
}
