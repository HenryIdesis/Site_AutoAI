import React from 'react';
import '../styles/PriceCard.css';
import Button from './Button';

interface PriceCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  buttonText?: string;
  onClick?: () => void;
}

const PriceCard: React.FC<PriceCardProps> = ({
  title,
  price,
  features,
  isPopular = false,
  buttonText = 'Assinar Agora',
  onClick,
}) => {
  return (
    <div className={`price-card ${isPopular ? 'popular' : ''}`}>
      {isPopular && <div className="popular-badge">Mais Popular</div>}
      <div className="price-card-header">
        <h3 className="price-card-title">{title}</h3>
        <div className="price-card-price">
          <span className="currency">R$</span>
          <span className="amount">{price}</span>
          <span className="period">/mês</span>
        </div>
      </div>
      <div className="price-card-features">
        <ul>
          {features.map((feature, index) => (
            <li key={index}>
              <i className="fas fa-check"></i>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="price-card-action">
        <Button 
          type={isPopular ? 'secondary' : 'primary'} 
          size="large" 
          fullWidth 
          onClick={onClick}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default PriceCard;
