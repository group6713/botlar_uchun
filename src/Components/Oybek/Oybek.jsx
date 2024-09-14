import React from "react";
import './Oybek.css'
import uzuk from '../assets/Bento1.png'

const Oybek =()=> {
    return(
        <div className="oybek">
            <h1 style={{textAlign:"center"}}>Harness the power of AI, making <br /> search engine optimization intuitive <br /> and effective for all skill levels.</h1>
                <img src={uzuk} alt="" style={{marginLeft:"200px", marginTop:"30px"}} />
        </div>
    )
}

export default Oybek;