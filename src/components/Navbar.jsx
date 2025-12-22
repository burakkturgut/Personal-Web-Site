import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav style={{ padding: "16px", borderBottom: "1px solid #ddd" }}>
            <NavLink to="/">Home</NavLink> |{" "}
            <NavLink to="/about">About</NavLink> |{" "}
            <NavLink to="/education">Education</NavLink> |{" "}
            <NavLink to="/projects">Projects</NavLink> |{" "}
            <NavLink to="/certificates">Certificates</NavLink> |{" "}
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    );
};

export default Navbar;
