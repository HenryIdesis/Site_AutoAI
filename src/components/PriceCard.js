import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../styles/PriceCard.css';
import Button from './Button';
const PriceCard = ({ title, price, features, isPopular = false, buttonText = 'Assinar Agora', onClick, }) => {
    return (_jsxs("div", { className: `price-card ${isPopular ? 'popular' : ''}`, children: [isPopular && _jsx("div", { className: "popular-badge", children: "Mais Popular" }), _jsxs("div", { className: "price-card-header", children: [_jsx("h3", { className: "price-card-title", children: title }), _jsxs("div", { className: "price-card-price", children: [_jsx("span", { className: "currency", children: "R$" }), _jsx("span", { className: "amount", children: price }), price !== 'Gratuito' && (_jsx("span", { className: "period", children: "/m\u00EAs" }))] })] }), _jsx("div", { className: "price-card-features", children: _jsx("ul", { children: features.map((feature, index) => (_jsxs("li", { children: [_jsx("i", { className: "fas fa-check" }), feature] }, index))) }) }), _jsx("div", { className: "price-card-action", children: _jsx(Button, { type: isPopular ? 'secondary' : 'primary', size: "large", fullWidth: true, onClick: onClick, children: buttonText }) })] }));
};
export default PriceCard;
