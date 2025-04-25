import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (_jsx("nav", { className: "navbar", children: _jsxs("div", { className: "navbar-container", children: [_jsxs(Link, { to: "/", className: "navbar-logo", children: [_jsx("span", { className: "logo-text", children: "Flux" }), _jsx("span", { className: "logo-highlight", children: "IA" })] }), _jsx("div", { className: "menu-icon", onClick: toggleMenu, children: _jsx("i", { className: isOpen ? 'fas fa-times' : 'fas fa-bars' }) }), _jsxs("ul", { className: isOpen ? 'nav-menu active' : 'nav-menu', children: [_jsx("li", { className: "nav-item", children: _jsx(Link, { to: "/", className: "nav-links", onClick: () => setIsOpen(false), children: "In\u00EDcio" }) }), _jsx("li", { className: "nav-item", children: _jsx(Link, { to: "/sobre", className: "nav-links", onClick: () => setIsOpen(false), children: "Sobre" }) }), _jsx("li", { className: "nav-item", children: _jsx(Link, { to: "/planos", className: "nav-links", onClick: () => setIsOpen(false), children: "Planos" }) }), _jsx("li", { className: "nav-item", children: _jsx(Link, { to: "/contato", className: "nav-links", onClick: () => setIsOpen(false), children: "Contato" }) })] })] }) }));
};
export default Navbar;
