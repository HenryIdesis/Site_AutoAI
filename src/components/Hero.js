import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/Hero.css';
import Button from './Button';
const Hero = ({ title, subtitle, ctaText, onCtaClick, }) => {
    return (_jsxs("div", { className: "hero-container", children: [_jsxs("div", { className: "hero-content", children: [_jsx("h1", { className: "hero-title", children: title }), _jsx("p", { className: "hero-subtitle", children: subtitle }), _jsx("div", { className: "hero-cta", children: _jsx(Button, { type: "secondary", size: "large", onClick: onCtaClick, children: ctaText }) })] }), _jsxs("div", { className: "hero-image", children: [_jsx("div", { className: "hero-blob" }), _jsx("div", { className: "hero-illustration" })] })] }));
};
export default Hero;
