import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import axios from 'axios';
import  { Redirect } from 'react-router-dom'

class Register extends Component {
    constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      repassword: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    const data = this.state;
    console.log(this.state);
    axios.post('https://3x63k.sse.codesandbox.io/users', data)
         .then(function (response) {
          if(response.success){
            return <Redirect to='/login'  />
          }
          })
        .catch(function (error) {
          console.log('error' + error);
        });
  }
  render(){
      return (
        <Container>
          <h1  className="text-center">Register</h1>
          <Form>
            <FormGroup row>
              <Label for="email" sm={2}>Email</Label>
              <Col sm={10}>
                <Input type="email" name="email" id="email" placeholder="Email" value={this.state.email} onChange={ this.handleInputChange }/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="password" sm={2}>Mật khẩu</Label>
              <Col sm={10}>
                <Input type="password" name="password" id="password" placeholder="Mật khẩu" onChange={ this.handleInputChange }/>
              </Col>
            </FormGroup>
             <FormGroup row>
              <Label for="repassword" sm={2}>Nhập lại mật khẩu</Label>
              <Col sm={10}>
                <Input type="repassword" name="repassword" id="repassword" placeholder="Nhập lại mật khẩu" onChange={ this.handleInputChange }/>
              </Col>
            </FormGroup>
            <FormGroup className="text-center">
              <Button onClick={this.handleSubmit}>Đăng Ký</Button>
            </FormGroup>
          </Form>
        </Container>
    );
  }
}

export default Register;