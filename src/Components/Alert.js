import React from 'react';
const capitalize = (word)=> {
    const w = word.toLowerCase();

         return w.charAt(0).toUpperCase() + w.slice(1);
}

export default function Alert(props) {
  return (
    <div style={{height:"50px"}}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capitalize(props.alert.type)}</strong>:{props.alert.message}
    </div>}
    </div>
  );
}


