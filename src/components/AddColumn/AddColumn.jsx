import React, { useState } from 'react';
import styles from './AddColumn.module.scss';

export const AddColumn = ({ addNewColumn }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddNewColumn = () => {
    const trimValue = inputValue.trim();
    if (trimValue) {
      addNewColumn(trimValue);
      setInputValue('');
    }
  };

  return (
    <th>
      <p>Add column</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAddNewColumn();
          }
        }}
      />
      <button className={styles.button_add} onClick={handleAddNewColumn}>
        Add
        <span>+</span>
      </button>
    </th>
  );
};
