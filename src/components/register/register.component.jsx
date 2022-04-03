import './register.styles.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useUser } from '../../context/user-context';
import axios from 'axios';
import { BASE_URL } from '../../context/global-context';

function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [terms, setTerms] = useState(false);
    const [error, setError] = useState("");
    const { dispatchUser } = useUser();


    const handleSubmit = async (e) => {
        e.preventDefault();

        if(firstName == "" || lastName == "" || email == "" || password == "" || terms == false){
            setError("Enter your valid register details");
            return;
        };
        
        setError("");
        
        await axios.post(BASE_URL + 'auth/register', { first_name: firstName, last_name: lastName, email, password }).then((res) => {
            dispatchUser({type: "LOGGED_IN_USER",payload: res.data});
        }).catch((err) => {
            setError("Invalid register detail");
            dispatchUser({type: "LOGGED_OUT_USER",payload: null});
        })
    }

    return ( 
        <>
            <div className="bui-container">
                <div className="bui-auth">
                    <div className="bui-card">
                        <div className="bui-card-body">
                            <h5 className="bui-card-title bui-text-center bui-mb-3 bui-mt-3">Register</h5>
                            <div className="bui-auth-form">
                                <form>
                                    <div className="bui-mb-3">
                                        <label htmlFor="first_name" className="bui-form-label">First Name</label>
                                        <input type="text" className="bui-form-control" name="first_name" onChange={(e) => setFirstName(e.target.value)} />
                                    </div>

                                    <div className="bui-mb-3">
                                        <label htmlFor="last_name" className="bui-form-label">Last Name</label>
                                        <input type="text" className="bui-form-control" name="last_name" onChange={(e) => setLastName(e.target.value)} />
                                    </div>

                                    <div className="bui-mb-3">
                                        <label htmlFor="email" className="bui-form-label">Email</label>
                                        <input type="email" className="bui-form-control" name="email" onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="bui-mb-3">
                                        <label htmlFor="password" className="bui-form-label">Password</label>
                                        <input type="password" className="bui-form-control" name="password" onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div className="bui-mb-3 bui-remember">
                                        <span><input type="checkbox" onChange={(e) => setTerms(!terms)} /> I accept all terms and condition</span>
                                    </div>
                                    <div className="bui-mb-2">
                                        <button className="bui-btn bui-btn-info bui-btn-block"  onClick={handleSubmit}>Create new account</button>
                                    </div>
                                    <div className="bui-pb-1 bui-pt-1 bui-text-center bui-mb-2" style={{ color: "red" }}>
                                        {error && error}
                                    </div>
                                    <div className="bui-mb-3 bui-text-center">
                                        <Link to="/login">Already have account <i className="bi bi-chevron-right"></i></Link>
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

export default Register;