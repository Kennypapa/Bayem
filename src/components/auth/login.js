import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from "react";
import { auth } from '../../firebase.config';

const Login = () => {
    const [email, setEmail] = useState("daramolakehinde339@gmail.com");
    const [password, setPassword] = useState("kenny");

    // LOGIN HANDLER
    const loginHandler = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })
    }
    return (
        <div className="login-38">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 form-section border">
                        <div className="form-inner">
                            <div className="flex justify-center items-center">
                                <img src="assets/img/logos/Bayem-Logo.png" alt="logo" />
                            </div>
                            <h3>Sign in and join us.</h3>
                            <form onSubmit={loginHandler}>
                                <div className="form-group form-box">
                                    <input
                                        type="text"
                                        name="email"
                                        className="form-control"
                                        placeholder="Email Address"
                                        aria-label="Email Address"
                                        value={email}
                                        onChangeHandler={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group form-box clearfix">
                                    <input
                                        name="password"
                                        type="password"
                                        className="form-control"
                                        autoComplete="off"
                                        placeholder="Password"
                                        aria-label="Password"
                                        value={password}
                                        onChangeHandler={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <div className="form-group clearfix">
                                    <button type="submit" className="btn-md btn-theme w-100">
                                        Login
                                    </button>
                                </div>

                            </form>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="col-lg-6 bg-img"></div>
                </div>
            </div>
        </div>
    )
}
export default Login;