//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

function Simplecounter(props) {
	return (
		<div className="counter">
			<div className="ultimo">{props.sextoNumero % 10}</div>
			<div className="quinto">{props.quintoNumero % 10}</div>
			<div className="cuatro">{props.cuatroNumero % 10}</div>
			<div className="tercero">{props.tercerNumero % 10}</div>
			<div className="segundo">{props.segundoNumero % 10}</div>
			<div className="primero">{props.primerNumero % 10}</div>
		</div>
	);
}

Simplecounter.propTypes = {
	sextoNumero: propTypes.number,
	quintoNumero: propTypes.number,
	cuatroNumero: propTypes.number,
	tercerNumero: propTypes.number,
	segundoNumero: propTypes.number,
	primerNumero: propTypes.number,
};

let count = 0;
setInterval(function () {
	const uno = Math.floor(count / 1);
	const dos = Math.floor(count / 10);
	const tres = Math.floor(count / 100);
	const cuatro = Math.floor(count / 1000);
	const cinco = Math.floor(count / 10000);
	const seis = Math.floor(count / 100000);

	count++;
	ReactDOM.render(
		<Simplecounter
			primerNumero={uno}
			segundoNumero={dos}
			tercerNumero={tres}
			cuatroNumero={cuatro}
			quintoNumero={cinco}
			sextoNumero={seis}
		/>,
		document.querySelector("#app")
	);
}, 1000);
