import React,{Component} from 'react';

export class Product extends Component {


  render(){

    let classToApply = this.props.item.selected ? 'selected': '';

    return(
    <li >
      <h3>{this.props.item.name}</h3>
      <p>{this.props.item.description}</p>
      <button onClick={() => this.props.addToCartHandler(this.props.item)}>
        Add To Cart
      </button>
    </li>
    );
  }

}


export default Product;
