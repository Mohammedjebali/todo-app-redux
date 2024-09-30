import React from 'react'
import { Card, CardFooter } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deletetask, edittask } from '../Redux/Action'

function Tasklist() {
    const dispatch=useDispatch()
    const tasks=useSelector(state=>state.tasks)
    const editing=useSelector(state=>state.editing)
    console.log(tasks)
  return (
    <div>
    {tasks.map(task=>
    <Card style={{ width: '18rem', background:task.iscomplete===true?"green":"red" }}>
    
    <Card.Body>
      <Card.Title>{task.name}</Card.Title>
      <Card.Text>
       {task.description}
      </Card.Text>
     
    </Card.Body>
    <CardFooter>
        <button onClick={()=>dispatch(deletetask(task.id))}>Delete</button>
        <button onClick={()=>dispatch(edittask(task.id,task))}>Update</button>
        <button  onClick={()=>dispatch(edittask(task.id,{...task,iscomplete:!task.iscomplete}))} > Mark completed</button>


    </CardFooter>
  </Card>

    )}
    </div>
  )
}


export default Tasklist