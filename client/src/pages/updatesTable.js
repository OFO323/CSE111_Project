import React, { Component, Fragment } from 'react';
//import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from 'moment'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class Updates extends Component{
    constructor(props){
        super(props)
        this.state = {
            updateDetails: []
        }
    }

    async componentDidMount(){

        const url = `http://localhost:5000/routes/products/updates`;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({updateDetails : data});

    }

    //finish this and place on home page 
    render(){
        const {updateDetails} = this.state;


        return(
            <Fragment>
                <Container>
                    <Row fluid>
                        <h1><u><strong>Recent Updates</strong></u></h1>
                    </Row>
                    <Row>
                        Real Time Updates to Store Inventories
                    </Row>
                </Container>
                <Table striped variant="dark">
                    <thead>
                        <td>Store</td>
                        <td>Store # </td>
                        <td>Product</td>
                        <td>Price</td>
                        <td>Amount Restocked</td>
                        <td>Restock Time</td>
                    </thead>
                    <tbody>
                    {updateDetails.map((item, index) => {
                                    return <tr>
                                                <td>{item.store}</td>
                                                <td>{item.storeNum}</td>
                                                <td>{item.product}</td>
                                                <td>{item.price}</td>
                                                <td>{item.prod_amount}</td>
                                                <td>{item.restock_time}</td>
                                            </tr>
                                })}
                    </tbody>
                </Table>
            </Fragment>           
        )
    }
}


export default Updates;