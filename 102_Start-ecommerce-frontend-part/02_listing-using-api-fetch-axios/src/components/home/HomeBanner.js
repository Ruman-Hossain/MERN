import axios from 'axios';
import React, { useEffect, useState } from 'react';

const HomeBanner = (props) => {
    const [todo,setTodo] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos').then((res)=>{
            setTodo(res.data);
        }).catch((error)=>{
            console.log(error);
        });
        
    },[]);
    const editTodo = (id)=>{
        const editId = `Edit ID : ${id}`;
        alert(editId)
    }
    const deleteTodo = (id)=>{
        const deleteId = `Delete ID : ${id}`;
        alert(deleteId);

    }
    const detailsTodo = (id)=>{
        const detailsId = `Details ID : ${id}`;
        alert(detailsId);
    }
    const todoList = todo.map((list,i)=>{
        return (
            <tr>
                <td>{list.userId}</td>
                <td>{list.id}</td>
                <td>{list.title}</td>
                <td>{list.completed?"True":"False"}</td>
                <td><button className='btn btn-primary' onClick={editTodo.bind(this,list.id)}>Edit</button></td>
                <td><button className='btn btn-danger' onClick={deleteTodo.bind(this,list.id)}>Delete</button></td>
                <td><button className='btn btn-success' onClick={detailsTodo.bind(this,list.id)}>Details</button></td>
            </tr>
        )
    });
   return(
    <div className='container'>
        {/* {JSON.stringify(todo)} */}
        <table className='table table-striped'>
            <thead>
                <th>User ID</th>
                <th>ID</th>
                <th>Title</th>
                <th>Completed</th>
                <th colspan="2">Action</th>
            </thead>
            <tbody>
                {todoList}
            </tbody>
        </table>
        
    </div>
   );
};

export default HomeBanner;