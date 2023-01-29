import React, { useState } from 'react';
import { Modal } from '../Modal/Modal.jsx';

export const TableRow = ({ item, children }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <tr onDoubleClick={() => setModalOpen(true)}>
      <Modal open={modalOpen} setOpen={setModalOpen} item={item} />
      {children}
    </tr>
  );
};
