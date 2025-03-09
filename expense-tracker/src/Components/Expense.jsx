import React from 'react'
import { useState } from 'react'

function Expense() {
    // this page component is used to transverse the data to the DB
    const [expense_name, set_expensename] = useState("");
    const [bank, set_bank] = useState("");
    const [description, set_description] = useState("");
    const [amount, set_amount] = useState(0)
    const [category, set_category] = useState("")
    const [investement, set_investement] = useState(false);
    const [date, set_date] = useState("");

    const handleExpenseNameChange = (e) => {
        set_expensename(e.target.value);
    }

    const handleBankNameChange = (e) => {
        set_bank(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        set_description(e.target.value)
    }

    const handleAmountChange = (e) => {
        set_amount(e.target.value);
    }

    const handleCategoryChange = (e) => {
        set_category(e.target.value);
    }

    const handleDateChange = (e) => {
        set_date(e.target.value);
    }

    const submit_form = async (e) => {
        e.preventDefault();
        console.log({
            expense_name,
            bank,
            description,
            amount,
            category,
            investement,
            date
        });
        const formData = {
            expense_name,
            bank,
            description,
            amount: parseFloat(amount),
            category,
            investement,
            date
        }

        try {
            const response = await fetch('http://127.0.0.1:8000/api/send_expense_info',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                }
            )

            if (!response.ok) {
                console.log("Unsuccessfull Results are being Calculated")
            }
            const result = await response.json(); // Parse the JSON response
            console.log('Success:', result);
        }
        catch (err) {
                console.log("The Log is in the error ")
        }
    };

    return (
        <>
            <div className="expense_container">
                <form onSubmit={submit_form}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Expense Name</label>
                        <input type="text" aria-describedby="emailHelp" placeholder="Enter email" value={expense_name} onChange={handleExpenseNameChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Description</label>
                        <input type="text" placeholder="Password"
                            value={description} onChange={handleDescriptionChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Bank</label>
                        <input type="text" placeholder="Password"
                            value={bank} onChange={handleBankNameChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Amount</label>
                        <input type="text" placeholder="Password"
                            value={amount} onChange={handleAmountChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Category</label>
                        <input type="text"
                            value={category} onChange={handleCategoryChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Date</label>
                        <input type="text" placeholder="Password"
                            value={date} onChange={handleDateChange} />
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            checked={investement}  // Use `checked` instead of `value`
                            onChange={(e) => set_investement(e.target.checked)}  // Use `e.target.checked`
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Expense