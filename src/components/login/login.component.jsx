import "./login.styles.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";
import { BASE_URL } from "../../context/global-context";
import { useUser } from "../../context/user-context";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const { dispatchUser } = useUser();


    const handleSubmit = async (e) => {
        e.preventDefault();

        if(email == "" || password == ""){
            setError("Enter your valid email & password");
            return;
        };
        
        setError("");

        await axios.post(BASE_URL + 'auth/login', { email, password }).then((res) => {
            dispatchUser({type: "LOGGED_IN_USER",payload: res.data});
        }).catch((err) => {
            setError("Invalid username or password");
            dispatchUser({type: "LOGGED_OUT_USER",payload: null});
        })
    }


    return ( 
        <>
            <div className="bui-container">
                <div className="bui-auth">
                    <div className="bui-card">
                        <div className="bui-card-body">
                            <h5 className="bui-card-title bui-text-center bui-mb-3 bui-mt-3">Login</h5>
                            <div className="bui-auth-form">
                                <form>
                                    <div className="bui-mb-3">
                                        <label htmlFor="email" className="bui-form-label">Email</label>
                                        <input type="email" className="bui-form-control" name="email" onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="bui-mb-3">
                                        <label htmlFor="password" className="bui-form-label">Password</label>
                                        <input type="password" className="bui-form-control" name="password" onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div className="bui-mb-3 bui-remember">
                                        <span><input type="checkbox"/> Remember Me</span>
                                        <span><a href="#">Forget your password?</a></span>
                                    </div>
                                    <div className="bui-mb-2">
                                        <button className="bui-btn bui-btn-info bui-btn-block" onClick={handleSubmit}>Login</button>
                                    </div>
                                    <div className="bui-pb-1 bui-pt-1 bui-text-center bui-mb-2" style={{ color: "red" }}>
                                        {error && error}
                                    </div>
                                    <div className="bui-mb-3 bui-text-center">
                                        <Link to="/register">Create new account <i className="bi bi-chevron-right"></i></Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Login;