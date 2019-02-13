import React from 'react';
import reddit from './reddit.png';
import Tilt from 'react-tilt'
const Logo = ()=>{
    return(
    <div className="flex  ma2 ml5 justify-start " >
        <Tilt className="Tilt" options={{ max: 50 }} style={{ height: 200, width: 200 }} >
            <div className="Tilt-inner gradient1 shadow-5">
                <img src={reddit} alt="marciano" className="pt3 pb2" />
            </div>
        </Tilt>
    </div>
    )
}

export default Logo;