import React from "react";
import { MdHome } from "react-icons/md";
import { FaRestroom } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";
import "./studash.css"; // Import the CSS file
import { FaMoneyBillAlt } from "react-icons/fa";

const Studash = () => {
  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header-logo">
          <div className="logo">
            <h1 className="logo-title">
              <span>National Institute of Technology,Patna</span>
              
            </h1>
          </div>
        </div>

        <div className="app-header-actions">
          <button className="user-profile">
            <span>Aman Mishra</span>
            <span>
              <img
                src="https://assets.codepen.io/285131/almeria-avatar.jpeg"
                alt="User profile"
              />
            </span>
          </button>
        </div>
      </header>

      <div className="app-body">
        <div className="app-body-navigation">
          <nav className="navigation">
            <a href="/">
              <i className="ph-browsers"></i>
              <span>You</span>
            </a>
            <a href="/makepayment">
              <i className="ph-file-text"></i>
              <span>Make Payment</span>
            </a>
            <a href="/requestleave">
              <i className="ph-globe"></i>
              <span>Request Leave</span>
            </a>
            <a href="/payments">
              <i className="ph-clipboard-text"></i>
              <span>Payments</span>
            </a>
          </nav>
        </div>

        <div className="You">
          <section className="service-section">
            <div className="tiles">
              <article className="tile">
                <div className="tile-header">
                  <i className="ph-lightning-light"></i>
                  <h3>
                    <span>Aryabhatta Hostel</span>
                  </h3>
                </div>
                <a href="#">
                  <span className="icon-button">
                    <MdHome />
                  </span>
                </a>
              </article>
              <article className="tile">
                <div className="tile-header">
                  <i className="ph-fire-simple-light"></i>
                  <h3>
                    <span>Room no:</span>
                    <span>518</span>
                  </h3>
                </div>
                <a href="#">
                  <span className="icon-button">
                    <FaRestroom />
                  </span>
                </a>
              </article>
              <article className="tile">
                <div className="tile-header">
                  <i className="ph-file-light"></i>
                  <h3>
                    <span>Roll no:</span>
                    <span>2306050</span>
                  </h3>
                </div>
                <a href="#">
                  <span className="icon-button">
                    <IoSchool />
                  </span>
                </a>
              </article>
              <article className="tile">
                <div className="tile-header">
                  <i className="ph-lightning-light"></i>
                  <h3>
                    <span>Coupon used:</span>
                  </h3>
                </div>
                <a href="#">
                  <span className="icon-button">
                  <FaMoneyBillAlt />
                  </span>
                </a>
              </article>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Studash;