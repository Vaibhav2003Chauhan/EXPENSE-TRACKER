import React, { useState } from "react";

function AddEmis() {
    // Configuring the variables for data collection here
    const [emi_name, set_emi_name] = useState("");
    const [emi_total_amount, set_emi_total_amount] = useState("");
    const [emi_monthly_deduction_date, set_emi_monthly_deduction_date] = useState("");
    const [emi_monthly_installement_amount, set_emi_monthly_installement_amount] = useState("");
    const [emi_total_months_duration, set_emi_total_months_duration] = useState("");

    const send_Emi_data_to_server = async (e) => {
        e.preventDefault();
        const data = {
            emi_name,
            emi_total_amount,
            emi_monthly_deduction_date,
            emi_monthly_installement_amount,
            emi_total_months_duration
        };

        try {
            console.log("Attempting to send the Emi data to the server");
            const response = await fetch('http://127.0.0.1:8000/api/add_emis_in_db',
                // need to change the URL here after Configuring it in backend server 
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                }
            )
            if (!response.ok) {
                console.log("Response is not OK here ")
            }
            else {
                console.log("Response is not Ok here ")
            }
        }

        catch {
            console.log("Error While transferring the data of Emi")
        }
    }

    return (
        <div className="container-fluid py-4 mx-auto" style={{ width: "100vw" }}>
            <div className="row justify-content-center">
                <h2 className="text-center mb-4">Add Your EMI here </h2>
                <div className="col-12 d-flex justify-content-center">
                    <div style={{ width: "95vw" }}>
                        <div className="card">
                            <div className="card-body">
                                <form className="p-3" onSubmit={send_Emi_data_to_server}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label">EMI Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter EMI name"
                                                required
                                                value={emi_name}
                                                onChange={(e) => set_emi_name(e.target.value)}
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Total Amount</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Enter total amount"
                                                required
                                                value={emi_total_amount}
                                                onChange={(e) => set_emi_total_amount(e.target.value)}
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Monthly Deduction Date</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                required
                                                value={emi_monthly_deduction_date}
                                                onChange={(e) => set_emi_monthly_deduction_date(e.target.value)}
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Monthly Installment Amount</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Enter monthly installment"
                                                required
                                                value={emi_monthly_installement_amount}
                                                onChange={(e) => set_emi_monthly_installement_amount(e.target.value)}
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Total Months Duration</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Enter duration in months"
                                                required
                                                value={emi_total_months_duration}
                                                onChange={(e) => set_emi_total_months_duration(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="text-center mt-4">
                                        <button type="submit" className="btn btn-primary px-4">
                                            Add EMI
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AddEmis;