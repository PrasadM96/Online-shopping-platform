import React, { Component , useState} from "react";
import { Tab,Tabs } from 'react-bootstrap';
import { Form, Button, Card, Col } from "react-bootstrap";


const Profile = props =>{
    const [key, setKey] = useState('profile');
    const uploadedImage = React.useRef(null);

    const handleImageUpload = e => {
      const [file] = e.target.files;
      if (file) {
        const reader = new FileReader();
        const {current} = uploadedImage;
        current.file = file;
        reader.onload = (e) => {
            current.src = e.target.result;
        }
        reader.readAsDataURL(file);
      }
    }
    return (
        <Card style={{ width: "44rem", margin: "3rem auto " }}>
        <Card.Header className="text-center">Your Information</Card.Header>
        <Card.Body>
        <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        >
      
        <Tab eventKey="profile" title="Profile">
        <Form>
        <Form.Row>
        <Form.Label></Form.Label>
        </Form.Row>
        <Form.Row>
        <Form.Label></Form.Label>
        </Form.Row>
        <Form.Row>
        <Form.Group as={Col} >
            <Form.Label>First Name</Form.Label>
        </Form.Group>
        <Form.Group as={Col} >
            <Form.Label>:</Form.Label>
        </Form.Group>
        <Form.Group as={Col} >
            <Form.Label>{localStorage.first_name}</Form.Label>
        </Form.Group>
        <Form.Group as={Col} >
            <Form.Label></Form.Label>
        </Form.Group>
        </Form.Row>
        <Form.Row>
        <Form.Group as={Col} >
            <Form.Label>Last Name</Form.Label>
        </Form.Group>
        <Form.Group as={Col} >
            <Form.Label>:</Form.Label>
        </Form.Group>
        <Form.Group as={Col} >
            <Form.Label>{localStorage.last_name}</Form.Label>
        </Form.Group>
        <Form.Group as={Col} >
            <Form.Label></Form.Label>
        </Form.Group>
        </Form.Row>
        <Form.Row>
        <Form.Group as={Col} >
            <Form.Label>Address1</Form.Label>
        </Form.Group>
        <Form.Group as={Col} >
            <Form.Label>:</Form.Label>
        </Form.Group>
        <Form.Group as={Col} >
            <Form.Label>{localStorage.address1}</Form.Label>
        </Form.Group>
        <Form.Group as={Col} >
            <Form.Label></Form.Label>
        </Form.Group>
        </Form.Row>
        <Form.Row>
        <Form.Group as={Col} >
            <Form.Label>Address2</Form.Label>
        </Form.Group>
        <Form.Group as={Col} >
            <Form.Label>:</Form.Label>
        </Form.Group>
        <Form.Group as={Col} >
            <Form.Label>{localStorage.address2}</Form.Label>
        </Form.Group>
        <Form.Group as={Col} >
            <Form.Label></Form.Label>
        </Form.Group>
        </Form.Row>
        <Form.Row>
        <Form.Group as={Col} >
            <Form.Label>City</Form.Label>
        </Form.Group>
        <Form.Group as={Col} >
            <Form.Label>:</Form.Label>
        </Form.Group>
        <Form.Group as={Col} >
            <Form.Label>{localStorage.city}</Form.Label>
        </Form.Group>
        <Form.Group as={Col} >
            <Form.Label></Form.Label>
        </Form.Group>
        </Form.Row>
        <Form.Row>
        <Form.Group as={Col} >
            <Form.Label>Province</Form.Label>
        </Form.Group>
        <Form.Group as={Col} >
            <Form.Label>:</Form.Label>
        </Form.Group>
        <Form.Group as={Col} >
            <Form.Label>{localStorage.province}</Form.Label>
        </Form.Group>
        <Form.Group as={Col} >
            <Form.Label></Form.Label>
        </Form.Group>
        </Form.Row>
        <Form.Row>
        <Form.Group as={Col} >
            <Form.Label>Zip code</Form.Label>
        </Form.Group>
        <Form.Group as={Col} >
            <Form.Label>:</Form.Label>
        </Form.Group>
        <Form.Group as={Col} >
            <Form.Label>{localStorage.zip}</Form.Label>
        </Form.Group>
        <Form.Group as={Col} >
            <Form.Label></Form.Label>
        </Form.Group>
        </Form.Row>
        <Form.Row>
        <Form.Group as={Col} >
            <Form.Label>Country</Form.Label>
        </Form.Group>
        <Form.Group as={Col} >
            <Form.Label>:</Form.Label>
        </Form.Group>
        <Form.Group as={Col} >
            <Form.Label>{localStorage.country}</Form.Label>
        </Form.Group>
        <Form.Group as={Col} >
            <Form.Label></Form.Label>
        </Form.Group>
        </Form.Row>
            

        </Form>
       


         
        </Tab>
        <Tab eventKey="update" title="Update">
            <Form>
            <Form.Row>
            <Form.Label></Form.Label>
            </Form.Row>
            <Form.Row>
            <Form.Label></Form.Label>
            </Form.Row>
            

              
      
            
    <Form.Row>
      <Form.Group as={Col} controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="firstname" value={props.firstname} 
              onChange={props.onChangeValue}
              type="text"
              placeholder="Enter firstname"
            />

        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                 name="lastname" value={props.lastname} 
                 onChange={props.onChangeValue}
                 type="text"
                 placeholder="Enter firstname"
                 />

                </Form.Group>
        </Form.Row>

        <Form.Group  controlId="formGridPassword">
                <Form.Label>Address Line1</Form.Label>
                <Form.Control
                 name="address1" value={props.address1} 
                 onChange={props.onChangeValue}
                 type="text"
                 placeholder="Enter adress1"
                 />

        </Form.Group>

        <Form.Group  controlId="formGridPassword">
                <Form.Label>Address Line2</Form.Label>
                <Form.Control
                 name="address2" value={props.address2} 
                 onChange={props.onChangeValue}
                 type="text"
                 placeholder="Enter adress2"
                 />

        </Form.Group>

        <Form.Row>
        <Form.Group as={Col} controlId="formBasicEmail">
            <Form.Label>City</Form.Label>
            <Form.Control
              name="city" value={props.city} 
              onChange={props.onChangeValue}
              type="text"
              placeholder="city"
            />

        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>States/Province/Region</Form.Label>
                <Form.Control
                 name="province" value={props.province} 
                 onChange={props.onChangeValue}
                 type="text"
                 placeholder="States"
                 />

        </Form.Group>
        </Form.Row>

        <Form.Row>
        <Form.Group as={Col} controlId="formBasicEmail">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control
              name="zip" value={props.zip} 
              onChange={props.onChangeValue}
              type="text"
              placeholder="Zip"
            />

        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Country</Form.Label>
                <Form.Control
                 name="country" value={props.country} 
                 onChange={props.onChangeValue}
                 type="text"
                 placeholder="country"
                 />

        </Form.Group>
        </Form.Row>



            <Form.Row>
            <Form.Group as={Col} />
            <Form.Group as={Col} >
            <Button
            onClick={e => {
                props.submitHandler(e);
              }}
            style={{ width: "100%" }}
            variant="primary"
            type="Submit"
          >
            update
          </Button>
          </Form.Group>
          </Form.Row>
        </Form>
        
            
         
        </Tab>
        
      </Tabs>
 </Card.Body>
    </Card>
    );
  }
  


export default Profile;