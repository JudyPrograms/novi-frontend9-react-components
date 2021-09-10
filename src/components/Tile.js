import React from "react"


function Tile ({type, title, paragraphs, image}) {
    switch (type) {
        case "img":
            return (
                <section>
                    <img src={image} alt=""/>
                </section>
            )
        case "text":
            return (
                <section>
                    <h2>{title}</h2>
                    <div>
                        {paragraphs}
                    </div>
                </section>
            )
        default:
            console.log("Tile type undefined")
            return (
                <section/>
            )
    }
}

export default Tile