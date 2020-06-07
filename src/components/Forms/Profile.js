  
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Form, Button, Card ,Col,Container,Row} from "react-bootstrap";

const profile = props => {
    
  return (

    <Container>
    <Row>
    <Col md={6}>
    <Card style={{ width: "30rem", margin: "3rem  " }}>
    <Card.Body>
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Profile
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstname"
            name="firstname"
            label="First name"
            value={props.firstname} 
            onChange={props.onChangeValue}
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastname"
            name="lastname"
            label="Last name"
            value={props.lastname} 
            onChange={props.onChangeValue}
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            value={props.adress1} 
            onChange={props.onChangeValue}
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            value={props.adress2} 
            onChange={props.onChangeValue}
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            value={props.city} 
            onChange={props.onChangeValue}
            fullWidth
            
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="province" 
          name="province" 
          label="State/Province/Region"
          value={props.province} 
          onChange={props.onChangeValue} 
          fullWidth 
          autoComplete=""/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            value={props.zip} 
            onChange={props.onChangeValue}
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            value={props.country} 
            onChange={props.onChangeValue}
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
        <Grid item xs={12} sm={6}></Grid>
        <Grid item xs={12} sm={6}>
        <Button
            onClick={e => {
              props.submitHandler(e);
            }}
            style={{ width: "100%" }}
            variant="primary"
            type="Submit"
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
    </Card.Body>
    </Card>

   </Col>
   
   <Col md={6}>
   <Card style={{ width: "30rem", margin: "3rem  " }}>
    <Card.Body>
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        My Orders
      </Typography>
      
    
    </React.Fragment>
    </Card.Body>
    </Card>

   </Col>
    </Row>
</Container>
  );
};

export default profile;
