// import React from 'react';


// function ExpenseList(props) {
//   return (
//     <>
//       <div className="expense_container mx-auto">
//         <h2>Your Expense History</h2>
//         {/* {{
//           props.expense_list.length == 0 ? (<h1>You have not made any Expense till Now</h1>) :
//             (<div className='expense_list_container'>
//               <div className="form-group">
//                 <label htmlFor="expense_name">Expense Name</label>
//                 <input type="text" placeholder="Name of Expense"
//                   value="" />
//               </div>
//             </div>)
//         }} */}
//         {/* <div className='expense_list_container'>
//           <div className="form-group">
//             <label htmlFor="expense_name">Expense Name</label>
//             <input type="text" placeholder="Name of Expense"
//               value="" />
//           </div>
//         </div> */}
//         <table class="table mb-auto">
//           <thead>
//             <tr>
//               <th scope="col">Data</th>
//               <th scope="col">Expense Name</th>
//               <th scope="col">Bank Name</th>
//               <th scope="col">Amount</th>
//               <th scope="col">Category</th>
//               <th scope="col">Type of Expense</th>
//               <th scope="col">Description</th>
//             </tr>
//           </thead>
//         </table>
//       </div>
//     </>
//   )
// };

// export default ExpenseList;
import React from 'react';

function ExpenseList(props) {
  console.log(props.fetched_expenses.investement)
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-11 col-md-8 col-lg-6"> {/* Adjust column widths as needed */}
          <div className="expense_container">
            <h2 className="text-center mb-4">Your Expense History</h2>

            {props.fetched_expenses.length === 0 ? (
              <div className="alert alert-info text-center">
                You have not made any expenses yet
              </div>
            ) : (
              <div className="table-responsive-lg">
                <table className="table table-hover table-bordered table-lg align-middle fs-5">
                  <thead className="table-light">
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">Expense Name</th>
                      <th scope="col">Bank Name</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Category</th>
                      <th scope="col">Description</th>
                      <th scope="col">Investement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.fetched_expenses.map((expense) =>
                    (
                      <tr key={expense.id}>
                        <td>{expense.date}</td>
                        <td>{expense.expense_name}</td>
                        <td>{expense.bank}</td>
                        <td>{expense.amount}</td>
                        <td>{expense.category}</td>
                        <td>{expense.description}</td>
                        <td>{expense.investement.toString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseList;