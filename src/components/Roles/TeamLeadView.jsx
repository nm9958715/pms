// TeamLeadSignup.jsx

import React, { useState } from "react";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../api/axios";

const TeamLeadView = ({ onSubmit }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isValid, setIsValid] = useState(false);

    const handleValidation = () => {
        // Perform validation here
        const isValid = true; // Replace this with your validation logic
        setIsValid(isValid);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleValidation();
        if (isValid) {
            onSubmit({ username, password, role: "team_lead" });
        }
    };

    return (
        <div>
            <h2>Team Lead Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Login</button>
            </form>
            <p>
                <FontAwesomeIcon icon={faUsers} /> You're login as a Team Lead
            </p>
        </div>
    );
};

export default TeamLeadView;
