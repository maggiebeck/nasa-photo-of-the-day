import React, {useEffect, useState} from "react";
import "./App.css";
import axios from "axios";


function App() {
  const [setNasa, nasa] = useState([]);

  useEffect (() => { axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-03-14')

  .then(res => {setNasa(res.data)
      
  })

  .catch( err => console.log("error message :", err))
},[])


  return (
    <div className="App">
      <div>
        <h1>Nasa Photo of The Day</h1>
        {console.log(nasa)}
      </div>
      <div className="photooftheday"> </div>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀
      </p>
      <div className="app"{...App}/>
      
    
    
    <div className="links">
    Links
  </div>
    <div className="footer">
      Footer
    </div>
    </div>
    
  );
}

export default App;
