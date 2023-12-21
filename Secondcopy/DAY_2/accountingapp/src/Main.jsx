import React, { useContext } from 'react';
import './App.css';
import AddBill from './AddBill';
import { BillContext } from './BillContext';
import BillList from './BillList';
import BillTotal from './BillTotal';
import BillOptions from './BillOptions';
import EditBills from './EditBills';

const Main = () => {

  const { editModeEnabled } = useContext(BillContext);

  return (
    <div className='bills-container'>
      {
        editModeEnabled ? <EditBills /> : <span><BillOptions /><AddBill /><BillTotal /><BillList /></span>
      }
    </div>
  );
}

export default Main;