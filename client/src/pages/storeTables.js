import React, { Component, Fragment} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';



class StoreTable extends Component{

    constructor(props){
        super(props)
        this.state = {
            store : this.props.store, //make a prop
            product: this.props.product, //make a a prop passed value
            storeData : []
        }
    }

    async componentDidMount(){
        const url = `http://localhost:5000/routes/products/${this.state.store}/${this.state.product}`;
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data);
        this.setState({storeData : data});
        //console.log(this.state.prodBaseDetails); 
    }

    render(){

        const {storeData} = this.state;
        return(
                <Fragment>
                    <h1><u><strong>{this.state.store}</strong></u></h1>
                    <Table striped hover>
                            <thead>
                                <td>Store</td>
                                <td>Store #</td>
                                <td>Cheapest Price</td>
                            </thead>
                            <tbody>
                            {storeData.map((item, index) => {
                                return <tr>
                                            <td>{item.p_storeName}</td>
                                            <td>{item.p_storeNum}</td>
                                            <td>{item.min}</td>
                                        </tr>
                            })}
                        </tbody>
                    </Table>
                </Fragment>
        )
    }
}

export default StoreTable;