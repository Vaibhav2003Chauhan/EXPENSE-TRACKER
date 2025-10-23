import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AddEmis from './AddEmis';
import ExpenseList from './ExpenseList';
import Expense from './Expense';

function Rout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Rout;