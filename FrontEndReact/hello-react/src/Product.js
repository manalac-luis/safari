import React,{Component} from 'react';


export class Product extends Component {
  render(){
    return(
    <li>
      <h3>{this.props.item.name}</h3>
      <p>{this.props.item.description}</p>
    </li>
    );
  }

}


export default Product;
