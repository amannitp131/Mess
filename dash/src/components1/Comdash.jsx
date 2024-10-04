import React from 'react';
import './Comdash.css';

import { MdHome } from "react-icons/md";
import { FaRestroom } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";
import { FaRegDotCircle } from "react-icons/fa";

const Comdash = () => {

  const data = [
    {
      id: 1,
      icon: "ph-lightning-light",
      title: "Actively Present ",
      iconComponent: <FaRestroom />,
    },
    {
      id: 2,
      icon: "ph-fire-simple-light",
      title: "Morning",
      description: "Idli, Banana, Milk, Egg, Chutney",
      iconComponent: null,
    },
    {
      id: 3,
      icon: "ph-file-light",
      title: "Total coupon used",
      description: "Rs10000",
      iconComponent: <IoSchool />,
    },
    {
      id: 4,
      icon: "ph-apple-light",
      title: "Rest Food Quantity",
      description: "Rice: 2kg, Dal: 1kg",
      iconComponent: null,
    }
  ];
  
  return(

     <div className="app">
        <header className="app-header">
          <div className="app-header-logo">
            <div className="logo">
             
              <h1 className="logo-title">
                <span>Mess Contracter,</span>
                <span>Name</span>
              </h1>
            </div>
          </div>

          <div className="app-header-actions">
            <button className="user-profile">
              <span>Actively Serving &nbsp;&nbsp;   </span>
              <span>
                <FaRegDotCircle/>
              </span>
            </button>
          </div>
        </header>

        <div className="app-body">
          <div className="app-body-navigation">
            <nav className="navigation">
              <a href="/">
                <i className="ph-browsers"></i>
                <span>Today</span>
              </a>

              <a href="/raise">
                <i className="ph-globe"></i>
                <span>Send Notification</span>
              </a>
              <a href="/Predictor">
                <i className="ph-clipboard-text"></i>
                <span>Food quantity Predictor</span>
              </a>
            </nav>
          </div>

          <div className="You">
  <section className="service-section">
    <div className="tiles">
      {data.map((item) => (
        <article className="tile" key={item.id}>
          <div className="tile-header">
            <i className={item.icon}></i>
            <h3>
              <span>{item.title} : &nbsp;</span>
              {item.description && <span>{item.description}</span>}
            </h3>
          </div>
          <a href="#">
            <span className="icon-button">
              {item.iconComponent}
            </span>
          </a>
        </article>
      ))}
    </div>
  </section>
</div>

        </div>
      </div>
  )
}

export default Comdash;