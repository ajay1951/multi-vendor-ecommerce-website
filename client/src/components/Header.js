import React from 'react';

const Header = () => {
  return (
    <header style={{
      backgroundColor: '#203040',
      padding: '1rem',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div>
        <a href="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>My E-Commerce Store</a>
      </div>
      <div>
        <a href="/cart" style={{ color: 'white', marginRight: '1rem' }}>Cart</a>
        <a href="/login" style={{ color: 'white' }}>Sign In</a>
      </div>
    </header>
  );
};

export default Header;