import React from "react";
//import './styles/republica.css'

/* 
Yo wtf is going on here? LOL
Objeticves:
1- Re-style this
2- Request from the database

Methods:
1- While re-designing, prepare the placeholders and sign them with a comment to warn about the database request

Notes:
1- Tried to change the main colors. Kinda worked but still looks goofy
2- The idea here is simple: Get the republic name, host, price and photos. All of that is only possible of happening once the API is... something
*/

const Header = () => {
    const title = {
        color: "white",
        fontFamily: "Sans-sheriff",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "70px",
        textAlign: "center"
         
    }
    // Home button in the republic menu
    return(
        <>
        <li><a href="/" style={title}>UniRep</a> </li> 
        </>
    )
}
// NEED API

function republica() {

    return(
        <div>
            <Header />
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
            


        </div>
    )
} export default republica