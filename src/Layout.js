import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Admin from './components/Admin/Admin';
import User from './components/User/User';
import HomePage from './components/Home/HomePage';
import ManageUser from './components/Admin/Content/ManageUser';
import Dashboard from './components/Admin/Content/Dashboard';
import Login from './components/Auth/Login';
import App from "./App";
import { Bounce, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Layout = (props) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<HomePage />} />
                    <Route path="users" element={<User />} />

                </Route>
                <Route path="/admins" element={<Admin />}>
                    <Route index element={<Dashboard />} />
                    <Route path="manage-users" element={<ManageUser />} />
                </Route>
                <Route path="/login" element={<Login />} />

            </Routes>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </>
    );
}

export default Layout;