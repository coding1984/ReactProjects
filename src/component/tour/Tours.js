import Tour from "./Tour";

function Tours({tours,newTour}) {

    return (  
        <section>
            <div className="title">
                <h2>Our Tours</h2>
                <div className="underline">
                </div>
            </div>
            <div>
                 {
                    tours.map(toursData => {
                        return <Tour key={tours.id} { ...toursData} newTour={newTour} />
                       
                    })    
                 }   
            </div>

        </section>
    );
}

export default Tours;
