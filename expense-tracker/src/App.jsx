import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './Components/Signup'
import Expense from './Components/Expense'
import ExpenseList from './Components/ExpenseList'

function App() {
  const expenses_list = []
  const get_expense_info = async () => {
    console.log("The Function for getting the Information has been hitted: ")
    expenses_list = await fetch();
  }
  return (
    <>
      <Signup />
      {/* <Expense /> */}
    </>
  )
}

export default App
