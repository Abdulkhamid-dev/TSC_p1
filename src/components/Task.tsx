import React from 'react'
import {InTask} from '../Interface'
interface Props {
    task: InTask;
    handleDelete(id: number): void;
}

const Task = ({task, handleDelete}: Props) => {
  return (
    <tr>
<td>
{task.taskName}
</td>
<td>
    <button onClick={() => {handleDelete(task.id)}}>X</button>
</td>
    </tr>
  )
}

export default Task