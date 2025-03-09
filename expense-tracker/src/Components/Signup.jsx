import React, { use } from "react";
import { useState } from "react";

function Signup() {
    const [username, set_username] = useState("");
    const [email, set_email] = useState("");
    const [password, set_password] = useState("");
    const [cpassword, set_cpassword] = useState("");

    const send_user_information = async (event) => {
        event.preventDefault();
        console.log("Hey the Function has been clicked into");
        const userdata = {
            username,
            email,
            password,
            cpassword
        };
        console.log(`The Final user data in object is as : ${userdata}`);
        console.log(userdata)

        if (username == null || email == null || password == null || cpassword == null) {
            alert("Please enter all value ");

        }
        else {
            if (password == cpassword) {
                try {
                    const response = await fetch('http://127.0.0.1:8000/api/signup',
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(userdata),
                        }
                    )

                    if (!response.ok) {
                        console.log("Unsuccessfull Results are being Calculated")
                    }
                    const result = await response.json(); // Parse the JSON response
                    console.log('Success:', result);
                }
                catch (err) {
                    console.log("The Log is in the error ");
                    console.log(err)
                }
            }
            else {
                alert("Both passwords are not a match")
            }
        }
    }
    return (
        <>
            <div className="main_container">

                <div className="left_container">
                    <h1>Hello !</h1>
                    <h3> Welcome to the Expense Tracker </h3>
                </div>

                <div className="right_container">
                    <form className="signup_container">
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="text" id="email" placeholder="Enter Email here" onChange={(e) => { set_email(e.target.value) }} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" placeholder="Enter Username" onChange={(e) => { set_username(e.target.value) }} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="Enter Password here" onChange={(e) => set_password(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input type="password" id="confirm-password" placeholder="Confirm Password again" onChange={(e) => set_cpassword(e.target.value)} />
                        </div>

                        <button type="submit" onClick={send_user_information}>Sign Up</button>
                    </form>
                </div>

            </div>
        </>
    );
}

export default Signup;