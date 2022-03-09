import "./login.styles.css";
import { Link } from 'react-router-dom';

function Login() {
    return ( 
        <>
            <div className="bui-container">
                <div className="bui-auth">
                    <div className="bui-card">
                        <div className="bui-card-body">
                            <h5 className="bui-card-title bui-text-center bui-mb-3 bui-mt-3">Login</h5>
                            <div className="bui-auth-form">
                                <form action="">
                                    <div className="bui-mb-3">
                                        <label for="email" className="bui-form-label">Email</label>
                                        <input type="text" className="bui-form-control" name="email"/>
                                    </div>
                                    <div className="bui-mb-3">
                                        <label for="password" className="bui-form-label">Password</label>
                                        <input type="password" className="bui-form-control" name="password"/>
                                    </div>
                                    <div className="bui-mb-3 bui-remember">
                                        <span><input type="checkbox"/> Remember Me</span>
                                        <span><a href="#">Forget your password?</a></span>
                                    </div>
                                    <div className="bui-mb-4">
                                        <button className="bui-btn bui-btn-info bui-btn-block">Login</button>
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