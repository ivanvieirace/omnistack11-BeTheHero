import React from 'react';
import '../NewIncident/styles.css';
import logoImage from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export default function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImage} alt="Be The Hero" />
          <h1>Cadastrar novo Caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <Link to="/profile" className="back-link">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para Profile
          </Link>
        </section>

        <form>
          <input type="text" placeholder="Título do Caso" />
          <textarea placeholder="Descrição" />
          <input type="text" placeholder="Valor em Reais" />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
