import React, { Component } from "react";
import styles from './styles/cadastroNew.module.css'

class cadastro extends Component {
    render(){
    return(
        <div className={styles.ladoDireito}>
            <div className={styles.content}>
                <div className={styles.textos}>
                    <h1 className={styles.h1}>Unirep</h1>
                    <h2 className={styles.h2}>Repúblicas Universitárias</h2>
                    <h3 className={styles.h3}>Informe</h3>
                </div>
            </div>
            <div className="form-container">

            </div>
        </div>
       
    )
    }
} export default cadastro;