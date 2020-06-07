import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Login = (props) => {
  onLogin(){
    
  }
  return (
    <Container>
      <h1  className="text-center">Login</h1>
      <Form>
        <FormGroup row>
          <Label for="email" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="email" placeholder="Email" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="password" sm={2}>Password</Label>
          <Col sm={10}>
            <Input type="password" name="password" id="password" placeholder="Password" />
          </Col>
        </FormGroup>
        <FormGroup className="text-center">
          <Button onSubmit={this.onLogin}>Đăng nhập</Button>
        </FormGroup>
        <Row>
          <Col className="text-center">
            <a href="#">Quên mật khẩu?</a>
            <a href="#">Đăng ký</a>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Login;