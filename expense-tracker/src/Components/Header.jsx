import React from 'react';
import '../App.css'

function Header() {
  return (
    <>
      <div className="header">
        <div className="main_container">
          <div className="logo_section">
            <img src="" alt="" />
          </div>
          <div className="menu_sections">
            <ul className="menu_items">
              <li className="menu_list">Add EMI </li>
              <li className="menu_list">Add Expense</li>
              <li className="menu_list">See Cahrts </li>
              <li className="menu_list"> Remainder </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;