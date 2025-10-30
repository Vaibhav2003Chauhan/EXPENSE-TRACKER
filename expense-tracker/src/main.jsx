import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, Outlet } from 'react-router-dom'
import { Route, RouterProvider} from 'react-router-dom'
import Expense from './Components/Expense.jsx'
import Rout from './Components/Rout.jsx'
import ExpenseList from './Components/ExpenseList.jsx'
import AddEmis from './Components/AddEmis.jsx';
import EmiList from './Components/EmiList.jsx'


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


const router = createBrowserRouter([
  {
    path: '/',
    element: <Rout />,
    children: [
      {
        path: '',
        element: <Expense />
      },

      {
        path : '/all_expense_list',
        element : <ExpenseList  fetched_expenses={sampleData} />
      },
      {
        path : '/add_new_emi',
        element : <AddEmis/>
      },
      {
        path : '/view_all_emis',
        element : <EmiList/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)


/* Added Api for the Fetching Emi and tested it data filtration is requred to be done in that only . centering of add emi is required etc */ 


/* Routing setup is basic done and tested */