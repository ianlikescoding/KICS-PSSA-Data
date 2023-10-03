import React,{useState,useEffect} from 'react'
import Axios from 'axios'

export default function getData() {
    const [allPssaScores, setallPssaScores]=useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:3002/api/get").then((data)=>{
            setallPssaScores(data.data)
        });
    },[])

    return allPssaScores;
}