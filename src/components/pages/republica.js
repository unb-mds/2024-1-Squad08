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

import React from "react";
//import './styles/republica.css'

function getRepublicInfo(id) {
    //1. send a request to the db
    //2. gather info
    //3. return the info
    //profit?
    console.log("le sex") //erase this, plz.

}

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

class republica extends React.Component {
    constructor(props) { 
        super(props);
        this.majorMalfunction = getRepublicInfo(props.id) //this will return an undefined. Very funny. FIXME.
        this.images = this.majorMalfunction.images
        this.name = "very funny" //TODO
        this.value = "IF YOU SEE THIS, THE DB AIN'T SENDING SHIT" //TODO
        this.mainGuy = "SUPER PLACEHOLDER MAN" //TODO
    }


    render() {
        return (
            <div>
                <Header />
                <h2 className="RepName">
                    {this.name}
                </h2>
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
                                style={
                                    {
                                        borderBottomRightRadius: 40,
                                        marginTop: 10
                                    }
                                }
                            />
                        </div>
                    </div>
                    <div className="repInfos">
                        <div>
                            <label htmlFor="" className="Valor">
                                { this.value}
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
                                    {this.mainGuy}
                                </label>
                            </a>
                        </div>
                    </div>
                    <div className="repRate"></div>
                </div>
            


            </div>
        )
    }
} export default republica