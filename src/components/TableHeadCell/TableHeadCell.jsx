import React, { useState } from 'react';
import styles from './TableHeadCell.module.scss';

export const TableHeadCell = ({
  columnName,
  removeColumn,
  changeColumnName,
  id,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [inputValue, setInputValue] = useState(columnName);

  const handleEditButton = () => {
    if (editMode) {
      changeColumnName(id, inputValue);
    }

    setEditMode(!editMode);
  };

  return (
    <th className={styles.th}>
      {editMode ? (
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      ) : (
        <>{columnName}</>
      )}
      <button className={`${styles.btn_changeName}`} onClick={handleEditButton}>
        {editMode ? 'save' : 'edit'}
        <span
          className={`${styles.icon} ${
            styles[editMode ? 'icon_save' : 'icon_pen']
          }`}
        />
      </button>
      <button className={styles.btn_remove} onClick={() => removeColumn(id)}>
        X
      </button>
    </th>
  );
};
