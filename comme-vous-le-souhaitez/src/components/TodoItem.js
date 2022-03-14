import React, {useState} from "react";

export default function TodoItem({item, handleChange, handleTitleChange, handleDelete}) {
  const [editable, setEditable] = useState(false);
  const [inputText, setInputText] = useState(item.title);


  if(editable)
    return <li><input type="text" onChange={(e) => setInputText(e.target.value)} value={inputText}/> <button onClick={() => {
      handleTitleChange(item.id, inputText);
      setEditable(false);
    }}>Edit</button></li>
  return <li><span onDoubleClick={() => setEditable(true)} style={item.isCompleted ? {textDecoration: 'line-through'} : {}}>{item.title}</span> <button onClick={() => handleChange(item.id)}>Change state</button><button onClick={() => handleDelete(item.id)}>Delete</button></li>;
}
