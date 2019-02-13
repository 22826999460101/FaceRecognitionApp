import React from 'react';
import './ImageLinkForm.css';

class ImageLinkForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            imageText:''
        }
    }

    onInputChange = (event)=>{
        this.setState({imageText: event.target.value})
    }
// destructuring estos agarrando solo 2 propiedades del objeto props
    render() {
        return (
            <div className="flex justify-center">
                {/* al usar justyfy-center y solo tener un elemento reduce la barra */}
                <div className="form pa4 br4 shadow-5">
                    <input type="text" className="w-70 f4 pa2" onChange={this.onInputChange} />
                    <button className="f4 w-30 grow link  ph3 pv2 bg-light-purple white" onClick={()=>this.props.onImageSubmit(this.state.imageText)}>{'Analizar'}</button>
                </div>
            </div>
        )
    }

}
export default ImageLinkForm;   