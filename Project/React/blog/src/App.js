import logo from './logo.svg';
import poketmon from './test.jpg';
import './App.css';

function App() {
  let hello = "Hello World"
  return (
    <div className="App">
      <div className ='black-nav'>
        <div style={{color : 'blue', fontSize : '30px'}} >Test Blog</div>
      </div>
      <img src={ poketmon } />
      <h3>{ hello }</h3>
    </div>
  );
}

export default App;
