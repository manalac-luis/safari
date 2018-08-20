import React,{Component} from 'react';

export class Product extends Component {


  render(){

    let classToApply = this.props.item.selected ? 'selected': '';

    return(
    <li onClick = {()=>this.props.selectHandler(this.props.item.code)} className={classToApply}>
      <h3>{this.props.item.name}</h3>
      <p>{this.props.item.description}</p>
    </li>
    );
  }

}


export default Product;
