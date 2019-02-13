import React from 'react';

const Ranking = ({ contador, nombre })=>{
    return (
        <div className="flex-column justify-center ma4 ">
            <div className= "f3 white pt4"> {`Bienvenido ${nombre}, tus imagenes identificadas son ...`} </div>
            <div className= "f1 white pb4"> {`#${contador}`}</div>
            <div className= "f2 black">{'El marciano detectara caras en tus imagenes, Pruebalo!!'}</div>
        </div>
    )
}

export default Ranking;