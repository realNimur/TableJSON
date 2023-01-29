export const getColumnsHeaderRow = (schema) => {
  try {
    const columnsHeaderRow = [];

    const columnsArray = Object.entries(
      schema.properties.colums.items[0].properties
    );

    columnsArray.forEach((columnItem, index) => {
      columnsHeaderRow.push({
        id: index,
        columnName: columnItem[0],
        displayName: columnItem[0],
      });
    });

    return columnsHeaderRow;
  } catch (e) {
    alert('Error JSON Table Schema');
    return e;
  }
};
