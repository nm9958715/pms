import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../api/axios";
import { useHistory } from 'react-router-dom'; // Import useHistory hook
import './LoginForm.css';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%]).{8,24}$/;
const REGISTER_URL = '/LoginForm';

const LoginForm = () => {
    const userRef = useRef();
    const errRef = useRef();
    const history = useHistory(); // Get the history object from react-router-dom
    

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [role, setRole] = useState('');
    const [validRole, setValidRole] = useState(false); // State to track role validity
    const [roleFocus, setRoleFocus] = useState(false); // State to track role focus

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const handleLogin = () => {
        // Perform login logic
        // If login is successful, set token in localStorage
        localStorage.setItem('token', 'yourAuthToken');
    
        // Redirect to dashboard
        history.push('/dashboard');
      };
    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    useEffect(() => {
        setValidRole(role !== '');
    }, [role]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2 || !validRole) { // Validate role as well
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ user, pwd, role }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            setSuccess(true);
            setUser('');
            setPwd('');
            setMatchPwd('');
            setRole('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    const handleSignupClick = () => {
        history.push('/signupForm'); // Navigate to the signup page
    };

    return (
        <div className="AllSelector">
            
        <>
            {success ? (
                <section id="logsection">
                    <h1 id="logh1">Success!</h1>
                    <p>
                        <a href="#">Register</a>
                    </p>
                </section>
            ) : (
                <div className="AppSelector">
                <section id="logsection">
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    
                    <h1 id="logh1">Login</h1>
                    <form className="form"onSubmit={handleSubmit} id="logform">
                    <select
                            id="role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            required
                            aria-invalid={!validRole ? "true" : "false"}
                            aria-describedby="rolenote"
                            onFocus={() => setRoleFocus(true)}
                            onBlur={() => setRoleFocus(false)}
                            className="role-select" // Add this class
                        >
                            <option value="">Select Role</option>
                            <option value="project_manager">Project Manager</option>
                            <option value="team_lead">Team Lead</option>
                            <option value="team_member">Team Member</option>
                        </select>
                        <p id="rolenote" className={roleFocus && !validRole ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Select a Valid User.
                        </p>
                        <label id="loglabel" className = "label"htmlFor="username">
                            Username:
                            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                        </label>
                        <input className="input"
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>

                        <label id="loglabel" className = "label" htmlFor="password">
                            Password:
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                        </label>
                        <input className="input"
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>

                   <button enabled={!validName || !validPwd || !validMatch || !validRole} id="logbutton">Login</button>
                

                    </form>
                    <p>
                        Don't have an Account?<br />
                        <span className="line">
                            {/* Button to navigate to the signup page */}
                            <button onClick={handleSignupClick} id="logbutton">Register</button>
                        </span>
                    </p>
                    
                </section>
                </div>
            )}
        </>
        </div>
        
    )
}

export default LoginForm;