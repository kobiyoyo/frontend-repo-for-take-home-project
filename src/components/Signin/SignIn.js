import React from 'react'

//react-bootstrap
import { Form,FormControl,Button, Container,ListGroup } from 'react-bootstrap';

//css modules


const SignIn = () => {
    return (
        <div className={classes.SignIn}>
            <Container>
                <Form>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="Username" placeholder="Enter Username" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default SignIn
