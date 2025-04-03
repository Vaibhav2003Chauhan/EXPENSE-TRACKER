import React, { use } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!username || !email || !password || !cpassword) {
            toast.warning("Please fill all fields");
            return;
        }

        if (password !== cpassword) {
            toast.warning("Passwords do not match");
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:8000/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Registration failed");
            }

            toast.success("Account created successfully");
        } catch (err) {
            console.error("Registration error:", err);
            toast.error(err.message || "Registration failed");
        }
    };

    return (
        <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
            <div className="row shadow-sm rounded-4" style={{ width: "900px" }}>
                {/* Left Section */}
                <div className="col-md-6 bg-danger text-white p-5 rounded-start-4">
                    <div className="d-flex flex-column h-100 justify-content-center">
                        <h1 className="display-4 mb-4">Hello!</h1>
                        <h3 className="lead">Welcome to Expense Tracker</h3>
                    </div>
                </div>

                {/* Right Section */}
                <div className="col-md-6 bg-white p-5 rounded-end-4">
                    <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="name@example.com"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                placeholder="Enter username"
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="confirm-password"
                                placeholder="Confirm password"
                                onChange={(e) => setCpassword(e.target.value)}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-success w-100 py-2"
                        >
                            Create Account
                        </button>
                    </form>
                    <p className="my-2">Already have Account</p>
                </div>
            </div>
        </div>
    );
}

export default Signup;