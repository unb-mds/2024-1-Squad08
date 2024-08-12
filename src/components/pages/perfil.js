import React from "react";
import './styles/perfil.css'

class PlaceholderLogo extends React.Component {
    //stateless component, simply displays this Logo
    render() { 
        return (
            <div>
                <a href="/" className="logo">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0,0,256,256"
                    >
                        <g
                            fill="#ffc98a"
                            fillRule="nonzero"
                            stroke="none"
                            strokeWidth={1}
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            strokeMiterlimit={10}
                            strokeDasharray=""
                            strokeDashoffset={0}
                            fontFamily="none"
                            fontWeight="none"
                            fontSize="none"
                            textAnchor="none"
                            style={{ mixBlendMode: "normal" }}
                        >
                            <path d="M0,256v-256h256v256z" id="bgRectangle" />
                        </g>
                        <g
                            fill="#ffffff"
                            fillRule="nonzero"
                            stroke="none"
                            strokeWidth={1}
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            strokeMiterlimit={10}
                            strokeDasharray=""
                            strokeDashoffset={0}
                            fontFamily="none"
                            fontWeight="none"
                            fontSize="none"
                            textAnchor="none"
                            style={{ mixBlendMode: "normal" }}
                        >
                            <g transform="scale(8,8)">
                                <path d="M16,2.59375l-0.71875,0.6875l-13,13l1.4375,1.4375l1.28125,-1.28125v11.5625h9v-10h4v10h9v-11.5625l1.28125,1.28125l1.4375,-1.4375l-13,-13zM16,5.4375l9,9v11.5625h-5v-10h-8v10h-5v-11.5625z" />
                            </g>
                        </g>
                    </svg>
                </a>
            </div>
        )
    }
}

class perfil extends React.Component {
    
    render() {
        return (
            <div>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Perfil do Usuário</title>
                    <link
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
                        rel="stylesheet"
                        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
                        crossOrigin="anonymous"
                    />
                    <link rel="stylesheet" href="styles\perfil.css" />
                    <div className="col colunaCima">
                        <h1 className="titulo">UniRep</h1>
                        <PlaceholderLogo/>
                    </div>
                    <div className="restante">
                        <div className="ladoEsquerdo">
                            <div className="photo-container">
                                <img src="images/teste.png" alt="Sua foto" />
                            </div>
                            <div className="choose-box">
                                <div className="botoes">
                                    <button className="botaoGeral" id="perfilButton">
                                        Perfil
                                    </button>
                                    <button className="botaoRepublica botaoGeral" id="republicaButton">
                                        Repúblicas
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="ladoDireito">
                            <div id="perfilDiv">
                                <div className="form-container">
                                    <form action="#" method="POST">
                                        Nome
                                        <div className="input-group infos">
                                            <label id="nome" htmlFor="">
                                                Bruno Cruz Garcia Rosa
                                            </label>
                                        </div>
                                        E-mail
                                        <div className="input-group infos">
                                            <label id="email" htmlFor="">
                                                Bruno.cruz4715@gmail.com
                                            </label>
                                        </div>
                                        Cpf
                                        <div className="input-group infos">
                                            <label id="cpf" htmlFor="">
                                                123.465.789-10
                                            </label>
                                        </div>
                                        Data de Nascimento
                                        <div className="input-group infos">
                                            <label id="data" htmlFor="">
                                                02/08/2004
                                            </label>
                                        </div>
                                    </form>
                                </div>
                                <div className="edit">
                                    <a href="">
                                        <button
                                            className="editButton"
                                            id="editarButton"
                                            onclick="editarPerfil()"
                                        >
                                            {" "}
                                            Editar{" "}
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <div id="republicaDiv">
                                <div id="carouselExample " className="carousel slide carrossel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item">
                                            <img
                                                src="images\image1.jpg"
                                                className="d-block w-100"
                                                alt="dasdasdsa"
                                            />
                                        </div>
                                        <div className="carousel-item active imagens">
                                            <img
                                                src="images\image2.png"
                                                className="d-block w-100"
                                                alt="alt"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img
                                                src="images\image3.png"
                                                className="d-block w-100"
                                                alt="..."
                                            />
                                        </div>
                                    </div>
                                    <button
                                        className="carousel-control-prev"
                                        type="button"
                                        data-bs-target="#carouselExample"
                                        data-bs-slide="prev"
                                    >
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button
                                        className="carousel-control-next"
                                        type="button"
                                        data-bs-target="#carouselExample"
                                        data-bs-slide="next"
                                    >
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>)
    }
}

export default perfil