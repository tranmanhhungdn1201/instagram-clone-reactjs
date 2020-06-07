import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap';

const ForgetPassword = (props) => {
  return (
    <Container>
      <h1  className="text-center">Quên mật khẩu</h1>
      <Form>
        <FormGroup row>
          <Label for="email" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="email" placeholder="Email" />
          </Col>
        </FormGroup>
        <FormGroup className="text-center">
          <Button>Xác nhận</Button>
        </FormGroup>
      </Form>
    </Container>
  );
}

export default ForgetPassword;