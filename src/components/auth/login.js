import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from "react";
import { auth } from '../../firebase.config';
import { useNavigate, redirect } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState("daramolakehinde340@gmail.com");
    const [password, setPassword] = useState("kennyd");
    const navigate = useNavigate();
    const Swal = require("sweetalert2");
    // LOGIN HANDLER
    const loginHandler = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                localStorage.setItem('tokenId', JSON.stringify(userCredentials._tokenResponse.idToken));
                const user = localStorage.getItem('tokenId');
                if (user) {
                    navigate('/dashboard');
                    Swal.fire({
                        title: "Logged in successfully",
                        text: "Do you want to continue",
                        icon: "success",
                        confirmButtonText: "OK",
                    });
                }
            }).catch((error) => {
                Swal.fire({
                    title: error.message,
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
                            <div className='flex justify-between items-center mb-4'>
                                <div className="flex justify-center items-center w-[220px] ">
                                    <img src="assets/img/logos/Bayem-Logo.png" alt="logo" />
                                </div>
                                <p className=' font-semibold !text-2xl'>Admin Login</p>
                            </div>

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