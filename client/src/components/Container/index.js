import React from "react";
// import "./style.css";

function Container(props) {
    return(
        <div className="container text-center">
            {/* <div className="container text-center" style={{backgroundImage: 'url(${props.backgroundImage})'}}></div> */}
            {props.children}
        </div>
    );
}

export default Container;