import React, { useState } from 'react';
import reviewData from '../../data/reiview';
import {FaChevronLeft,FaChevronRight,FaQuoteRight} from 'react-icons/fa'


function Review() {
  const [review, setReview] = useState(0)
  
  const {image,name,text,job} = reviewData[review]

  function nextReview(){
      setReview((oldValue) => {
        let newValue =  oldValue += 1
        if(newValue > reviewData.length -1){
          return 0;
        }
        return newValue;
      } )
  }
  function prevtReview(){
    setReview((oldValue) => {
      let newValue =  oldValue -= 1
      if(newValue < 0){
        return reviewData.length -1;
      }
      return newValue;
    } )
  }
function random(){
  setReview(oldValue => {
    let randomNumber = Math.ceil(Math.random() * reviewData.length-1)
    return randomNumber;
  })
}
  return(
    <article className="review">
      <div className="img-container" >
        <img src={image} alt="" className="person-img"/>
        <span className="quote-icon">

        </span>
      </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container" >
          <button className="prev-btn" onClick={prevtReview}>
            <FaChevronLeft/>
          </button>
          <button className="next-btn" onClick={nextReview}>
            <FaChevronRight/>
          </button>
      </div>
      <button className="random-btn" onClick={random}>
        suprise me
      </button>
    </article>
  )

}

export default Review