import React from "react";
import './styles/republica.css'

function republica() {
    return(
        <div>

            <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
            <link rel="stylesheet" href="styles\republica.css" />
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
                crossOrigin="anonymous"
            />
            <div className="col colunaCima">
                <h1 className="titulo">UniRep</h1>
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
            <h2 className="RepName">Nome da república</h2>
            <div className="restante">
                <div className="repsImages">
                <img src="images/image1.jpg" className="imagem" />
                <div className="imagem-dividida">
                    <img
                    src="images/image2.jpg"
                    className="sub-imagem"
                    style={{ borderTopRightRadius: 40 }}
                    />
                    <img
                    src="images/image4.jpg"
                    className="sub-imagem"
                    style={{ borderBottomRightRadius: 40, marginTop: 10 }}
                    />
                </div>
                </div>
                <div className="repInfos">
                <div>
                    <label htmlFor="" className="Valor">
                    R$1500,00
                    </label>
                </div>
                <div className="fotoContainer">
                    <label htmlFor="" style={{ fontSize: 25 }}>
                    Anfritrião
                    </label>
                    <a href="">
                    <img src="images/teste.png" className="fotoImage" alt="" />
                    </a>
                    <a href="">
                    <label htmlFor="" className="nomeAnfitriao">
                        Adair de Souza
                    </label>
                    </a>
                </div>
                </div>
                <div className="repRate"></div>
            </div>
            </>


        </div>
    )
} export default republica