'use client'
import { setUser } from "@/redux/features/auth/authSlice";
import { store } from "@/redux/store";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Providers = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            store.dispatch(setUser(JSON.parse(user)));
        }
    })
    return <Provider store={store}>
        {children}
        <ToastContainer />
        </Provider>;
}

export default Providers