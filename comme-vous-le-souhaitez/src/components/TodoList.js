import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({value}) {
  const {displayed, setList} = value;
  const handleChange = (id) => {
    setList([...displayed.map((e) => e.id === id ? {...e, isCompleted: !e.isCompleted} : {...e}) ])
  }
  const handleDelete = (id) => {
    setList(displayed.filter(e => e.id !== id))
  }
  const handleTitleChange = (id, title) => {
    setList([...displayed.map((e) => e.id === id ? {...e, title} : {...e}) ])
  }
  return <ul>
    {displayed.map((item, index) => <TodoItem key={index} item={item} handleChange={handleChange} handleDelete={handleDelete} handleTitleChange={handleTitleChange}/>)}
  </ul>;
}
