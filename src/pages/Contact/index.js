import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { Container, Form, Field } from "./styles"
import { Img, StyledP } from "../../styles/index";
import Me from "../../images/child1.jpg";

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      loading: false,
    };

    this.onNameChange = this.handleNameChange.bind(this);
    this.onEmailChange = this.handleEmailChange.bind(this);
    this.onMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handleMessageChange(event) {
    this.setState({message: event.target.value});
  }

  handleSubmit(event) {
    
    event.preventDefault();

    this.setState({loading: true});

    const formData = new FormData();
    formData.append('name', this.state.name);
    formData.append('email', this.state.email);
    formData.append('message', this.state.message);

    fetch('https://alejandraprj.pythonanywhere.com/send', {
          method: 'POST', body: formData })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("error");
          throw new Error('An error occurred');
        } 
      })
      .then((user) => {
        this.setState({
          name: "",
          email: "",
          message: "",
          loading: false,
        });
        return alert(user.status);
      })
      .catch((error)=>{
        this.setState({loading: false});
        return alert("sorry about that! i couldn't deliver your message. please email me at aperearojas@college.harvard.edu!")
      });
  }

  render() {
    return ( <>
      <NavBar background={false} />
      <StyledP>
        feel free to reach to me through this mini contact Flask app I built.<br></br>
        you can also reach out by email to aperearojas@college.harvard.edu
      </StyledP>
      <Img src={Me}></Img>
      <Container>
        <Form onSubmit={(this.handleSubmit)}>
          <Field><label>
            name
            <input type="text" value={this.state.name} onChange={this.onNameChange} />
          </label></Field>
          <Field><label>
            email
            <input type="text" value={this.state.email} onChange={this.onEmailChange}/>
          </label></Field>
          <Field><label>
            message
            <textarea rows="5" value={this.state.message} onChange={this.onMessageChange}/>
          </label></Field>
          {this.state.loading ? (
            <><p> Loading... </p></>
          ) : ( 
            <>
              <button type="submit">Submit</button> 
            </>
          )}
        </Form>
      </Container>
      <Footer background={false} /> 
    </> );
  }
}
export default Contact;
