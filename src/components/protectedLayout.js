import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from './sidebar';
const ProtectedLayout = () => {
    
    return (
        <div>
            <Outlet />
            <Navbar />
            <Sidebar />
        </div>
    )
}

export default ProtectedLayout;