import React, { useState, useEffect } from "react";
import axios from "axios";

const PhotoCard = () =>  {
   
    useEffect (() => { axios.get('https://api.nasa.gov/planetary/apod?api_key=v0uiXBdS2nDZXSwnqMZkNxa1d7014rZx6uL3khd6&date=2012-03-${14+i}')})

    .then(console.log.data.res)

    .catch( err => console.log("error message :", err))

};
export default PhotoCard;