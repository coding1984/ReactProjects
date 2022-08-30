import React, { useState } from 'react';
import data from '../../data/data';
import List from '../List/List';

function Birthday() {
    const [people, setPeople] = useState(data)
    
      return (
        <main>
          <section className="container">
    
            <h3>{people.length} today Brthday</h3>
            <List people={people} />
            <button onClick={() => setPeople([])} >clear all</button>
          </section>
          
        </main>
        
      );
    }
    
    export default Birthday;
    