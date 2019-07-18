import React from "react";



 function Photo(props){
    return(
        <>
        {(props.info.media_type === "video") ?  
        <iframe width="400" height="300" src={props.info.src}></iframe>
        :
        <img src={props.info.url} width="400" height="300"></img>}

             <p className="date">{props.info.date}</p>
            <p className="explanation">{props.info.explanation}</p>
        </>
    )
}

 export default Photo; 