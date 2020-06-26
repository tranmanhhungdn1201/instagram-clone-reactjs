import React, { Component } from 'react';
import { Container, Form, FormGroup, Label, Input, Button, CustomInput} from 'reactstrap';
import axios from 'axios';
import post from '../../actions/post';

class CreatePost extends Component {
  constructor(props){
    super(props);
    this.state = {
      caption: '',
      fileImage: {},
      errorCaption: '',
      errorFileImage: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputFileChange = this.handleInputFileChange.bind(this);
    this.onUpload = this.onUpload.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  validateForm(){
    const {caption, fileImage} = this.state;
    let errors = {
      errorCaption: '',
      errorFileImage: '',
    };
    let isError = false;
    if(!caption.trim()){
      errors.errorCaption = 'Caption required.';
      isError = true;
    }
    if(!fileImage.name){
      errors.errorFileImage = 'File required.';
      isError = true;
    }
    this.setState({
      ...errors
    });
    return isError;
  }

  handleInputChange(event){
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  }

  handleInputFileChange(event){
    const target = event.target;
    const name = target.name;
    const value = target.files[0];
    this.setState({
      fileImage: value
    });
  }

  onUpload(event) {
    const checkValidate = this.validateForm();
    if(!checkValidate){
      const data = new FormData();
      data.append('file', this.state.fileImage);
      data.append('caption', this.state.caption);
      post.createPost(data)
        .then((data) => {
          console.log(data);
        })
        .catch(function (error) {
          console.log('error' + error);
        });
    }
  }

  render(){
    const {errorCaption, errorFileImage } = this.state;
    return (
      <Container>
        <h1 className="text-center">Create Post</h1>
        <Form>
          <FormGroup>
            <Label for="caption">Caption</Label>
            <Input type="text" id="caption" name="caption" onChange={this.handleInputChange}/>
            <p className="text-danger">{ errorCaption }</p>
          </FormGroup>
          <FormGroup>
            <Label for="fileImage">File Image</Label>
            <CustomInput type="file" id="fileImage" name="fileImage" onChange={this.handleInputFileChange}/>
            <p className="text-danger">{ errorFileImage }</p>
          </FormGroup>
          <Button onClick={this.onUpload}>
            Create
          </Button>
        </Form>
      </Container>
    );
  }
}

export default CreatePost;