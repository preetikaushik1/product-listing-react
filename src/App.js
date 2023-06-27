import meeshologo from './Images/meesho.png'
import './App.css';
import Product from './Product';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='header'>
          <div className='leftbox'>
            <img src={meeshologo} alt='meesho' className='img2'/>
          </div>

          <div className='rightbox'>
           <div className='nav'><span>Download App</span>
            <span>Become a Supplier</span>
            <span>Profile</span>
            <span><span className='color'>&#9829; </span>Wishlist</span></div> 
          </div>
        </div>
        <hr/>
        

        <h1>womens tshirt</h1>
        <h3>Showing 201-220 out of 10000 products
</h3>
        <Product/>
            </header>
    </div>
  );
}

export default App;
