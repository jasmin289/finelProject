import React, { useState, useEffect } from 'react';

function About() {
  const [data, setData] = useState([]);



  const getData = async () => {
    try {
      const response = await fetch('https://localhost:7119/api/Items/Items');
      const result = await response.json();
      console.log(result);
      setData(result);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  // Use the 'data' state within your component's JSX
  return (
    <div className='App'>
      {data.map(item => (
        <p key={item.id}>{item.item} {item.ischecked?"yes":"no"} {item.id}</p>
        
       
      ))}
    </div>
  );
}

export default About;














// import React from 'react'

// const About = () => {
//   return (
//     <main>
//        <h1>About</h1> 
//         </main>
//   )
// }

// export default About