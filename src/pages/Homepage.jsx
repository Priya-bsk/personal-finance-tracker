import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Shield, BarChart, Target, CalendarCheck, CreditCard, PieChart, Coins } from 'lucide-react';

const Homepage = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Smart Budgeting',
      description: 'Set budgets and track your spending across different categories',
    },
    {
      icon: TrendingUp,
      title: 'Financial Insights',
      description: 'Get detailed insights into your spending patterns and trends',
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your financial data is encrypted and kept completely secure',
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'Set and achieve your financial goals with our tracking tools',
    },
    {
      icon: CalendarCheck,
      title: 'Bill Reminders',
      description: 'Never miss a due date with automatic bill reminders and notifications',
    },
    {
      icon: CreditCard,
      title: 'Expense Categorization',
      description: 'Automatically categorize expenses for better budgeting',
    },
    {
      icon: PieChart,
      title: 'Spending Charts',
      description: 'Visualize your spending habits with interactive charts',
    },
    {
      icon: Coins,
      title: 'Multi-Account Support',
      description: 'Manage all your bank accounts and wallets in one place',
    }
  ];

  return (
    <div className="homepage">

      {/* 🔹 Header */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        borderBottom: '1px solid var(--soft-border)',
        backgroundColor: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}>
        <h1 style={{ fontSize: '1.75rem', color: 'var(--primary-blue)', fontWeight: 'bold' }}>
          Finote
        </h1>
        <div>
          <Link to="/login" className="btn btn-outline" style={{ marginRight: '1rem' }}>
            Sign In
          </Link>
          <Link to="/register" className="btn btn-primary">
            Sign Up
          </Link>
        </div>
      </header>

      {/* 🔹 Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Track your money with confidence</h1>
          <p className="hero-subtitle">
            Take control of your finances with Finote. 
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

      {/* 🔹 Features Section */}
      <div
        className="features"
        style={{
          padding: '4rem 2rem',
          background: 'var(--card-bg)',
          borderTop: '1px solid var(--soft-border)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              textAlign: 'center',
              marginBottom: '3rem',
              fontSize: '2.5rem',
              color: 'var(--text-dark)',
            }}
          >
            Everything you need to manage your finances
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
            }}
          >
            {features.map((feature, index) => (
              <div key={index} className="card" style={{ textAlign: 'center' }}>
                <feature.icon
                  size={48}
                  style={{
                    color: 'var(--primary-blue)',
                    marginBottom: '1rem',
                  }}
                />
                <h3
                  style={{
                    fontSize: '1.25rem',
                    marginBottom: '1rem',
                    color: 'var(--text-dark)',
                  }}
                >
                  {feature.title}
                </h3>
                <p style={{ color: 'var(--text-light)' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          padding: '2rem',
          backgroundColor: '#f8f8f8',
          borderTop: '1px solid var(--soft-border)',
          textAlign: 'center',
          color: '#555',
          marginTop: '4rem',
        }}
      >
        <p>© {new Date().getFullYear()} Finote. All rights reserved.</p>
        <p>
          Built with 💙 for better budgeting.
        </p>
      </footer>
    </div>
  );
};

export default Homepage;
