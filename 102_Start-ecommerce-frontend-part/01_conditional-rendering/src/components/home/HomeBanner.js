import React, { useState } from 'react';

const HomeBanner = () => {
    const [color,setColor] = useState("Blue");
    const colorChange=()=>{
        setColor("Red")
    }
    if(color === "Red"){
        return(
            <div>
                <h1 className='text-danger'>Red Color Rendered</h1>
                <button onClick={colorChange}>Change color to Red</button>
            </div>
        );
    }else{
        return(
            <div>
                <h1>Other Color Rendered</h1>
                <button onClick={colorChange}>Change color to Red</button>
            </div>
        );
    }
};

export default HomeBanner;