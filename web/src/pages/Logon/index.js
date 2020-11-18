import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import '../../global.css';
import { FiLogIn } from 'react-icons/fi';
import logoImage from '../../assets/logo.svg';
import heroesImage from '../../assets/heroes.png';

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImage} alt="Be The Hero" />

        <form action="">
          <h1>Faça seu Logon</h1>

          <input placeholder="Sua ID" />
          <button type="submit" className="button">
            Entrar
          </button>

          <Link to="/register" className="back-link">
            <FiLogIn size={16} color="#E02041" />
            Não tenho Cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImage} alt="Heroes" />
    </div>
  );
}
