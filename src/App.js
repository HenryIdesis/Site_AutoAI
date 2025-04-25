import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Plans from './pages/Plans';
import Contact from './pages/Contact';
import './styles/global.css';
import './App.css';
function App() {
    return (_jsx(Router, { children: _jsxs("div", { className: "app", children: [_jsx(Navbar, {}), _jsx("main", { className: "main-content", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/sobre", element: _jsx(About, {}) }), _jsx(Route, { path: "/planos", element: _jsx(Plans, {}) }), _jsx(Route, { path: "/contato", element: _jsx(Contact, {}) })] }) }), _jsx(Footer, {})] }) }));
}
export default App;
