import React from "react";

export default function TodoFilter({value}) {
    const {setFilter} = value;
    return <>
        <button onClick={() => setFilter(0)}>Ne pas filtrer</button>
        <button onClick={() => setFilter(1)}>isCompleted</button>
        <button onClick={() => setFilter(2)}>isntCompleted</button>
    </>;
}
