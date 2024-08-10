import React from "react";
import homeImage from './images/home.png';
import './styles/home.css'

class NavbarLink extends React.Component { 
  constructor(props) { 
    super(props)
  }
  render() { 
    return (
      <div>
        <a className="DivLinks" href={this.props.reference}>
          {this.props.text}
        </a>
      </div>
    )
  }
}

class PersonLogo extends React.Component { 
  render() { 
    return (
      <div>
        <a href="perfil" className="logo">
          <svg viewBox="0 0 74 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.3547 64.5648C4.77272 57.7927 0 47.944 0 36.9811C0 16.557 16.5655 0 37 0C57.4345
              0 74 16.557 74 36.9811C74 47.944 69.2273 57.7927 61.6453 64.5648C57.2584 59.1114 51.768
              55.1013 45.6431 53.1339C51.7293 50.1064 55.9111 43.8264 55.9111 36.5702C55.9111 26.3582
              47.6284 18.0797 37.4111 18.0797C27.1938 18.0797 18.9111 26.3582 18.9111 36.5702C18.9111
              43.7019 22.9506 49.8905 28.8674 52.9751C22.5371 54.8802 16.8631 58.9604 12.3547 64.5648Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
    )
  }
}

class Search extends React.Component { 
  render() { 
    return (
      <div className="imagem">
        <img src={homeImage} alt="" style={{ marginTop: 30 }} />
          <div className="search">
            <input
              type="text"
              className="search__input"
              placeholder="Digite o local de busca:"
            />
            <button className="search__button">
              <svg className="search__icon" aria-hidden="true" viewBox="0 0 24 24">
                <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 
                  5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5
                   7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
                </g>
              </svg>
            </button>
          </div>
      </div>
    )
  }
}

class RepublicImage extends React.Component { 
  constructor(props) { 
    super(props)
  }
  render() { 
    return(
      <div className="images">
        <p className="republicName">{ this.props.text}</p>
        <a href="Republica">
          <img className="repsImages" src={this.props.imageSrc} alt={this.props.imgAlt} />
        </a>
      </div>
    )
  }
}

class home extends React.Component {
  constructor(props){ 
    super(props)
  }
  render() {
    return (
      <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>UniRep</title>
          <link rel="stylesheet" href="styles\style.css" />
          <div className="full-screen">
            <div className="loginref">
              <h1 className="titulo">UniRep</h1>
              <NavbarLink reference="#Populares" text="Republicas Populares"/>
              <NavbarLink reference="#Praias" text="Praias" />
              <NavbarLink reference="#Casas" text="Casas" />
              <NavbarLink reference="#Apartamentos" text="Apartamentos"/>
              <PersonLogo />
            </div>
            <Search/>
            <div className="choice"></div>
          </div>
          <div className="secondPart" id="Populares">
            <div className="FamousReps">
              <label htmlFor="">Repúblicas Populares</label>
              <div className="ContainerRepublicas" style={{ display: "flex" }}>
                <RepublicImage text="Nome da República" imageSrc="https://cloudfront-us-east-1.images.arcpublishing.com/eluniversal/MWZOUNQNXFH2TEH5J5EXOLQRKA.jpg" imgAlt="placeholder"/>
                <RepublicImage text="Nome da República" imageSrc="images/image1.jpg" imgAlt="placeholder"/>
                <RepublicImage text="Nome da República" imageSrc="images/image1.jpg" imgAlt="placeholder"/>
                <RepublicImage text="Nome da República" imageSrc="images/image1.jpg" imgAlt="placeholder"/>
              </div>
              <div
                className="ContainerRepublicas"
                style={{ display: "flex", marginTop: 30 }}
              >
                <RepublicImage text="Nome da República" imageSrc="images/image1.jpg" imgAlt="placeholder" />
                <RepublicImage text="Nome da República" imageSrc="images/image1.jpg" imgAlt="placeholder" />
                <RepublicImage text="Nome da República" imageSrc="images/image1.jpg" imgAlt="placeholder" />
                <RepublicImage text="Nome da República" imageSrc="images/image1.jpg" imgAlt="placeholder" />
              </div>
            </div>
          </div>
          <div className="secondPart" id="Praias">
            <div className="PraiasReps">
              <label htmlFor="" className="SectionTitle">
                Praias
              </label>
              <div className="ContainerRepublicas" style={{ display: "flex" }}>
                <RepublicImage text="Nome da República" imageSrc="images/image1.jpg" imgAlt="placeholder" />
                <RepublicImage text="Nome da República" imageSrc="images/image1.jpg" imgAlt="placeholder" />
                <RepublicImage text="Nome da República" imageSrc="images/image1.jpg" imgAlt="placeholder" />
                <RepublicImage text="Nome da República" imageSrc="images/image1.jpg" imgAlt="placeholder" />
              </div>
              <div
                className="ContainerRepublicas"
                style={{ display: "flex", marginTop: 30 }}
              >
              <RepublicImage text="Nome da República" imageSrc="images/image1.jpg" imgAlt="placeholder" />
              <RepublicImage text="Nome da República" imageSrc="images/image1.jpg" imgAlt="placeholder" />
              <RepublicImage text="Nome da República" imageSrc="images/image1.jpg" imgAlt="placeholder" />
              <RepublicImage text="Nome da República" imageSrc="images/image1.jpg" imgAlt="placeholder" />
              </div>
            </div>
          </div>
          <div className="secondPart" id="Casas">
            <div className="CasasReps">
              <label htmlFor="" className="SectionTitle">
                Casas
              </label>
              <div className="ContainerRepublicas" style={{ display: "flex" }}>
                <RepublicImage text="Nome da República" imageSrc="images/image1.jpg" imgAlt="placeholder" />
                <RepublicImage text="Nome da República" imageSrc="images/image1.jpg" imgAlt="placeholder" />
                <RepublicImage text="Nome da República" imageSrc="images/image1.jpg" imgAlt="placeholder" />
                <RepublicImage text="Nome da República" imageSrc="images/image1.jpg" imgAlt="placeholder" />
              </div>
              <div
                className="ContainerRepublicas"
                style={{ display: "flex", marginTop: 30 }}
              >
                <RepublicImage text="Nome da República" imageSrc="images/image1.jpg" imgAlt="placeholder" />
                <RepublicImage text="Nome da República" imageSrc="images/image1.jpg" imgAlt="placeholder" />
                <RepublicImage text="Nome da República" imageSrc="images/image1.jpg" imgAlt="placeholder" />
                <RepublicImage text="Nome da República" imageSrc="images/image1.jpg" imgAlt="placeholder" />
              </div>
            </div>
          </div>
          <div className="secondPart" id="Apartamentos">
            <div className="ApsReps">
              <label htmlFor="" className="SectionTitle">
                Apartamentos
              </label>
              <div className="ContainerRepublicas" style={{ display: "flex" }}>
                <RepublicImage text="Nome da República" imageSrc="images/image1.jpg" imgAlt="placeholder" />
                <RepublicImage text="Nome da República" imageSrc="images/image1.jpg" imgAlt="placeholder" />
                <RepublicImage text="Nome da República" imageSrc="images/image1.jpg" imgAlt="placeholder" />
                <RepublicImage text="Nome da República" imageSrc="images/image1.jpg" imgAlt="placeholder" />
              </div>
              <div
                className="ContainerRepublicas"
                style={{ display: "flex", marginTop: 30 }}
              >
                <RepublicImage text="Nome da República" imageSrc="images/image1.jpg" imgAlt="placeholder" />
                <RepublicImage text="Nome da República" imageSrc="images/image1.jpg" imgAlt="placeholder" />
                <RepublicImage text="Nome da República" imageSrc="images/image1.jpg" imgAlt="placeholder" />
                <RepublicImage text="Nome da República" imageSrc="images/image1.jpg" imgAlt="placeholder" />
              </div>
            </div>
          </div>
      </div>
    )
  }
}
    
export default home;