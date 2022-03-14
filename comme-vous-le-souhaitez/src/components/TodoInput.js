import React, {useState} from "react";
import {v4 as uuid} from 'uuid';
export default function TodoInput({value}) {
    const {list, setList} = value;
    const [item, setItem] = useState('');
    const newTodo = (item) => {
        return {
            id: uuid(),
            title: item,
            isCompleted: false,
            isEditing: false
        }
    }
    return <>
        <input type="text" value={item} onChange={(e) => setItem(e.target.value)}/>
        <button onClick={() => setList([...list, newTodo(item)])}>Add</button>
    </>
}
