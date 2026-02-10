import React from 'react';
import "./App.css";

const Home = () => {
  return (
    <>
      <div className='dashboard'>
        
        {/* NAVBAR */}
        <div className='dashboard__navbar'>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>

            <div className="collapse navbar-collapse">
              <form className="navSearch">
                <input 
                  className="navSearch__input" 
                  type="search" 
                  placeholder="Search" 
                />
                <button 
                  className="navSearch__button" 
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </nav>
        </div>

        {/* TEMPLATE SECTION */}
        <div className='templateSection'>
          <h1>50,000+ PowerPoint Templates</h1>

          <h3>
            Download ready-made PowerPoint slides & 100% editable templates for your presentations. 
            Finish your work in less time.
          </h3>

          <div className="templateSearch">
            <input 
              className="templateSearch__input" 
              type="text" 
              placeholder="Search Templates..." 
            />

            <button 
              className="templateSearch__button" 
              type="submit"
            >
              Search
            </button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home;
