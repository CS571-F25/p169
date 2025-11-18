import FFNavbar from "../components/FFNavbar";
import { Outlet } from "react-router";


export default function Layout(props) {
    return(
        <div style={{
            backgroundColor: 'var(--bs-primary-100)',
            minHeight: '100vh'
        }}>
            <FFNavbar/>
            <Outlet/>
        </div>
    );
}