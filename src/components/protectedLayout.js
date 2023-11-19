import { Outlet, redirect, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./navbar";
import Sidebar from './sidebar';
const ProtectedLayout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        authUser();
    })
    
    const authUser = () => {
        const user = localStorage.getItem('tokenId');
        if (user) {
           return;
        } else {
            return navigate("/login");
        }
    }
    return (
        <div>
            <Outlet />
            <Navbar />
            <Sidebar />
        </div>
    )
}

export default ProtectedLayout;