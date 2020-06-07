import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Register = (props) => {
  return (
    <Container>
      <h1  className="text-center">Register</h1>
      <Form>
        <FormGroup row>
          <Label for="email" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="email" placeholder="Email" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="password" sm={2}>Mật khẩu</Label>
          <Col sm={10}>
            <Input type="password" name="password" id="password" placeholder="Mật khẩu" />
          </Col>
        </FormGroup>
         <FormGroup row>
          <Label for="repassword" sm={2}>Nhập lại mật khẩu</Label>
          <Col sm={10}>
            <Input type="repassword" name="repassword" id="repassword" placeholder="Nhập lại mật khẩu" />
          </Col>
        </FormGroup>
        <FormGroup className="text-center">
          <Button>Đăng Ký</Button>
        </FormGroup>
      </Form>
    </Container>
  );
}

export default Register;