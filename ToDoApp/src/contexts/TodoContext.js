import { createContext, useContext } from "react";

export const TodoContext=createContext( 
{ 
       todos: [ 
        { 
            id:1,
            todo:'dsdcsdc',
            completed:false
        }
    ],
   updateTodo:(id,todo)=>{},
   addTodo:(todo)=>{},
   deleteTodo:(id)=>{},
   toggleComplete:(id)=>{}
}
)


export const TodoProvider=TodoContext.Provider
export default function useTodo(){ 
  return   useContext(TodoContext)
}