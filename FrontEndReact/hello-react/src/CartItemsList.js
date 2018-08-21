import React,{Component} from 'react';
import './CartItemsList.css';
import CartItem from './CartItem';

export class CartItemList extends Component {
  render(){
    let items =[];

    for (let item of this.props.items){
      items.push(<CartItem key={item.code} item={item} />);
    }

    return <ul>{items}</ul>
  }
}

export default CartItemList;
