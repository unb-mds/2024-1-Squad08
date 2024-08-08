/*
this is the in-file documentation of wtf is going on in our login bizarre adventure.

Zero'st, the main thingy here which actually matters is the bloody login. 
Most other stuff is random ass svgs and components. As a minor guide to understand this 
BETA ROMEO FOXTROT, follow along login and the rest should come up fine and dandy. 

First, original had FOXTROTGEORGE svgs all around the stuff, which was simply unbearable to read.
moved that to constants or classes.

Second, this is almost good to put on some kind of overlay in any other page. 
would be if it FOXTROTGEORGE displayed alright. Guess what? IT SURE AS HELL AS OF 
THE TIME OF WRITING THIS COMMENT AIN'T. 
  Which means the css is prolly operating with a twig and a piece of gum for design and execution. 
  Not to blame whoever of the other guys wrote it, i could FOXTROT INDIA UNIFORM much worse.
  And css in general is a mess of reading documentation and test and trial over and over and over
  until you're with a functional visual design, ptsd or FOXTROT both!
  Very retarded, but, guess what? AIN'T MY BETA JOB, at least for now (05/08/24), might be me next 
  trying to make a FOXTROT div center or something.

signed by locvst, terrible programmer. Will sign it again later when i finish fixing this.
*/

import React from "react";
import './styles/login.css'

const HomeLogo = () => {
  return (
    <a href="home" className="back">
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
            <path d="M292.866,254.432c-2.288,0-4.443-1.285-5.5-3.399c-0.354-0.684-28.541-52.949-146.169-54.727v51.977
               c0,2.342-1.333,4.48-3.432,5.513c-2.096,1.033-4.594,0.793-6.461-0.63L2.417,154.392C0.898,153.227,0,151.425,0,149.516 c0-1.919,0.898-3.72,2.417-4.888l128.893-98.77c1.87-1.426,4.365-1.667,6.461-0.639c2.099,1.026,3.432,3.173,3.432,5.509v54.776 c3.111-0.198,7.164-0.37,11.947-0.37c43.861,0,145.871,13.952,145.871,143.136c0,2.858-1.964,5.344-4.75,5.993
                C293.802,254.384,293.34,254.432,292.866,254.432z" />
            </g>
          </g>
        </svg>
    </a>
  )
}

class LoginAlts extends React.Component { 
  constructor(props) { 
    super(props)
  }

  render() { 
    return (
      <div className="login-with">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          <div className="button-log">
            <svg
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              width="56.6934px"
              viewBox="0 0 56.6934 56.6934"
              version="1.1"
              style={{ enableBackground: "new 0 0 56.6934 56.6934" }}
              id="Layer_1"
              height="56.6934px"
              className="icon"
            >
              <path d="M51.981,24.4812c-7.7173-0.0038-15.4346-0.0019-23.1518-0.001c0.001,3.2009-0.0038,6.4018,0.0019,9.6017  c4.4693-0.001,8.9386-0.0019,13.407,0c-0.5179,3.0673-2.3408,5.8723-4.9258,7.5991c-1.625,1.0926-3.492,1.8018-5.4168,2.139  c-1.9372,0.3306-3.9389,0.3729-5.8713-0.0183c-1.9651-0.3921-3.8409-1.2108-5.4773-2.3649  c-2.6166-1.8383-4.6135-4.5279-5.6388-7.5549c-1.0484-3.0788-1.0561-6.5046,0.0048-9.5805  c0.7361-2.1679,1.9613-4.1705,3.5708-5.8002c1.9853-2.0324,4.5664-3.4853,7.3473-4.0811c2.3812-0.5083,4.8921-0.4113,7.2234,0.294  c1.9815,0.6016,3.8082,1.6874,5.3044,3.1163c1.5125-1.5039,3.0173-3.0164,4.527-4.5231c0.7918-0.811,1.624-1.5865,2.3908-2.4196  c-2.2928-2.1218-4.9805-3.8274-7.9172-4.9056C32.0723,4.0363,26.1097,3.995,20.7871,5.8372  C14.7889,7.8907,9.6815,12.3763,6.8497,18.0459c-0.9859,1.9536-1.7057,4.0388-2.1381,6.1836  C3.6238,29.5732,4.382,35.2707,6.8468,40.1378c1.6019,3.1768,3.8985,6.001,6.6843,8.215c2.6282,2.0958,5.6916,3.6439,8.9396,4.5078  c4.0984,1.0993,8.461,1.0743,12.5864,0.1355c3.7284-0.8581,7.256-2.6397,10.0725-5.24c2.977-2.7358,5.1006-6.3403,6.2249-10.2138  C52.5807,33.3171,52.7498,28.8064,51.981,24.4812z"></path>
            </svg>
          </div>
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          <div className="button-log">
            <svg
              className="icon"
              height="56.693px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 56.693 56.693"
              width="56.693px"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path d="M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029
                c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77
                  L40.43,21.739z"></path>
            </svg>
          </div>
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          <div className="button-log">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              width="56.6934px"
              viewBox="0 0 56.6934 56.6934"
              version="1.1"
              style={{ enableBackground: "new 0 0 56.6934 56.6934" }}
              id="Layer_1"
              height="56.6934px"
              className="icon"
            >
              <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
            </svg>
          </div>
        </a>
      </div>
    )
  }
}

class login extends React.Component {
  constructor(props) { 
    super(props)
  }
  render(){
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login</title>
        <link rel="shortcut icon" type="imagex/png" href="images\casa.png" />
        <link rel="stylesheet" href="styles\login.css" />
        <div className="Esquerdo">
          <div className="content">
            <HomeLogo />
            <h1 className="titulo">UniRep</h1>
            <h2 className="subtitle"> Repúblicas Universitárias </h2>
            <div className="login-box">
              <h2 className="loginText">Login</h2>
              <form action="#" method="POST">
                <div className="input-group inputs">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required=""
                    placeholder="E-mail ou CPF"
                  />
                </div>
                <div className="input-group inputs">
                  <input
                    type="password"
                    placeholder="Senha"
                    id="password"
                    name="password"
                    required=""
                  />
                </div>
                <div className="input-group checkbox-wrapper-2">
                  <input
                    type="checkbox"
                    id="showPassword"
                    className="checkmark sc-gJwTLC ikxBAC"
                  />
                  <label
                    htmlFor="show-password"
                    style={{ verticalAlign: "top", color: "#555353" }}
                  >
                    Mostrar Senha
                  </label>
                </div>
                <div className="button-container">
                  <a href="home.html" style={{ textDecoration: "none" }}>
                    <button className="entrar">
                      Entrar
                      <div className="arrow-wrapper">
                        <div className="arrow" />
                      </div>
                    </button>
                  </a>
                </div>
              </form>
            </div>
            <div className="forget">
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
                {" "}
                Esqueceu a senha?{" "}
              </a>
            </div>
            <LoginAlts />
            <div className="finalBox button-container">
              <label
                htmlFor=""
                style={{
                  display: "flex",
                  alignItems: "center",
                  flex: 1,
                  marginLeft: 30,
                  color: "#555353"
                }}
              >
                Primeira vez acessando?
              </label>
              <a href="/newuser" style={{ marginRight: 10 }}>
                <button className="cadastre">
                  Cadastrar
                  <div className="arrow-wrapper">
                    <div className="arrow" />
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="direito">
          <div className="box"></div>
        </div>
    </div>
    )
  }
} export default login