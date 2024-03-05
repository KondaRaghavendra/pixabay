import React,{useEffect, useState} from "react";
import "./pixabey.css";
 export default function Pixabey() {
    let [state, setState]= useState([]);
    let [search, searchState]=useState("")
    useEffect(()=>{
        fetch(`https://pixabay.com/api/?key=42269086-f0c73ad0576b6ff70b421b2b8&q=${search}&image_type=photo&pretty=true`).then(res =>res.json().then(data=>{      
          setState(data.hits);
        })
        )
    });
    return(
        <>
        <div>
            <div className="nav">
                <div className="nav1">
                    <h1>Pixabey</h1>
                   <input type="text" placeholder="Search" onChange={e=>searchState(e.target.value)}/>
                </div>
                <div className="nav2">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                </div>
            </div>
        </div>
        <br />
    {state.map(pic =>{
        return(
            <>
            <div className="root" style={{display:"inline-block", justifyContent:"space-evenly"}}>
                <div className="root1"style={{display: "inline-block", marginRight: "20px"}} >
                <img src={pic.webformatURL} alt=""style={{height:"350px", width:"425px" }}/>
                <h3>{pic.tags}</h3>
                </div>
            </div>
           
            </>
        )
    })
    }
        </>
    )
 };
