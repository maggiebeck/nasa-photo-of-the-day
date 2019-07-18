import React, {useEffect, useState} from "react";
import "./App.css";
import axios from "axios";
import Photo from "./components/Photo.js";


function App() {
  const [photo, setNasa] = useState([]);

  useEffect (() => { axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-18')

  .then(res => {setNasa(res.data);
                photo(res.image);
      
  })

  .catch( err => console.log("error message :", err))
},[])


  return (
    <div className="App">
      
        <h1>Nasa Photo of The Day</h1>
      <div className="photooftheday"> </div>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀
      </p>
      <div className="app"{...App}/>
      {console.log(photo)}
      <Photo info={photo}/>
      
    
      
    
  
    </div>
    
    
  );
}

export default App;
