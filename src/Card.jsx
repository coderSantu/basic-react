import React from "react";

function Card(props){
    const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Sans-Serif"
        
      };
    
    return (<>
    <div className='card'>
        <img 
        src={props.imgsrc}
        alt='myPic' 
        />
        <div>
            <span style={myStyle}>{props.title}</span>
            <h3 className>{props.ser}</h3>
            <a href={props.link}>
                <button className='but'>Check this Website</button>
            </a> 
        </div>
    </div>
</>);
}
export default Card ;