import { useState } from "react"
import "./Todo.css"
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import { Getlocalstoragedat, Setlocalstoragedat } from "./TodoLocalStorage";



export const Todo = () => {

    const [task, setTask] = useState(() =>Getlocalstoragedat());

    

    const handleFormSubmit = (inputValue) => {
        const {id, content, checked} = inputValue;
        if (!content) return;

        const ifTodoMatched = task.find(
            (curTask) => curTask.content == content
        );
        if(ifTodoMatched) return;

        setTask((PrevTask) => [...PrevTask, {id, content, checked}]);
   };

//ADD DATA TO LOCAL STORAGE
Setlocalstoragedat(task);  


//TODO DELETE BUTTON
const handleDeleteBtn = (value) => {
    const updatetask = task.filter((curTask) => curTask.content !== value);
    setTask(updatetask);
    
};

const handlecleartodoData = () => {
    setTask([]);
};

const handleCheckBtn = (content) => {
   const updatetask = task.map((curTask) => {
    if(curTask.content == content) {
        return{...curTask, checked: !curTask.checked};
    } else {
        return curTask;
    }
    
   })
   setTask(updatetask);
}
  

    return (
        <>
            <section className="todo-container">
                <header>
                    <h1> Todo List </h1>
                    <TodoDate/>
                </header>
                <TodoForm onAddTodo={handleFormSubmit}/>
                
                <section className="myUnOrdList">
                    <ul>
                        {task.map((curTask) => {
                            return (
                                <TodoList 
                                key={curTask.id}
                                checked= {curTask.checked}
                                data={curTask.content} 
                                onHandleDeleteTodo={handleDeleteBtn}
                                onHandleCheckTodo = {handleCheckBtn}
                                />
                            );
                        })}
                    </ul>
                </section>
                <section>
                    <button className="clear-btn" onClick={handlecleartodoData}>Clear all</button>
                </section>
            </section>
        </>
    );
};