import { jsx as _jsx } from "react/jsx-runtime";
import '../styles/Button.css';
const Button = ({ children, type = 'primary', size = 'medium', onClick, fullWidth = false, className = '', }) => {
    return (_jsx("button", { className: `button ${type} ${size} ${fullWidth ? 'full-width' : ''} ${className}`, onClick: onClick, children: children }));
};
export default Button;
