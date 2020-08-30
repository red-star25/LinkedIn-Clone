import React from 'react'
import "./Interest.css"

function Interest({img,title,member}) {
    return (
        <div className="interestComponent">
                <div className="interest__body">
                    <img src={img} alt=""/>
                    <div className="info">
                        <p>{title}</p>
                        <span>{member}</span>
                    </div>
                </div>
        </div>
    )
}

export default Interest
