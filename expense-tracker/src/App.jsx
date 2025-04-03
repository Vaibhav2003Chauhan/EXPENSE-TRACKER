// import { useState } from 'react'
// import './App.css'
// import Signup from './Components/Signup';
// import Expense from './Components/Expense';
// import ExpenseList from './Components/ExpenseList';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function App() {
//   const expenses_list = []
//   const get_expense_info = async () => {
//     console.log("The Function for getting the Information has been hitted: ")
//     // expenses_list = await fetch();
//     const [fetched_expenses, set_fetched_expense] = useState([])
//     const sample_data = [
//       {
//         id: 1,
//         expense_name: "Biryani",
//         bank: "ICICI",
//         description: " This is for Food",
//         amount: 7000,
//         category: "FOOD",
//         investement: false,
//         date: "22-11-2025"
//       },

//       {
//         id: 2,
//         expense_name: "RAJMA CHAWAL",
//         bank: "BOB",
//         description: " This is for Lunch",
//         amount: 40,
//         category: "FOOD",
//         investement: false,
//         date: "22-11-2025"
//       },

//       {
//         id: 3,
//         expense_name: "Groccery",
//         bank: "HDFC",
//         description: " This is for Month Expense",
//         amount: 7000,
//         category: "FOOD",
//         investement: false,
//         date: "22-11-2025"
//       },

//       {
//         id: 4,
//         expense_name: "Stocks",
//         bank: "HDFC",
//         description: " This is for Month Savings",
//         amount: 10000,
//         category: "Invested",
//         investement: true,
//         date: "24-11-2025"
//       }
//     ]
//     useEffect(() => {
//       // Simulate async data fetching
//       const get_expense_info = async () => {
//         console.log("The Function for getting the Information has been hit");
//         // In real app, you would use:
//         // const response = await fetch('your-api-endpoint');
//         // const data = await response.json();
//         // setFetchedExpenses(data);

//         set_fetched_expense(sample_data);
//       };

//       get_expense_info();
//     }, []);
//   }
//   return (
//     <>
//       {/* <Signup /> */}
//       <ToastContainer
//         position="top-right"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//       />
//       {/* <Expense /> */}
//       <ExpenseList fetched_expenses={fetched_expenses} />
//     </>
//   )
// }

// export default App
import { useState, useEffect } from 'react'
import './App.css'
import Signup from './Components/Signup';
import Expense from './Components/Expense';
import ExpenseList from './Components/ExpenseList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // 1. Create state for expenses
  const [fetched_expenses, setFetchedExpenses] = useState([]);

  // 2. Fix the boolean values (true/false should be lowercase)
  const sampleData = [
    {
      id: 1,
      expense_name: "Biryani",
      bank: "ICICI",
      description: "This is for Food",
      amount: 7000,
      category: "FOOD",
      investement: false,  // Fixed capitalization
      date: "22-11-2025"
    },
    {
      id: 2,
      expense_name: "RAJMA CHAWAL",
      bank: "BOB",
      description: "This is for Lunch",
      amount: 40,
      category: "FOOD",
      investement: false,
      date: "22-11-2025"
    },
    {
      id: 3,
      expense_name: "Groccery",
      bank: "HDFC",
      description: "This is for Month Expense",
      amount: 7000,
      category: "FOOD",
      investement: false,
      date: "22-11-2025"
    },
    {
      id: 4,
      expense_name: "Stocks",
      bank: "HDFC",
      description: "This is for Month Savings",
      amount: 10000,
      category: "Invested",
      investement: true,  // Fixed capitalization
      date: "24-11-2025"
    }
  ];

  // 3. Use useEffect to load data (simulating API call)
  useEffect(() => {
    // Simulate async data fetching
    const get_expense_info = async () => {
      console.log("The Function for getting the Information has been hit");
      // In real app, you would use:
      // const response = await fetch('your-api-endpoint');
      // const data = await response.json();
      // setFetchedExpenses(data);

      setFetchedExpenses(sampleData);
    };

    get_expense_info();
  }, []);

  return (
    <>
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
      {/* 4. Pass props correctly */}
      <ExpenseList fetched_expenses={fetched_expenses} />
    </>
  )
}

export default App