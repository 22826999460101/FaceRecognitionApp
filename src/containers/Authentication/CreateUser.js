import React from 'react';

class CreateUser extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      emailInput : '',
      passwordInput : '',
      nameInput: ''
    }
  }

  onEmailChange = (event) =>{
    this.setState({emailInput:event.target.value})
  }
  onPasswordChange = (event) =>{
    this.setState({passwordInput:event.target.value})
  }
  onNameChange = (event) =>{
    this.setState({nameInput:event.target.value})
  }

  onButtonSubmit = () =>{
    fetch('https://vast-falls-78786.herokuapp.com/register',
    {
      method:'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify( { 
              email:this.state.emailInput, 
              password: this.state.passwordInput,
              name: this.state.nameInput
            })
    })
    .then( response => response.json() )
    .then( data => {
      if(data.id){
        this.props.setUser(data);
        this.props.onClick('home');
      }
    })
    .catch(console.log) // sienpre es bueno tener un catch en cada fetch o consulta a un servidor (API) que realizemos

  }

  render() {
    return (
      <main className="pa4 black-80">
        <div className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <div className="pa3 shadow-5 ph5">
              <legend className="f2 fw6 ph0 mh0 center">Registrarse</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Nombre</label>
                <input
                  onChange={this.onNameChange}
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 measure" type="text" name="nombre" id="nombre"
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email address</label>
                <input
                  onChange={this.onEmailChange}
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 measure" type="email" name="email-address" id="email-address"
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Password</label>
                <input
                  onChange={this.onPasswordChange}
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 measure" type="password" name="password" id="password"
                />
              </div>
              <div className="mt3">
                <input
                  onClick={this.onButtonSubmit}
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Registrarse"
                />
              </div>
            </div>
          </fieldset>
        </div>
      </main>
    );
    
  }
}

export default CreateUser;