import React from 'react';
import App1 from './App1';
import App2 from './App2';
import './App.css';
class App extends React.Component{
  constructor(){
    super();
    this.state={
      fn: false,
      cls: false

    }
  }
  
  render() {
    return(
      <div className="App">
      <h1>Styling using Functional and class Component</h1>
      <button className='btn1' onClick={()=>this.setState({fn: !this.state.fn})}> To see styling class Component</button>
      <button className='btn2' onClick={()=>this.setState({cls: !this.state.cls})}> To see styling Functional Component</button>
    {this.state.fn && <App1/>}
    {this.state.cls && <App2/>}
    </div>
  )
}
}
export default App
