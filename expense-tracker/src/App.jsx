import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './Components/Signup';
import Expense from './Components/Expense';
import ExpenseList from './Components/ExpenseList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const expenses_list = []
  const get_expense_info = async () => {
    console.log("The Function for getting the Information has been hitted: ")
    // expenses_list = await fetch();
  }
  return (
    <>
      <Signup />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* <Expense /> */}
    </>
  )
}

export default App
