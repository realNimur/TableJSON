import React, { useEffect, useState } from 'react';
import {
  AddColumn,
  Paginator,
  TableHeadCell,
  TableRow,
} from '../../components';
import { getColumnsHeaderRow } from '../../utils/fn.js';
import styles from './TableEditor.module.scss';

export const TableEditor = ({ schema, data, itemsOnPage = 20 }) => {
  const [columnHeaderRow, setColumnHeaderRow] = useState([]);
  const [dataList, setDataList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const changeColumnName = (id, newName) => {
    const newState = columnHeaderRow.map((item) => {
      if (item.id === id) {
        return { ...item, displayName: newName };
      }
      return item;
    });
    setColumnHeaderRow(newState);
  };

  const removeColumn = (id) => {
    const filteredColumns = columnHeaderRow.filter((item) => item.id !== id);
    setColumnHeaderRow(filteredColumns);
  };

  const addNewColumn = (inputValue) => {
    setColumnHeaderRow((prevState) => [
      ...prevState,
      {
        displayName: inputValue,
        columnName: inputValue,
        id: Date.now(),
      },
    ]);
  };

  useEffect(() => {
    try {
      const newState = data.slice(
        (currentPage - 1) * itemsOnPage,
        currentPage * itemsOnPage
      );

      setDataList(newState);
    } catch (e) {
      alert('Error Data');
    }
  }, [currentPage]);

  useEffect(() => {
    setColumnHeaderRow(getColumnsHeaderRow(schema));
  }, []);

  return (
    <div className="App">
      <table className={styles.table}>
        <thead>
          <tr>
            {columnHeaderRow.map((item) => {
              return (
                <TableHeadCell
                  key={item.id}
                  columnName={item.displayName}
                  removeColumn={removeColumn}
                  changeColumnName={changeColumnName}
                  id={item.id}
                />
              );
            })}
            <AddColumn addNewColumn={addNewColumn} />
          </tr>
        </thead>
        <tbody>
          {dataList.map((item, index) => {
            return (
              <TableRow item={item} key={index}>
                {columnHeaderRow.map((headerName, d) => {
                  return (
                    <td key={d}>{item[headerName.columnName] ?? 'no data'}</td>
                  );
                })}
              </TableRow>
            );
          })}
        </tbody>
      </table>
      <Paginator
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        countOfPage={Math.ceil(data.length / itemsOnPage)}
      />
    </div>
  );
};
