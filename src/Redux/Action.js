import { ADD, DELETE, EDIT } from "./Actiontype"

export const addtask=(data)=>{
    return{type:ADD,payload:data}
}
export const deletetask=(id)=>{
    return{type:DELETE,payload:id}
}
export const edittask=(id,data)=>{
    return{type:EDIT,payload:{id,data}}
}