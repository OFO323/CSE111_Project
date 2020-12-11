import React, { Component, Fragment} from 'react';
import {Link} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import StoreTable from './storeTables';



class ProdPage extends Component{
// 12/10/2020: curent problem is to link to react component with passed "prodName" prop
    constructor(props){
        super(props)
        this.state = {
            prodName : this.props.location.state, //name is used as a key to pull specific data for this particular product page
            prodBaseDetails : [],    //will hold all the pulled data used to display
            prodStoreDetails : []
        };
    }

    async componentDidMount(){
        const {prodName} = this.props.location.state;



        const url = `http://localhost:5000/routes/products/base/${prodName}`;
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data);
        this.setState({prodBaseDetails : data});
        //console.log(this.state.prodBaseDetails); 
    }

    basePriceComp(){

    }

    


    render(){
        const {prodName} = this.props.location.state;
        const {prodBaseDetails} = this.state;
        //console.log(prodBaseDetails);

        return(
        <Fragment>
            <Link to="/">
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="#home">Ninventory</Navbar.Brand>
                    </Navbar>
                </Link>
                <Jumbotron>
                    <h1>{prodName}</h1>   {/* replace w/ this.state.prodName once connection successful */}
                    <p>
                        Lowest prices and general product info for a specific product
                    </p>
                </Jumbotron>
                <Container fluid>
                    {/* will contain the base product info */}
                    <Table style = {{color:"#f72525"}} striped hover >
                        <thead>
                            <td>Base Nintendo Store Price</td>
                            <td>Release Date</td>
                        </thead>
                        <tbody>
                           
                            {prodBaseDetails.map((item, index) => {
                                return <tr>
                                            <td>{item.max}</td>
                                            <td>{item.p_releasedate}</td>
                                        </tr>
                            })}
                       
                        </tbody>
                    </Table>
                    <Row>
                        <Col>
                            <h1>{prodBaseDetails.p_prodName}</h1>
                        </Col>
                        <Col>
                            <h1>{prodBaseDetails.p_price}</h1>
                        </Col>
                        <Col>
                            <h1>{prodBaseDetails.p_releasedate}</h1>
                        </Col>
                    </Row>

                </Container>
                <Container fluid >
                    {/*container for every store will info such as price/ basePrice comparison /last shipment*/}
                    <StoreTable store = 'Target' product = {prodName}/>
                </Container>
                <Container fluid >
                    {/*container for every store will info such as price/ basePrice comparison /last shipment*/}
                    <StoreTable store = 'Walmart' product = {prodName}/>
                </Container>
                <Container fluid >
                    {/*container for every store will info such as price/ basePrice comparison /last shipment*/}
                    <StoreTable store = 'Gamestop' product = {prodName}/>
                </Container>
        </Fragment>
        )
    }

}


export default ProdPage;
