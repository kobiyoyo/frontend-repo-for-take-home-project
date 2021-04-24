import React from 'react'

//react-bootstrap
import { Form,FormControl,Button, Container,ListGroup } from 'react-bootstrap';

//css modules
import classes from './Category.module.css';

const Category = () => {
    return (
        <div className={classes.Category}>
            <Container>
                <Form inline className="mb-4">
                    <FormControl type="text" placeholder="Add Category" className="mr-sm-2" />
                    <Button variant="outline-info">Add Category</Button>
                </Form>
                <ListGroup>
                    <ListGroup.Item action  href='#Link1'>Racers Bike</ListGroup.Item>
                    <ListGroup.Item action  href='#Link2'>Normal Bike</ListGroup.Item>
                    <ListGroup.Item action  href='#Link3'>Moutain Climber Bike</ListGroup.Item>
                    <ListGroup.Item action  href='#Link4'>Electric Bike</ListGroup.Item>
                </ListGroup>
            </Container>
        </div>
    )
}

export default Category;
