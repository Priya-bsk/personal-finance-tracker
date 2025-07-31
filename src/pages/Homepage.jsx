import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Shield, BarChart, Target } from 'lucide-react';

const Homepage = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Smart Budgeting',
      description: 'Set budgets and track your spending across different categories'
    },
    {
      icon: TrendingUp,
      title: 'Financial Insights',
      description: 'Get detailed insights into your spending patterns and trends'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your financial data is encrypted and kept completely secure'
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'Set and achieve your financial goals with our tracking tools'
    }
  ];

  return (
    <div className="homepage">
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Track your money with confidence</h1>
          <p className="hero-subtitle">
            Take control of your finances with VibeCode Finance. 
            Track expenses, manage budgets, and achieve your financial goals.
          </p>
          <div className="hero-actions">
            <Link to="/register" className="btn btn-primary">
              Start Tracking Now
            </Link>
            <Link to="/login" className="btn btn-secondary">
              Sign In
            </Link>
          </div>
        </div>
      </div>

      <div className="features" style={{ 
        padding: '4rem 2rem', 
        background: 'var(--card-bg)',
        borderTop: '1px solid var(--soft-border)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '3rem',
            fontSize: '2.5rem',
            color: 'var(--text-dark)'
          }}>
            Everything you need to manage your finances
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {features.map((feature, index) => (
              <div key={index} className="card" style={{ textAlign: 'center' }}>
                <feature.icon size={48} style={{ 
                  color: 'var(--primary-blue)', 
                  marginBottom: '1rem' 
                }} />
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  marginBottom: '1rem',
                  color: 'var(--text-dark)'
                }}>
                  {feature.title}
                </h3>
                <p style={{ color: 'var(--text-light)' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;