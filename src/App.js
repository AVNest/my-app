import {Component} from 'react';
import './App.css';

const Header = () => {
  return <h2>Hello World!</h2>
}

class Field extends Component {
  render() {
      const holder = 'Enter here';
      const styledField = {
      width: '300px'
    };  
    return <input 
            style={styledField} 
            placeholder={holder} 
            type="text"/> 
  }
}

function Btn() {
  const text = 'Log In';
  const logged = true;
  return <button>{logged ? 'Enter' : text}</button>
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Btn/> 
    </div>
  );
}

export {Header};
export default App;
