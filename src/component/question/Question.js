import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function Question({title,info}) {
    const [showInfo, setInfo] = useState(true)
    function showInfoF() {
        setInfo(!showInfo)
    }
    return (
           <article className="question">
                <header>
                    <h4>{title}</h4>
                    <button className="btn" onClick={showInfoF}>
                        {showInfo?<AiOutlineMinus/>:<AiOutlinePlus/>}
                    </button>
                </header>
                <p>{showInfo && info}</p>
            </article>     
      );
}

export default Question;