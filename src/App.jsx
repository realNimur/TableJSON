import React from 'react';
import { TableEditor } from './components';
import { schema } from './assets/tableData/report-config.js';
// import schema from './assets/tableData/report-config.json';
import { data } from './assets/tableData/data.js';
import './App.scss';

function App() {
  return <TableEditor schema={schema} data={data} />;
}

export default App;
