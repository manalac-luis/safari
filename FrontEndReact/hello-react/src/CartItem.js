import React,{Component} from 'react';

export class CartItem extends Component {
  render() {
    return (
      <li>
        <h3>{this.props.item.name}({this.props.item.quantity})</h3>
      </li>
    )
  }
}

export default CartItem;
