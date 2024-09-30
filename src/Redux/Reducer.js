import { ADD, DELETE, EDIT } from "./Actiontype"

const initialState = {
    tasks:[{id:1,name:"task1",description:"drinkcoffe",iscomplete:false}],
    editing:null
}

export const reducer=(state = initialState, { type, payload }) => {
  switch (type) {

  case ADD:
    return { ...state,tasks:[...state.tasks,payload] }
    case EDIT:
    return { ...state,tasks:state.tasks.map(el=>el.id===payload.id?el=payload.data:el),editing:payload.data}
    case DELETE:
    return { ...state,tasks:state.tasks.filter(el=>el.id!==payload)}

  default:
    return state
  }
}

