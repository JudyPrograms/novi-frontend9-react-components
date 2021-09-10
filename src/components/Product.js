import React from "react"


function Product ({label, image, bagName, price}) {
    return (
        <article>
            <span>{label}</span>
            <img src={image} alt={bagName}/>
            <p>{bagName}</p>
            <h4>{price}</h4>
        </article>
    )
}

export default Product