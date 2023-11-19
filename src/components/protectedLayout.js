import { Outlet, redirect} from "react-router-dom";
import { useEffect } from "react";
const ProtectedLayout = () => {
    useEffect(() => {
        const user = localStorage.getItem('tokenId');
        if (user) {
             console.log("user allowed");
        }else{
           return redirect("/login");
        }
    })

    return (
        <Outlet />
    )
}

export default ProtectedLayout;