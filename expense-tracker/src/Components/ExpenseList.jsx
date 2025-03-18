import React from 'react'

function ExpenseList(props) {

  return (
    <>
      <div className="expense_cotainer">
          <div className="left_expense">
            left Expenses
            <div className="expense_name">
              <label htmlFor="expense_name">Expense Name </label>
            </div>
          </div>
          <div className="right_expense">
            Right Container
          </div>
      </div>
    </>
  )
}

export default ExpenseList