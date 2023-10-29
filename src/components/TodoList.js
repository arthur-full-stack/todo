import React, { useState } from 'react';
import './InputLine.css';
import { FaEdit, FaTrash } from 'react-icons/fa';
function TodoList({ list, setList }) {
    const [editedValue, setEditedValue] = useState('');
    const [editedIndex, setEditedIndex] = useState(null);

    const handleEdit = (index) => {
        setEditedIndex(index);
        setEditedValue(list[index]);
    };

    const handleDone = (index) => {
        const newList = [...list];
        newList[index] = editedValue;
        localStorage.setItem('toDoList', JSON.stringify(newList));
        setList(newList);
        setEditedIndex(null);
    };

    const handleInputChange = (e) => {
        setEditedValue(e.target.value);
    };

    const deleteItem = (index) => {
        const newList = [...list];
        newList.splice(index, 1);
        setList(newList);
        localStorage.setItem('toDoList', JSON.stringify(newList));
    }

    return (
        <div className='todo-list'>
            {list?.map((item, index) => (
                <div key={index} className='item'>
                    {editedIndex === index ? (
                        <>
                            <input value={editedValue} onChange={handleInputChange} />
                            <button onClick={() => handleDone(index)}>Done</button>
                        </>
                    ) : (
                        <>
                            {item}
                            <div className="action-icons">
                                <FaEdit onClick={() => handleEdit(index)} />
                                <FaTrash onClick={() => deleteItem(index)} />
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    )
}

export default TodoList;
