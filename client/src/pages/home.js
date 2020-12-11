import 'bootstrap/dist/css/bootstrap.min.css';

import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
// import CardDeck from 'react-bootstrap/CardDeck';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';

import Navbar from 'react-bootstrap/Navbar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import img1 from './nin_console.png';
import img2 from './nin_games.jpg';

import Updates from './updatesTable';

class Home extends Component {


    render(){
        return (
            <body>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Ninventory</Navbar.Brand>
                </Navbar>
                <Jumbotron>
                    <h1>Home</h1>
                    <p>
                        Welcome! Select a product type to view
                    </p>
                </Jumbotron>

                <CardColumns>
                    <Card style={{ width: "18rem" }}>
                        <Image src={img1} style = {{width:"18rem"}}/>
                        <Card.Body>
                            <Link to="/hardware">
                                <Button variant="danger">Hardware</Button>
                            </Link>
                        </Card.Body>
                    </Card>
            
            
                    <Card style={{width: '18rem'}}>
                        <Image src = {img2} style = {{width:"18rem", height: "9rem"}}  />
                        <Card.Body>
                            <Link to="/software">
                                <Button variant="danger">Software</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </CardColumns>


                <Container>
                    <Updates />
                </Container>
            </body>
        )
    }
}

export default Home;
