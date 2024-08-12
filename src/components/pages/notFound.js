import React from "react";
import './styles/notFound.css';

class notFound extends React.Component {
    render() {
        const errostyle = {
            fontSize: "90px",
            textAlign: "center",
            backgroundColor: "#FFC98A",
            height: "100vh"
        }
        return (
            <div>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Error</title>
                <div className="erro" style={errostyle}>
                    <h1 className=""> 404 Error </h1>
                </div>
            </div>
        )
    }
} export default notFound