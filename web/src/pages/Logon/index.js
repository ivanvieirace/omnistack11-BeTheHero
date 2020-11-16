import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';
import '../../global.css';
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

          <a href="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho Cadastro
          </a>
        </form>
      </section>

      <img src={heroesImage} alt="Heroes" />
    </div>
  );
}
