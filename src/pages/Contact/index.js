import React from "react";
import axios from "axios";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { Container, Form, Field } from "./styles"
import { Img, StyledP } from "../../styles/index";
import Me from "../../images/child1.jpg"

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("message sent!");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("sorry! message failed to send :o")
      }
    })
  }
  resetForm() {
    this.setState({name: '', email: '', message: ''})
  }
  render() {
    return( 
        <>
          <NavBar background={false} />
          <StyledP>this contact form is in progress, please email me at <b>aperearojas@college.harvard.edu</b></StyledP>
          <Img src={Me}></Img>
          <Container>
              <Form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                  <Field>
                      <label htmlFor="name">name</label>
                      <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                  </Field>
                  <Field>
                      <label htmlFor="exampleInputEmail1">email</label>
                      <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                  </Field>
                  <Field>
                      <label htmlFor="message">message</label>
                      <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                  </Field>
                  <button type="submit" className="btn btn-primary">submit</button>
              </Form>
          </Container>
          <Footer background={false} /> 
        </>
    );
  }
  onNameChange(event) {
	  this.setState({name: event.target.value})
  }
  onEmailChange(event) {
	  this.setState({email: event.target.value})
  }
  onMessageChange(event) {
	  this.setState({message: event.target.value})
  }
}
export default Contact;