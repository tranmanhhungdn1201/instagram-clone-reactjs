import React from 'react';
import { Container, Col, Form, FormGroup, Label, Input } from 'reactstrap';

const Login = (props) => {
  return (
    <Container>
      <h1>Login</h1>
      <Form>
        <FormGroup row>
          <Label for="email" sm={2} size="lg">Email</Label>
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
      </Form>
       <Row>
        <Col>
          <a href="#">Quên mật khẩu?</a>
      <a href="#">Đăng ký</a></Col>
      </Row>
    </Container>
  );
}

export default Login;