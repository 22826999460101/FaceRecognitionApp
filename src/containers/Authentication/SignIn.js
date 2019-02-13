import React from 'react';

class SignIn extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      emailInput: '',
      passwordInput:''
    }
  }

  onEmailChange = (event) =>{
    this.setState({emailInput:event.target.value})
  }
  onPasswordChange = (event) =>{
    this.setState({passwordInput:event.target.value})
  }

  onButtonSubmit  = ()=>{
    fetch('https://vast-falls-78786.herokuapp.com/signin',
    {
      method:'post',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(
            {
              email: this.state.emailInput,
              password: this.state.passwordInput
            })
    })
    .then(response => response.json())
    .then(data => 
      {
        if( data.id ){
          this.props.setUser(data);
          this.props.onClick('home');
        }
      })
    .catch(console.log)

  }

  render(){
    return(
      <main className="pa4 black-80">
        <div className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <div className="pa3 shadow-5 ph5">
              <legend className="f2 fw6 ph0 mh0 center">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  onChange = {this.onEmailChange}
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" 
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input 
                  onChange = {this.onPasswordChange}
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" 
                />
              </div>
            <div className="">
              <input onClick={this.onButtonSubmit} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
            </div>
            <div className="lh-copy mt3">
              <div  onClick={()=>this.props.onClick('createuser')} className="b ph3 pv2 underline link  bg-transparent grow pointer f6 dib">{'Registrarse'}</div>           
            </div>
          </div>
        </fieldset>
        </div>
      </main>
    );
  }
} 

export default SignIn;