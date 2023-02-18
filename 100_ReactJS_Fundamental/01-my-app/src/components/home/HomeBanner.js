import axios from 'axios';
import React, { useEffect,useRef, useState } from 'react';

const HomeBanner = (props) => {
    // // ============= USE STATE AND PROPS STARTS================= // 
    // const [color, setColor] = useState('Red');
    // const newBlue=()=>{
    //     setColor('Blue');
    // };
    // const newGreen=()=>{
    //     setColor('Green');
    // }
    // // ============= USE STATE AND PROPS ENDS================= // 

    // // ============= USE REF STARTS================= // 
    // const userName = useRef();
    // const password = useRef();
    // const subMitForm=()=>{
    //     const name = userName.current.value;
    //     const pass = password.current.value;
    //     console.log(`Username : ${name} Password : ${pass}`);
    // }
    // // ============= USE REF STARTS================= // 

    // //  =========== USE EFFECT STARTS ================= //
    const [todo,setTodo] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos').then((res)=>{
            setTimeout(()=>{
                setTodo(res.data);
            },1000);
            
        }).catch((error)=>{

        });
    });

    return (
        // ============= USE STATE AND PROPS STARTS ============ //
        // <div>
        //     <h1>{color}</h1>
        //     <button onClick={newBlue}>Change To Blue</button>
        //     <button onClick={newGreen}>Change To Green</button>
        // </div>
        // ============= USE STATE AND PROPS ENDS ============ //
        // ============= USE REF STARTS ============ //
        // <div>
        //     <input type="text" ref={userName} placeholder="Enter Your User Name"/>
        //     <input type="text" ref={password} placeholder="Enter Your User Name"/>
        //     <button onClick={subMitForm}>Submit</button>
        // </div>
        // ============= USE REF ENDS ============ //

        <div>
            {JSON.stringify(todo)}
        </div>
    );
};

export default HomeBanner;