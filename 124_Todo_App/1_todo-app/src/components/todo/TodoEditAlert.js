import Swal from "sweetalert2";
import store from "../../redux/store/store";
import {EditTodo, RemoveTodo} from "../../redux/state/todo/todoSlice";



export function TodoEditAlert(i,item){

    Swal.fire({
        title: 'Update Task Name',
        input: 'text',
        inputValue:item,
        inputValidator:(value)=>{
            if(value){
                //store.dispatch(EditTodo({index:i,task:value}))
                Swal.fire({
                    title: 'Do you want to save the changes?',
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Update',
                    denyButtonText: `Don't Update`,
                }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        Swal.fire('Updated!', '', 'success')
                    } else if (result.isDenied) {
                        Swal.fire('Changes are not saved', '', 'info')
                    }
                })
            }
        }
    })

}