import React, { createFactory, useState } from 'react';
import questions from '../../data/question';
import Question from './Question';
import {FaChevronLeft,FaChevronRight,FaQuoteRight} from 'react-icons/fa'

function QuestionMain() {
  const style={
    backgroundColor:"white"
  }
  const [question,setQuestion] = useState(questions)

  return (  
   <main>
    <div style={style}>
      <h3>Question and Answer</h3>
      <section className="info">
          {question.map(items => {
            return <Question  key={items.id}  {...items} / >
          })
          }

      </section>
    </div>
   </main>
  );
}

export default QuestionMain;

<h1>hello</h1>