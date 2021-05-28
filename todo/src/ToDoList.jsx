import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';
const ToDoList = (props) => {
    //making the list as a component
    //props for itemval text

    return (
        <>
            <div className="todo_style">
                {/* we need the id that is why we use fat arrow call back function */}
                <button 
                    className="todo_remove"
                    onClick={() =>{
                        props.onSelect(props.id);
                    }}
                 ><ClearIcon/></button>
                <li>{props.text}</li>
            </div>
        </>   
    );
};

export default ToDoList;