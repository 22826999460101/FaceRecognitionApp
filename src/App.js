import React, { Component } from 'react';
import NavBar from './containers/NavBar/NavBar';
import Logo from './containers/Logo/Logo';
import Ranking from './containers/Ranking/Ranking';
import ImageLinkForm from './containers/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';
import FaceRecognition from './containers/FaceRecognition/FaceRecognition';
import SignIn from './containers/Authentication/SignIn';
import CreateUser from './containers/Authentication/CreateUser';
import './App.css';

const particlesOptions = {
  particles: {
    number : {
      value: 10,
      density:{
        enable:true,
        value_area:800,
      }
    }
  }
}

const initialState = {
  imageUrl: '',
  posicionesCaras: {},
  url: 'signin',
  user: {
    id: '',
    email: '',
    name: '',
    entries: 0,
    joined: ''
  }
};

class App extends Component {

  constructor(){
    super();
    this.state = initialState;
  }

  posicionesCaras = (marcos) =>{
    this.setState({posicionesCaras:marcos})
  }

/*problema: como guardar en el estado la respuesta de esta api que son las posiciones
 solucion: cuando se usa un metodo asyncrono, como lo es consultar cualqueir API y base de datos
 debos olvidar la programacion sincrona la cual iguala una variable y asigna ese valor a un metodo, estado o funcion
 en las funciones asyncronas debemos encontrar un punto en donde nos aseguremos que tenemos la informacion que queremos
 y alli podemos usar el valor, para este caso es dentro del metodo then dentro del cuales tenemos una funcion
 para realizar lo que querramos con el valor de respuesta */
  faceDetectionCallback = () =>{
      fetch('https://vast-falls-78786.herokuapp.com/imageRecognition',
      {
        method:'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({imageUrl:this.state.imageUrl})
      })
      .then( response => response.json())
      .then(response => {
        const caras = response.outputs[0].data.regions;       
        this.posicionesCaras(caras);
        //debo llamar al servidor el metodo que me devuelve el contador del usuario modificado
        fetch('https://vast-falls-78786.herokuapp.com/image', 
        {
          method:'put',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({id:this.state.user.id})
        })
        .then( response => response.json() )
        .then( counter => this.setState(Object.assign(this.state.user,{entries:counter}))  )
        .catch( console.log )
      })
      .catch(err => {
        console.log(err);
      });
  }

  onImageSubmit = (urlText)=>{
    // logre manejar bien el estado ya que esa es una funcion callback caundo el estado termina es activada     
    this.setState( {imageUrl:urlText }, this.faceDetectionCallback ) ;
  }

  changeState = (value) =>{
    if(value === 'signin')
      this.setState(initialState);    
    else
      this.setState({url:value});
  }

  setUser = (user)=>{
    this.setState({user:user})
  }

  render() {   
    return (
      <div className="App">
           <Particles className = "particles"
                       params={particlesOptions} />
          <NavBar  onClick={this.changeState} url={this.state.url} />
          { this.state.url === 'signin' 
            ?  <SignIn onClick={this.changeState} setUser={this.setUser} />
            : (this.state.url === 'createuser' 
                ? <CreateUser onClick={this.changeState} setUser={this.setUser}/>
                :  <div>
                      <Logo />
                      <Ranking contador={this.state.user.entries} nombre={this.state.user.name} />          
                      <ImageLinkForm  onImageSubmit={this.onImageSubmit} /> {/*en este agregamos un mensaje con instrucciones*/}  
                      <FaceRecognition imageUrl={this.state.imageUrl} posicionesCaras={this.state.posicionesCaras} /> 
                    </div>                  
              )
          }          
      </div>
    );
  }
}

export default App;