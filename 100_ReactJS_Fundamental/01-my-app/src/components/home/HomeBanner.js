import React, { useRef, /*useState*/ } from 'react';

const HomeBanner = (props) => {
    // const [color, setColor] = useState('Red');
    // const newBlue=()=>{
    //     setColor('Blue');
    // };
    // const newGreen=()=>{
    //     setColor('Green');
    // }
    const userName = useRef();
    const password = useRef();
    const subMitForm=()=>{
        const name = userName.current.value;
        const pass = password.current.value;
        console.log(`Username : ${name} Password : ${pass}`);
    }
    return (
        // <div>
        //     <h1>{color}</h1>
        //     <button onClick={newBlue}>Change To Blue</button>
        //     <button onClick={newGreen}>Change To Green</button>
        // </div>
        <div>
            <input type="text" ref={userName} placeholder="Enter Your User Name"/>
            <input type="text" ref={password} placeholder="Enter Your User Name"/>
            <button onClick={subMitForm}>Submit</button>
        </div>
    );
};

export default HomeBanner;