import React from 'react';
import styles from './styles.m.scss';


function Header(props) {
  return (
    <div class="header">
      <div class="title">
        <h1>{props.title}</h1>
      </div>
      <div class="login">
        <a href="#">Login</a>
      </div>
    </div>
  );
};

export default Header;