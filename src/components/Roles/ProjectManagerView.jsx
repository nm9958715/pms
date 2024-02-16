// ProjectManagerSignup.jsx

import React, { useState } from "react";
import { faUserCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './LoginForm.css';

const ProjectManagerView = ({ onSubmit }) => {
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
            onSubmit({ username, password, role: "project_manager" });
        }
    };

    return (
        <div className="AllSelector">
            
            <h2>Project Manager Login</h2>
            <form id="Logform" onSubmit={handleSubmit}>
                <label  id="loglabel">
                    Username:
                    <input
                        id="loginput"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <label  id="loglabel">
                    Password:
                    <input
                        id="loginput"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit" id="logbutton"  >Login</button>
            </form>
            <p>
                <FontAwesomeIcon icon={faUserCog} /> You're Login as a Project Manager
            </p>
            </div>
        
    );
};

export default ProjectManagerView;
