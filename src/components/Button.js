import React from 'react'


function Button ({text, disabled}) {
    function logText() {
        console.log({text})
    }
    return <button type="button" onClick={logText} disabled={disabled}>{text}</button>
}

export default Button