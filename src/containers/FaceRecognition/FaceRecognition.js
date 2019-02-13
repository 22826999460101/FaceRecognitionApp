import React from 'react';
import './FaceRecognition.css';


const arregloMarcos = (posicionesCaras) => {

    if (posicionesCaras === undefined || Object.keys(posicionesCaras).length === 0)
        return
    else {
        return posicionesCaras.map( (posicion,indice) => {
            let pos = posicion.region_info.bounding_box;       

            let top = Number(pos.top_row) * 100 + '%';
            let bottom = (100 - Number(pos.bottom_row) * 100) + '%';
            let right = (100 - Number(pos.right_col) * 100) + '%';
            let left = Number(pos.left_col) * 100 + '%';

            return <div key={indice} className="caja" style={{ top, bottom, right, left }} ></div>;
        })
    }
}

const FaceRecognition = ({imageUrl, posicionesCaras})=>{
    return (
        <div className="flex justify-center">
            <div  className="relative" >                                            
                                        {/* la propiedad height se adapta a la proporcion de la imagen */}
                {arregloMarcos(posicionesCaras)}           
                <img src={imageUrl} alt='detector de caras'  width='500px' height='auto' style={{}}/>
            </div>
        </div>
    )
}

export default FaceRecognition;
