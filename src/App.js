import './App.css';
import './css/header.css';
import './css/about.css';
import './css/menu.css';
import FrozenCowLogo from './assets/fcc_logo.jpg';
import specialtyItems from './menuItems.js';

function App() {
  return (
    <div className="App">

      <header className='flexbox-container'>
        <h2>Frozen Cow Creamery</h2>

        <nav className='flexbox-container row'>

          <a>About</a>
          <a> | </a>
          <a>Menu</a>
          <a> | </a>
          <a>Contact</a>
          <a> | </a>
          <a>Careers</a>

        </nav>
      </header>

      <div className='about flexbox-container'>
        
        <div className='company-logo'>
          <img src={FrozenCowLogo} alt='frozen cow logo' />
        </div>

        <div className='motto-banner'>
          <h2>Handmade and Wholesome</h2>
        </div>

      </div>

      <div className='menu flexbox-container'>
        
        <div className='menu-title'>
          <h2>Menu</h2>
        </div>

        <div className='specialty'>
          <h3>Specialty</h3>
        </div>

        <div className='menu-items grid-container flexbox-container'>

          {specialtyItems.map((item, index) => {

            // return a div element for each menu item
            return (
              <div key={index} className='grid-item'>
                <p className='menu-item'><strong>{item.name}</strong></p>
                <p>{item.description}</p>
              </div>
            );
          })}

        </div>

        <div className='flavors-and-tossins'>
          <h2>Choose Your Flavors & Toss-ins</h2>

          <h3>Flavors</h3>
          <p>
            Sweet Cream, Vanilla, Chocolate, Dark Chocolate, Cherry, Coffee, Cinnamon, Almond, Amaretto, Irish Crean, Mint, Rum,<br />
            Orange, Lemon, Cake Batter, Cheesecake, Cotton Candy, Dulce de Leche, Peanut Butter, Peach
          </p>

         <h3>Toss-ins ($.95)</h3>
         <p>
          <strong>Fruits:</strong> Banana, Peach, Ple Cherries, Black Cheries, Pineapple, Strawberry Blueberry, Raspberry, Mango, Raisins<br /><br />
          <strong>Nuts: </strong> Peanuts, Walnuts, Almonds, Pecans, Pistachios<br /><br />
          <strong>Sweets:</strong> Sprinkles, Gummy Bears, Chocolate Chips, White Chocolate Chips, M&M's, Peanut Butter Cups, Butteringer, Heath Bar,<br />
          &nbsp;&nbsp;&nbsp;&nbsp;Coconut Marshmallow, Marshmallow Flut, Nutella, Cinnamon Chips, Toasted Coconut<br /><br />
          <strong>Crumbles:</strong> Cookie Dough, Brownie, Birthday Cake, Carot Cake, Graham Crackers, Graham Cracker Crumbs,<br />
          &nbsp;&nbsp;&nbsp;&nbsp;Oreos, Pretzels, Nila Waters, Lady Fingers, Sea Salt<br /><br />
          <strong>Sauces & Syrups:</strong> Fudge, Caramel, Praline, Peanut Butter, Honey, Maple<br /><br />
          <strong>Premium Toss-ins ($1.00):</strong> Cheesecake, Matcha Green Tea
         </p>
        </div>


      </div>

    </div>
  );
}

export default App;
