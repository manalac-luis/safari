import React,{Component} from 'react';
import CartItemsList from './CartItemsList';


export class Cart extends Component {
  render() {

    return (
      <div>
        {//<img src="shopping-cart-logo.svg" alt="cart" height="100px"/>
        }
        <div className='cart'>
          <h2>Cart</h2>
          <CartItemsList items={this.props.items} />
        </div>
      </div>
    );
  }
}

export default Cart;
