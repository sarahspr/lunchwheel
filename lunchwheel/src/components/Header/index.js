import React from 'react';
import styles from './styles.m.scss';


function Header(props) {
  return (
    <div className="header">
      <div className="title">
        <h1>{props.title}</h1>
      </div>
      <div className="login">
        <a href="#">Login</a>
      </div>
    </div>
  );
};

export default Header;