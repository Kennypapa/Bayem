import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from "react";
import { auth } from '../../firebase.config';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState("daramolakehinde339@gmail.com");
    const [password, setPassword] = useState("kennyd");
    const navigate = useNavigate();
    const Swal = require("sweetalert2");

    // LOGIN HANDLER
    const loginHandler = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                Swal.fire({
                    title: 'Logged in Successfully',
                    text: "Do you want to continue",
                    icon: "success",
                    confirmButtonText: "Cool",
                });
                navigate("/dashboard");
                console.log(user);
            }).catch((error) => {
                console.log(error);
                const errorCode = error.code;
                Swal.fire({
                    title: errorCode,
                    text: "Do you want to continue",
                    icon: "error",
                    confirmButtonText: "OK",
                });
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
                                    <button type="submit" className="bg-[#103d15] hover:bg-[#ff9c40] text-white ease-in-out duration-200 h-[50px] rounded-md w-100">
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