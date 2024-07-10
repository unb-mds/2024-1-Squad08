import React from 'react';
import './styles/cadastro.css'

function cadastro(){
  return(
    <div>

<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cadastrar</title>
  <link rel="stylesheet" href="styles\cadastro.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"
    rel="stylesheet"
  />
  <div className="ladoEsquerdo">
    <div className="box">
      <a href="login.html">
        <svg
          fill="#000000"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="30px"
          height="30px"
          viewBox="0 0 299.021 299.021"
          xmlSpace="preserve"
        >
          <g>
            <g>
              <path d="M292.866,254.432c-2.288,0-4.443-1.285-5.5-3.399c-0.354-0.684-28.541-52.949-146.169-54.727v51.977 c0,2.342-1.333,4.48-3.432,5.513c-2.096,1.033-4.594,0.793-6.461-0.63L2.417,154.392C0.898,153.227,0,151.425,0,149.516 c0-1.919,0.898-3.72,2.417-4.888l128.893-98.77c1.87-1.426,4.365-1.667,6.461-0.639c2.099,1.026,3.432,3.173,3.432,5.509v54.776 c3.111-0.198,7.164-0.37,11.947-0.37c43.861,0,145.871,13.952,145.871,143.136c0,2.858-1.964,5.344-4.75,5.993 C293.802,254.384,293.34,254.432,292.866,254.432z" />
            </g>
          </g>
        </svg>
      </a>
    </div>
  </div>
  <div className="ladoDireito">
    <div className="content">
      <div className="textos">
        <h1 className="titulo">UniRep</h1>
        <h2 className="subtitle"> Repúblicas Universitárias </h2>
        <h3 className="informe">
          {" "}
          Por favor, preencha todos os campos abaixo.
        </h3>
      </div>
      <div className="form-container">
        <form action="#" method="POST">
          <div className="input-group">
            <input
              placeholder="Nome:"
              type="text"
              id="nome"
              name="nome"
              required=""
            />
          </div>
          <div className="input-group">
            <select
              className="option"
              id="sexo"
              name="sexo"
              required=""
              aria-placeholder="sexo"
            >
              <option value="">Selecione o sexo</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outro">Outro</option>
            </select>
          </div>
          <div className="input-group">
            <input
              placeholder="CPF:"
              type="text"
              id="cpf"
              name="cpf"
              required=""
            />
            <input
              placeholder="data_nascimento"
              type="date"
              id="data_nascimento"
              name="data_nascimento"
              required=""
            />
          </div>
          <div className="input-group">
            <input
              placeholder="E-mail:"
              type="email"
              id="email"
              name="email"
              required=""
            />
            <input
              placeholder="Verificar E-mail:"
              type="email"
              id="verify_email"
              name="verify_email"
              required=""
            />
          </div>
          <div className="input-group">
            <input
              placeholder="Senha:"
              type="password"
              id="password"
              name="senha"
              required=""
            />
            <input
              placeholder="Verificar Senha:"
              type="password"
              id="verify_senha"
              name="verify_senha"
              required=""
            />
          </div>
          <div className="checkbox-wrapper-2">
            <input
              type="checkbox"
              id="showPassword"
              className="checkmark sc-gJwTLC ikxBAC"
            />
            <label htmlFor="show-password" style={{ verticalAlign: "top" }}>
              Mostrar Senha
            </label>
          </div>
          <div className="button-container">
            <a href="home.html" style={{ textDecoration: "none" }}>
              <button className="cadastrar" onclick="comparar()">
                Cadastrar
                <div className="arrow-wrapper">
                  <div className="arrow" />
                </div>
              </button>
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</>


    </div>
  )
} export default cadastro;