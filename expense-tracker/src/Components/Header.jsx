import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold text-light" to="/">EXPENSE TRACKER</Link>

          <button
            className="navbar-toggler border border-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/all_expense_list">
                  All Expense
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-light" to="/add_new_expense">Add Expense</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-light" to="/add_new_emi">Add EMI</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/view_all_emis">All EMIs</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
