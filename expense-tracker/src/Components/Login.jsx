import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleLogin = async (e) => {
        console.log("LOGIN FUNCTION WAS INVOKED HERE !!!!");
        e.preventDefault();

        if (!email || !password) {
            toast.warning("Please Complete all the Fields")
            return;
        }

        try {
            const response = await fetch(`http://127.0.0.1:8000/api/signin`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password }),
                }
            )
            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Registration failed");
            }
            else {
                toast.success("Login Confirmed")
            }
        }
        catch (err) {
            console.error("Registration error:", err);
            toast.error(err.message || "Registration failed");

        }

    }

    return (
        <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
            <div className="row shadow-sm rounded-4" style={{ width: "90vw", height: "80vh" }}>
                <div className="col-md-6 bg-primary text-white p-5 rounded-start-4">
                    <div className="d-flex flex-column h-100 justify-content-center">
                        <h1 className="display-4 mb-4">Welcome Back!</h1>
                        <h3 className="lead">Track Your Expenses Efficiently</h3>
                    </div>
                </div>
                <div className="col-md-6 bg-white p-5 rounded-end-4">
                    <form onSubmit={handleLogin} className="d-flex flex-column gap-3">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                placeholder="name@example.com"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-4">
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

                        <button
                            type="submit"
                            className="btn btn-success w-100 py-2"
                        >
                            Login
                        </button>
                    </form>
                    <p className="my-2">Don't have an account? <a href="/signup" className="text-primary text-decoration-none">Sign up here</a></p>
                </div>
            </div>
        </div>
    );
}

export default Login;