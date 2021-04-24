import React from 'react'

//react-bootstrap
import { Container,Row,Image,Col } from 'react-bootstrap';

//images
import Bike from '../../assets/bike.jpg';

//css modules
import classes from './Product.module.css';

const Product = () => {
    return (
        <div className={classes.Product}>
            <Container>
                <Row className={classes.ProductRow}>
                    <Col  className={`${classes.ProductCol} mr-4 mb-5`}>
                        <a href='#Link' className={classes.ProductLink}>
                            <Image src={Bike} rounded className={classes.ProductImage}/>
                            <h2>Mountain Climber Bike</h2>
                            <p>$100</p>
                            <p>6 Available</p>
                        </a>
                    </Col>
                    <Col  className={`${classes.ProductCol} mr-4 mb-5`}>
                        <a href='#Link' className={classes.ProductLink}>
                            <Image src={Bike} rounded className={classes.ProductImage}/>
                            <h2>Mountain Climber Bike</h2>
                            <p>$100</p>
                            <p>6 Available</p>
                        </a>
                    </Col>
                    <Col  className={`${classes.ProductCol} mr-4 mb-5`}>
                        <a href='#Link' className={classes.ProductLink}>
                            <Image src={Bike} rounded className={classes.ProductImage}/>
                            <h2>Mountain Climber Bike</h2>
                            <p>$100</p>
                            <p>6 Available</p>
                        </a>
                    </Col>                        
                </Row>
            </Container>
        </div>
    )
}

export default Product;
