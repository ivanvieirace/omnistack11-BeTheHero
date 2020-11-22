import React from 'react';
import '../Profile/styles.css';
import logoImage from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImage} alt="Be The Hero" />
        <span>Bem Vinda APAD</span>

        <Link to="/incidents/new" className="button">
          Cadastrar novo Caso
        </Link>
        <button type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>
    </div>
  );
}
