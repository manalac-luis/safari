import React,{Component} from 'react';
import './Catalog.css';
import ProductList from './ProductList';
import Cart from './Cart'

const style = {
  color:'green',
  textDecoration:'underline'
}

export class Catalog extends Component {

  constructor(){
    super();
    this.state = {
      products: [],
      cartItems: [],
      displayedCartItems:[]
    }
    fetch("products.json")
      .then(response=>response.json())
      .then(json=>{this.setState({products:json})})
      .catch(error=>console.log(error));
  }


  //error - addToCart(item) or bind in constructor
  addToCart = (item) => {

    this.state.cartItems.push(item);

    let newCartItemList = [];
    for (let item of this.state.cartItems){
      let foundItem = newCartItemList.find(x=>x.code===item.code);
      if (foundItem){
        foundItem.quantity = foundItem.quantity+1;
      } else {
        item.quantity = 1;
        newCartItemList.push(item);
      }
    }
    console.log(newCartItemList);

    this.setState({
        displayedCartItems:newCartItemList,
        });

    //this.setState({
    //    cartItems:[...this.state.cartItems, item],
    //    displayedCartItems:newCartItemList,
    //    });

  }

  render() {

    return (
      <div>
        <div className='catalog'>
          <h2>React-Router </h2>
          <ProductList items={this.state.products} addToCartHandler={this.addToCart}/>
        </div>
        <Cart items={this.state.displayedCartItems} />
      </div>
    );

  }
}

export default Catalog;
