import React from 'react';

export default props => (
// calling toggle complete prop
<div 
style={{
    textDecoration: props.todo.complete ? "line-through" : ""
}} 
onClick={props.toggleComplete}
>
{props.todo.text}
 </div>
);

