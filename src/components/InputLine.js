import React, { useRef, useState, useEffect } from 'react'
import TodoList from './TodoList';
import './InputLine.css';
function InputLine() {
    const itemRef = useRef('');
    const [list, setList] = useState([]);

    useEffect(() => {
        const notParsedList = localStorage.getItem('toDoList');
        setList(JSON.parse(notParsedList) || []);
    }, []);

    const addToList = () => {
        const itemValue = itemRef.current?.value;
        if (!itemValue) return;  
        const newList = [...list, itemValue];
        localStorage.setItem('toDoList', JSON.stringify(newList));
        setList(newList);
        itemRef.current.value = '';
    }

    return (
        <div className='input-div'>
            <input type="text" placeholder='write something' ref={itemRef} />
            <button onClick={addToList}>Add</button>
            <TodoList list={list} setList={setList} />
        </div>
    )
}

export default InputLine;
