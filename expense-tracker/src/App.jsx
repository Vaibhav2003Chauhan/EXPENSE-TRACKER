import { useState, useEffect } from 'react'
import './App.css'
import Signup from './Components/Signup';
import Expense from './Components/Expense';
import ExpenseList from './Components/ExpenseList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Components/Login';
import Header from './Components/Header';
import AddEmis from './Components/AddEmis';
import { BrowserRouter } from 'react-router-dom';
import { Route, Router } from 'react-router-dom';
import Rout from './Components/Rout';

/*    
    Added the Basic setup so that Functional setup will work properly without login or signup 
    to remove centering of the add emi option 

*/

function App() {
  // 1. Create state for expenses
  const [fetched_expenses, setFetchedExpenses] = useState([]);
  const [user, setuser] = useState(null);

  // 2. Fix the boolean values (true/false should be lowercase)
  

  // 3. Use useEffect to load data (simulating API call)
  // useEffect(() => {
  //   // Simulate async data fetching
  //   const get_expense_info = async () => {
  //     console.log("The Function for getting the Information has been hit");
  //     const response = await fetch(`http://127.0.0.1:8000/api/get_all_expenses`)

  //     setFetchedExpenses(sampleData);
  //   };

  //   get_expense_info();
  // }, []);

  return (
    <>

      {/* <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
      {/* <ExpenseList fetched_expenses={fetched_expenses} /> */}
      {/* <Login setuser={setuser} /> */}
      {/* 
      <Header /> */}
      {/* <AddEmis /> */}

      <Rout />
    </>
  )
}

export default App