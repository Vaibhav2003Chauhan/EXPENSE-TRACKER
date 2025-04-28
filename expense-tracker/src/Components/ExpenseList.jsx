import React from 'react';

function ExpenseList({ fetched_expenses }) {
  return (
    <div className="container-fluid py-4 mx-auto" style={{ width: '100vw' }}>
      <div className="row justify-content-center">
        <div className="col-12 d-flex justify-content-center">
          <div style={{ width: '95vw' }}>
            <div className="card">
              <div className="card-body">
                <h2 className="text-center mb-4">Your Expense History</h2>

                {fetched_expenses.length === 0 ? (
                  <div className="alert alert-info text-center">
                    You have not made any expenses yet.
                  </div>
                ) : (
                  <div className="table-responsive">
                    <table className="table table-hover align-middle table-bordered w-100">
                      <thead className="table-dark fs-5 text-center">
                        <tr>
                          <th style={{ width: '10%' }}>Date</th>
                          <th style={{ width: '15%' }}>Expense Name</th>
                          <th style={{ width: '10%' }}>Bank Name</th>
                          <th style={{ width: '10%' }}>Amount</th>
                          <th style={{ width: '10%' }}>Category</th>
                          <th style={{ width: '30%' }}>Description</th>
                          <th style={{ width: '10%' }}>Investment</th>
                        </tr>
                      </thead>
                      <tbody>
                        {fetched_expenses.map((expense) => (
                          <tr key={expense.id}>
                            <td className="text-nowrap">{expense.date}</td>
                            <td>{expense.expense_name}</td>
                            <td>{expense.bank}</td>
                            <td>${Number(expense.amount).toFixed(2)}</td>
                            <td>{expense.category}</td>
                            <td className="text-start">{expense.description}</td>
                            <td>{expense.investement ? 'Yes' : 'No'}</td>
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
      </div>
    </div>
  );
}

export default ExpenseList;
