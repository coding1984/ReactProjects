function Category({updateCategory,allCategory}) {
   
    return (  
        <div className="btn-container">
            { allCategory.map((items) =>{
       
               return <button className="filter-btn" 
                onClick={() => updateCategory(items)}>{items}</button>
    
             })
        }
            </div>  
    );
}

export default Category;