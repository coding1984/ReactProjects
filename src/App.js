import React, { useState } from 'react';
import Category from './component/menu/Category';
import Menu from './component/menu/Menu';
import dataMenu from './component/menu/dataMenu';
import {FaChevronLeft,FaChevronRight,FaQuoteRight} from 'react-icons/fa'

const uniqueCategory = new Set(dataMenu.map(items => items.category))
const allCategory = ["all", ...uniqueCategory] 

function App() {
  const [menuItems, setItems] = useState(dataMenu)
  const [category, setCategory] = useState(allCategory)

   function updateCategory(categoryValue){
  
      if(categoryValue == "all"){
        setItems(dataMenu)
      }else{
        const newCategory = dataMenu.filter(item => item.category == categoryValue )
        setItems(newCategory)
      }

   }
 
   
  return(
    <main>
       <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          <Category updateCategory={updateCategory} allCategory={allCategory}/>
          <Menu items={menuItems}/>
       </section> 

    </main>
  )
}

export default App;

