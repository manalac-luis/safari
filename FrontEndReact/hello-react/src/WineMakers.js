import React,{Component} from 'react';
import WineMaker from './WineMaker';
import {Switch, Route, Link} from 'react-router-dom';

export class WineMakers extends Component {

  renderWineMakersList(){
    return(
      <ul>
        <li><Link to='/winemakers/WM1'>Wine 1</Link></li>
        <li><Link to='/winemakers/WM2'>Wine 2</Link></li>
      </ul>
    );
  }



  render(){

    return(
      <div>
        <h2>Wine Makers</h2>
        <Switch>
          <Route exact path='/winemakers' render={this.renderWineMakersList} />
          <Route path='/winemakers/:code' component={WineMaker} />
        </Switch>
      </div>
    )
  }
}

export default WineMakers
