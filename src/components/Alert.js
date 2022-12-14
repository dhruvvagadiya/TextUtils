import React from 'react'

export default function Alert(props) {

    const toUpper = (word) => {
        let str = word.toLowerCase();
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

  return (

    <div style={{height : '50px'}}>
    {props.alert && <div className= {`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{toUpper(props.alert.type)} : {props.alert.messege}</strong>
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>}
    </div>
  )
}
