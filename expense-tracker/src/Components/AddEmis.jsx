import React, { useState } from "react";

function AddEmis() {
    // Configuring the variables for data collection here
    const [emi_name, set_emi_name] = useState("");
    const [emi_total_amount, set_emi_total_amount] = useState("");
    const [emi_monthly_deduction_date, set_emi_monthly_deduction_date] = useState("");
    const [emi_monthly_installement_amount, set_emi_monthly_installement_amount] = useState("");
    const [emi_total_months_duration, set_emi_total_months_duration] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            emi_name,
            emi_total_amount,
            emi_monthly_deduction_date,
            emi_monthly_installement_amount,
            emi_total_months_duration
        };
        console.log("Form Data:", data);
        // Here you can call your API to save the EMI data
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Add EMI</h2>
            <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">

                <div className="mb-3">
                    <label className="form-label">EMI Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={emi_name}
                        onChange={(e) => set_emi_name(e.target.value)}
                        placeholder="Enter EMI name"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Total Amount</label>
                    <input
                        type="number"
                        className="form-control"
                        value={emi_total_amount}
                        onChange={(e) => set_emi_total_amount(e.target.value)}
                        placeholder="Enter total amount"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Monthly Deduction Date</label>
                    <input
                        type="date"
                        className="form-control"
                        value={emi_monthly_deduction_date}
                        onChange={(e) => set_emi_monthly_deduction_date(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Monthly Installment Amount</label>
                    <input
                        type="number"
                        className="form-control"
                        value={emi_monthly_installement_amount}
                        onChange={(e) => set_emi_monthly_installement_amount(e.target.value)}
                        placeholder="Enter monthly installment"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Total Months Duration</label>
                    <input
                        type="number"
                        className="form-control"
                        value={emi_total_months_duration}
                        onChange={(e) => set_emi_total_months_duration(e.target.value)}
                        placeholder="Enter duration in months"
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">Add EMI</button>
            </form>
        </div>
    );
}

export default AddEmis;
