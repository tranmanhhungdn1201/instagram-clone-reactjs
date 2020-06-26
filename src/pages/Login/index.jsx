import React, { Component } from 'react';
import { Container, Row, Col, Form, Input, Button} from 'reactstrap';
import { Link } from "react-router-dom";
import auth from '../../actions/auth';
import Logo from '../../components/Logo';
import './Login.scss';

const initialState = {
  email: '',
  password: '',
  errorEmail: '',
  errorPassword: '',
  errorLogin: ''
};
class Login extends Component {
  constructor(props){
    super(props);
    this.state = initialState;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  validateForm(){
    const {email, password} = this.state;
    let errors = {
      errorEmail: '',
      errorPassword: '',
    };
    let isError = false;
    if(!email.includes('@')){
      errors.errorEmail = 'Invalid email.';
      isError = true;
    }
    if(!email.trim()){
      errors.errorEmail = 'Email required.';
      isError = true;
    }
    if(!password.trim()){
      errors.errorPassword = 'Password required.';
      isError = true;
    }
    this.setState({
      ...errors
    });
    return isError;
  }

  onLogin(evt){
    evt.preventDefault()
    const checkValidate = this.validateForm();
    if(!checkValidate){
      const data = this.state;
      let currentComponent = this;
      auth.logIn(data).then(user => {
        if(user) {
          currentComponent.props.history.push('/');
        }
      });
    }
  }

  render(){
    const {errorEmail, errorPassword, errorLogin} = this.state;
    return (
      <Container>
        <Form className="card-login">
          <Logo width={250} height={100}/>
          <Col sm={10}>
            <Input type="email" name="email" id="email" placeholder="Email" onChange={this.handleInputChange}/>
            <p className="text-danger">{ errorEmail }</p>
          </Col>
          <Col sm={10}>
            <Input type="password" name="password" id="password" placeholder="Mật khẩu" onChange={this.handleInputChange}/>
            <p className="text-danger">{ errorPassword }</p>
          </Col>
          <Col sm={10}>
            <Button onClick={this.onLogin}>Đăng nhập</Button>
          </Col>
          <p className="text-danger">{ errorLogin }</p>
          <Row>
            <Col className="text-center">
              <Link to="forget-password">Quên mật khẩu?</Link>
              <Link to="register">Đăng ký</Link>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default Login;