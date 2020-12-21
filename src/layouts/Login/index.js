import React from "react";
import { Form, Button, Grid, Header as SemanticHeader, Segment, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

const LoginUI = ({form: { onChange, form, error, loginFormInValid, onSubmit, loading }}) => {
  return (
    <div>
      <Header />
      <Grid centered>
        <Grid.Column style={{maxWidth: 550, marginTop: 20}}>
          <SemanticHeader>
            Login Here
          </SemanticHeader>
          <Segment>
            <Form>
              { error && <Message content={error?.detail} negative />}
              <Form.Input 
                value={form.username || ""}
                onChange={onChange}
                label='User Name' 
                placeholder="Enter User Name" 
                type="text" 
                name="username"
              />
              <Form.Input 
                value={form.password || ""}
                onChange={onChange}
                label='Password' 
                placeholder="Enter Password" 
                type="password" 
                name="password"
              />
              <Button 
                onClick={onSubmit}
                disabled={ loginFormInValid || loading } 
                fluid primary 
                loading={loading}
                type='submit'
              >
                Submit
              </Button>
              <Segment>Need an account <Link to="/auth/register">Register</Link></Segment>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default LoginUI;