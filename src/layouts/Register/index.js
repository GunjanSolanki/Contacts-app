import React from "react";
import { Form, Button, Grid, Header as SemanticHeader, Segment } from "semantic-ui-react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

const RegisterUI = ({form: { onChange, form, registerFormInValid, onSubmit, loading, fieldErrors }}) => {
  return (
    <div>
      <Header />
      <Grid centered>
        <Grid.Column style={{maxWidth: 550, marginTop: 20}}>
          <SemanticHeader>
            SignUP Here
          </SemanticHeader>
          <Segment>
            <Form>
              <Form.Input 
                value={form.username || ""}
                onChange={onChange}
                label='User Name' 
                placeholder="Enter User Name" 
                type="text" 
                name="username"
                error={fieldErrors.username && 
                  {
                    content: fieldErrors.username,
                    pointing: "below"
                  }}
              />
              <Form.Input 
                value={form.first_name || ""}
                onChange={onChange}
                label='First Name' 
                placeholder="Enter First Name" 
                type="text" 
                name="first_name"
                error={fieldErrors.first_name && 
                  {
                    content: fieldErrors.first_name,
                    pointing: "below"
                  }}
              />
              <Form.Input 
                value={form.last_name || ""}
                onChange={onChange}
                label='Last Name' 
                placeholder="Enter Last Name" 
                type="text" 
                name="last_name"
                error={fieldErrors.last_name && 
                  {
                    content: fieldErrors.last_name,
                    pointing: "below"
                  }}
              />
              <Form.Input 
                value={form.email || ""}
                onChange={onChange}
                label='Email' 
                placeholder="Enter Email" 
                type="email"
                name="email" 
                error={fieldErrors.email && 
                  {
                    content: fieldErrors.email,
                    pointing: "below"
                  }}
              />
              <Form.Input 
                value={form.password || ""}
                onChange={onChange}
                label='Password' 
                placeholder="Enter Password" 
                type="password" 
                name="password"
                error={fieldErrors.password && 
                  {
                    content: fieldErrors.password,
                    pointing: "below"
                  }}
              />
              <Button 
                onClick={onSubmit}
                disabled={ registerFormInValid || loading } 
                fluid primary 
                loading={loading}
                type='submit'
              >
                Submit
              </Button>
              <Segment>Already have an account <Link to="/auth/login">Login</Link></Segment>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default RegisterUI;