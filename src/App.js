import './App.css';
import './css/header.css'
import './css/about.css'
import FrozenCowIMG from '../src/assets/fcc.jpg'

function App() {
  return (
    <div className="App">

      <header className='flexbox-container'>
        <h2>Frozen Cow Creamery</h2>

        <nav className='flexbox-container row'>

          <a href='#about'>About</a>
          <a> | </a>
          <a href='#menu'>Menu</a>
          <a> | </a>
          <a href='#'>Contact</a>
          <a> | </a>
          <a href='#'>Careers</a>

        </nav>
      </header>

      <div className='about flexbox-container'>
       <h1 className='handmade-and-wholesome'>Handmade and Wholesome</h1>
      </div>

      <div className='menu flexbox-container'>
        <h1>Menu</h1>
      </div>

    </div>
  );
}

export default App;
