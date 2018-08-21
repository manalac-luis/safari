import React,{Component} from 'react';


export class WineMaker extends Component {
  constructor(){
    console.log("WineMaker.constructor()");
    super();
    this.wineMakers = [
      {code: 'WM1',name: 'Wine & Wine'},
      {code: 'WM2',name: 'Wine & Co'}
    ];
  }

  render(){
    console.log("WineMaker.render()");
    let wineMaker = this.wineMakers.find(wm=>wm.code === this.props.match.params.code);
    return <div>{wineMaker.name}</div>
  }
}

export default WineMaker;
