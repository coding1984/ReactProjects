import React, { useState, useEffect } from 'react'
import data from '../../data/data';
import Loading from './Loading';
import Tours from './Tours';

const url = "https://course-api.com/react-tours-project"


function TureView() {
const [loadiing, setLoading] = useState(true)
const [tour, setTour] =useState(url)

function remoreTour(id){
  const newTours = tour.filter(items => items.id !== id)
  return setTour(newTours)
}

const fetchTour = async () => {
    try {
      const response = await fetch(url)
      const tourData = await response.json()
      setLoading(false)
      setTour(tourData)
    } catch (error) {
      setLoading(false)
      console.log(error.message)
    }
}

useEffect(() => {
    fetchTour()
  }, [])

  if(loadiing){
    return(
      <main>
        <Loading/>
      </main>
    )
  }
  if(tour.length === 0){
   return(
     <div className="title">
       <h2>no toure left</h2>
       <button className='btn' onClick={() => fetchTour()}>
         Refresh
      </button>
     </div>
   )
  }
  return(
    <main>
      <Tours tours={tour} newTour={remoreTour} />
    </main>
  )

}

export default TureView;