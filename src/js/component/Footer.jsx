import React from "react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="text-white p-4 mt-auto mt-auto footer footer-dark bg-dark text-center">
            <div>
                {`Copyright © David Shustin ${currentYear}`}
            </div>
        </footer>
    )
};