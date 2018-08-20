import React,{Component} from 'react';
import './Catalog.css';
import ProductList from './ProductList';

const style = {
  color:'green',
  textDecoration:'underline'
}

export class Catalog extends Component {

  constructor(){
    super();
    this.state = {
      products: []
    }
    fetch("products.json")
      .then(response=>response.json())
      .then(json=>{this.setState({products:json})})
      .catch(error=>console.log(error));
  }
  
  render() {
    let title = 'Catalog';

    return (
      <div className='other-day'>
        <h2>{title}</h2>
        <ProductList items={this.state.products}/>
      </div>
    );
    {/*
    let today = new Date().getDay();
    let message;

    if (today == 0){
      message = <div className="sunday">Closed on Sunday</div>
    } else {
      message = <div className="otherday">Open Monday to Saturday</div>
    }

    return message;
    */}
    {/*
    return(
      <div>
        <div>
          <p></p>
        </div>
        <div className="form-row">
          <label htmlFor="code" className="control-label" style={{color:'green'}}>Insert code</label>
          <input type="text" className="form-control" name="code" />
        </div>
        <div className="form-row">
          <button style ={style} type="submit" class="btn" >Send</button>
        </div>
      </div>
    ); */
    }
  }
}

export default Catalog;
