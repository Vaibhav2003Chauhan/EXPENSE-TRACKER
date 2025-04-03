import React, { useState } from 'react';

function Expense() {
    // ... [keep all your existing state and handlers exactly as they were] ...
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
        <div className="container-fluid vh-100 p-0">
            <div className="row g-0 justify-content-center align-items-center h-100">
                <div className="col-12 col-xxl-10">
                    <div className="card border-0 shadow-sm" style={{ borderRadius: '1rem' }}>
                        <div className="card-body p-4 p-md-5">
                            <div className="mb-4">
                                <h1 className="h2 fw-bold mb-2">Add New Expense</h1>
                            </div>

                            <form onSubmit={submit_form}>
                                <div className="row g-3">
                                    {/* Expense Name */}
                                    <div className="col-12 col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="expenseName"
                                                placeholder=" "
                                                value={expense_name}
                                                onChange={handleExpenseNameChange}
                                                required
                                            />
                                            <label htmlFor="expenseName" className="text-secondary">Expense Name</label>
                                        </div>
                                    </div>

                                    {/* Bank */}
                                    <div className="col-12 col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="bank"
                                                placeholder=" "
                                                value={bank}
                                                onChange={handleBankNameChange}
                                                required
                                            />
                                            <label htmlFor="bank" className="text-secondary">Bank Name</label>
                                        </div>
                                    </div>

                                    {/* Amount */}
                                    <div className="col-12 col-md-6">
                                        <div className="input-group">
                                            <span className="input-group-text bg-transparent border-end-0 my-2 ">Rs</span>
                                            <div className="form-floating">
                                                <input
                                                    type="number"
                                                    className="form-control border-start-0 mx-3"
                                                    id="amount"
                                                    placeholder="Amount"
                                                    value={amount}
                                                    onChange={handleAmountChange}
                                                    min="0"
                                                    step="0.01"
                                                    required
                                                    style={{ paddingLeft: '2.5rem' }}
                                                />
                                                <label htmlFor="amount" className="text-secondary ps-4">Amount</label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Date */}
                                    <div className="col-12 col-md-6">
                                        <div className="form-floating">
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="date"
                                                value={date}
                                                onChange={handleDateChange}
                                                required
                                            />
                                            <label htmlFor="date" className="text-secondary">Transaction Date</label>
                                        </div>
                                    </div>

                                    {/* Category */}
                                    <div className="col-12 col-md-6">
                                        <div className="form-floating">
                                            <select
                                                className="form-select"
                                                id="category"
                                                value={category}
                                                onChange={handleCategoryChange}
                                                required
                                            >
                                                <option value="">Select Category...</option>
                                                <option value="Food">Food & Dining</option>
                                                <option value="Transport">Transportation</option>
                                                <option value="Housing">Housing</option>
                                                <option value="Entertainment">Entertainment</option>
                                            </select>
                                            <label htmlFor="category" className="text-secondary">Category</label>
                                        </div>
                                    </div>

                                    {/* Investment Switch */}
                                    <div className="col-12 col-md-6">
                                        <div className="d-flex align-items-center h-100 ps-2">
                                            <div className="form-check form-switch">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    role="switch"
                                                    style={{
                                                        width: '2.5em',
                                                        height: '1.5em',
                                                        marginRight: '0.75rem'
                                                    }}
                                                    checked={investement}
                                                    onChange={(e) => set_investement(e.target.checked)}
                                                />
                                                <label className="form-check-label text-secondary">
                                                    Mark as Investment
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea
                                                className="form-control"
                                                id="description"
                                                placeholder=" "
                                                style={{ height: '100px' }}
                                                value={description}
                                                onChange={handleDescriptionChange}
                                            ></textarea>
                                            <label htmlFor="description" className="text-secondary">Transaction Details * (Optional)</label>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="col-12 mt-3">
                                        <button
                                            type="submit"
                                            className="btn btn-primary w-100 py-2"
                                        >
                                            Save Expense
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expense;