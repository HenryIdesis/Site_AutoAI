import React from 'react';
import '../styles/Hero.css';
import Button from './Button';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  onCtaClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  onCtaClick,
}) => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <div className="hero-cta">
          <Button type="secondary" size="large" onClick={onCtaClick}>
            {ctaText}
          </Button>
        </div>
      </div>
      <div className="hero-image">
        <div className="hero-blob"></div>
        <div className="hero-illustration"></div>
      </div>
    </div>
  );
};

export default Hero;
