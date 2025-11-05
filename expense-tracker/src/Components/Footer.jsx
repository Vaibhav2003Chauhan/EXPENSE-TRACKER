import React from 'react'


export default function Footer() {
    return (
        <>
            <footer className="bg-dark text-light py-4 mt-5 page-down foot">
                <div className="container text-center">
                    {/* App name and tagline */}
                    <h5 className="fw-bold">MyEMI Tracker</h5>
                    <p className="mb-2 text-secondary">Manage your EMIs with ease.</p>

                    {/* Divider line */}
                    <hr className="border-white w-50 mx-auto " />

                    {/* Copyright */}
                    <p className="mt-3 mb-0 text-secondary">
                        © {new Date().getFullYear()} MyEMI Tracker. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    )
}
