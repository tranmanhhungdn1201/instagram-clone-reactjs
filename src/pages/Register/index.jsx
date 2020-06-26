import React, { Component } from 'react';
import { Container, Col, Form, Row, Input, Button} from 'reactstrap';
import auth from '../../actions/auth';
import { Link } from "react-router-dom";
import Logo from '../../components/Logo';
import './Register.scss';

class Register extends Component {
    constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      repassword: '',
      errorEmail: '',
      errorPassword: '',
      errorRepassword: '',
      errorUserName: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  validateForm(){
    const {email, password, repassword} = this.state;
    let errors = {
      errorEmail: '',
      errorPassword: '',
      errorRepassword: '',
      errorUserName: ''
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
    if(!repassword.trim()){
      errors.errorRepassword = 'Repassword required.';
      isError = true;
    }
    if(repassword !== password){
      errors.errorRepassword = 'Repassword is not equal password.';
      isError = true;
    }
    this.setState({
      ...errors
    });
    return isError;
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(){
    const checkValidate = this.validateForm();
    if(!checkValidate){
      const data = this.state;
      auth.signUp(data).then(user => {
        if(user) {
          this.props.history.push('/timeline');
        }
      });
    }
  }

  render(){
    const {errorEmail, errorPassword, errorRepassword, errorRegister, errorUserName} = this.state;
      return (
        <Container>
          <Form className="card-register">
            <Logo width={250} height={100}/>
            <Col sm={10}>
              <Input type="text" name="username" id="username" placeholder="Tên người dùng" value={this.state.username} onChange={ this.handleInputChange }/>
              <p className="text-danger">{ errorUserName }</p>
            </Col>
            <Col sm={10}>
              <Input type="email" name="email" id="email" placeholder="Email" value={this.state.email} onChange={ this.handleInputChange }/>
              <p className="text-danger">{ errorEmail }</p>
            </Col>
            <Col sm={10}>
              <Input type="password" name="password" id="password" placeholder="Mật khẩu" onChange={ this.handleInputChange }/>
              <p className="text-danger">{ errorPassword }</p>
            </Col>
            <Col sm={10}>
              <p className="text-danger">{ errorRepassword }</p>
            </Col>
            <Col sm={10}>
              <Button onClick={this.handleSubmit}>Đăng Ký</Button>
            </Col>
            <Row>
              <Col className="text-center mt-3">
                <Link to="login">Đăng Nhập</Link>
              </Col>
            </Row>
          </Form>
        </Container>
    );
  }
}

export default Register;