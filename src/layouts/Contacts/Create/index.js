import React from "react";
import { Button, Card, CardContent, Form, Grid, Header as SemanticHeader, Select } from "semantic-ui-react";
import Header from "../../../components/Header";
import "./index.css";
import countries from "../../../utils/countries";
import { Prompt } from "react-router-dom";

export const CreateContactUI = ({ form: { form, onChange, contactFormInValid, formHalfFilled, onSubmit, loading, error } }) => {

  return (
    <div>
      <Prompt when={formHalfFilled} message={JSON.stringify({
        header: "Confirm",
        content: "You have half filled form changes!"
      })} />
      <Header />
      <Grid centered>
        <Grid.Column className="form-column">
          <SemanticHeader>Create Contact</SemanticHeader>

          <Card fluid>
            <CardContent>
              <Form unstackable>
                <div className="contact-picture">
                  <span>Choose picture</span>
                </div>
                <Form.Group widths={2}>
                  <Form.Input 
                    label='First name' 
                    placeholder='First name' 
                    name="first_name"
                    value={form.first_name || ""}
                    onChange={onChange}
                  />
                  <Form.Input 
                    label='Last name' 
                    placeholder='Last name'
                    name="last_name"
                    value={form.last_name || ""}
                    onChange={onChange}
                    type="text" 
                  />
                </Form.Group>
                <Form.Group widths={2}>
                  <Form.Input 
                    label='Country Code' 
                    placeholder='Country Code' 
                    onChange={onChange}
                    name="country_code"
                    control={Select}
                    options={countries}
                  />
                  <Form.Input 
                    label='Phone Number' 
                    placeholder='Phone Number' 
                    onChange={onChange}
                    name="phone_number"
                    value={form.phone_number || ""}
                    type="number"
                  />
                </Form.Group>
                <Form.Checkbox 
                  label='Is Favourite'
                  name="is_favorite"
                  onChange={(e, data) => {
                    onChange(e, {name: "is_favorite", value: data.checked})
                  }}
                />
                <Button 
                  type='submit'
                  primary
                  disabled={contactFormInValid || loading }
                  loading={loading}
                  onClick={onSubmit}
                >
                  Submit
                </Button>
              </Form>
            </CardContent>
          </Card>
        </Grid.Column>
      </Grid>
    </div>
  )
}