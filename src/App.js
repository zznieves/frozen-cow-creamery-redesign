import './App.css';
import './css/header.css';
import './css/banner.css';
import './css/menu.css';
import './css/about.css';
import './css/contact.css';
import FrozenCowLogo from './assets/fcc_logo.jpg';
import specialtyItems from './menuItems.js';
import FronzenCowFamily from './assets/fcc-family.jpg'

function App() {
  return (
    <div className="App flexbox-container">

      <header className='flexbox-container'>
        <h2>Frozen Cow Creamery</h2>

        <nav className='flexbox-container row'>

          <a href='#menu'>Menu</a>
          <p> | </p>
          <a href='#about'>About</a>
          <p> | </p>
          <a href='#contact'>Contact</a>
          <p> | </p>
          <a href='#careers'>Careers</a>

        </nav>
      </header>

      <div className='banner flexbox-container'>
        
        <div className='company-logo'>
          <img src={FrozenCowLogo} alt='frozen cow logo' />
        </div>

        <div className='motto-banner'>
          <h2>Handmade and Wholesome</h2>
        </div>

      </div>

      <div id='menu' className='menu flexbox-container'>
        
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

        <div className='flavors-and-tossins flexbox-container'>
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

        <div id='about' className='about'>
          <h2>About Us</h2>

          <div className='family flexbox-container'>
            <img src={FronzenCowFamily} alt='frozen cow creamery family' />
            <p>
            Meet the husband, wife, and daughter team behind Frozen Cow<br />
            Creamery.We have a love for creating and sharing delicious food and <br />
            desserts with those close to us, and we were ready to share our<br />
             passion with our community. With fond memories of family trips<br />
              to eat the best homemade ice cream at the local creamery in Ohio where<br />
               we used to live, we wanted to recreate that same experience in <br />
               Kennesaw. We are grateful to have lived here for over 25 years and to<br />
                have served this wonderful community for more than 6 years now<br />
                 with the help of our amazing staff. We hope to continue to serve you<br />
                  for many more years to come!  <br />
                  Thank you for supporting our small family-owned business! 
            </p>
          </div>
        </div>

        <div id='contact' className='contact flexbox-container'>


          <div className='contact-left flexbox-container'>

            <h2>Contact</h2>

            <h3>Frozen Cow Creamery</h3>

            <p>
              2870 Cherokee Street Northwest, Kennesaw, Georgia<br /> 30144, United States
              <br />
              <br />
              678-324-7459<br/><br />
              <a href="Frozenbluecow@gmail.com">Frozenbluecow@gmail.com</a>
            </p>

            <h3>Hours</h3>

            <p id='hours-of-operation'>
            Monday- Thursday: 1- 9PM <br />

            Friday: 1- 11 PM <br />

            Saturday 12 - 11 PM <br />

            Sunday 1 - 9 PM
            </p>

          </div>

          <div className='contact-right location-map flexbox-container'>

          <iframe title='google-maps-location' id='interactive-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.7954382968232!2d-84.61572632382368!3d34.02346141924869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f53fe4c6c093c3%3A0xe8f76ecc2c7f4da5!2sFrozen%20Cow%20Creamery!5e0!3m2!1sen!2sus!4v1699670178944!5m2!1sen!2sus" 
            style={{border:0}}
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            >

            </iframe>

          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
