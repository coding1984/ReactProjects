import React, { useState } from 'react';

function Tour({id,image,info,price,name, newTour}) {

const [readMorre, setRead] = useState(false);
    return (  
        <article className="single-tour">
            <img src={image} alt={name}  />  
            <footer>
                <div className='tour-info'>
                    <h4>{name}</h4>    
                    <h4 className="tour-price">${price}</h4>    
                </div>   
                <p>{readMorre?info:`${info.substring(0,200)}...`}
                <button onClick={() => setRead(!readMorre)}>
                    {!readMorre?"read more":"read less"}
                </button>
                </p>
               
                <button className="delete-btn" onClick={() => newTour(id) }>
                    no intersted
                </button>
            </footer>  
        </article>
    );
}

export default Tour;