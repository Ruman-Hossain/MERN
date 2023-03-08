import React,{useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment,setCustom } from '../../redux/state/counter/counterSlice';

const Counter = () => {
    const myNumber = useRef();

    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className='card'>
            <div className='card-header bg-secondary'>
                <h4>My Counter APP</h4>
            </div>
            <div className='card-body'>
                <h1>{count}</h1>
                <div className='my-4'>
                    <button onClick = {()=>dispatch(increment())} className='btn btn-success'>Increase</button>
                    <button onClick = {()=>dispatch(decrement())} className='btn btn-danger mx-2'>Decrease</button>

                </div>
                <div className='my-4'>
                    <input ref={myNumber} className='form-control m-2' type='number' />
                    <button onClick={()=>dispatch(setCustom(Number(myNumber.current.value)))} className='btn w-50 m-2 btn-danger'>Set Custom</button>
                </div>
            </div>
        </div>
    );
};
 
export default Counter;