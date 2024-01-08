import React from "react";
import "./Header.css";
import logo from "../../asset/logo.png";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

export default function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg border-bottom ps-5">
        <div class="container-fluid">
          <img src={logo}></img>

          <div class="container-fluid w-75">
            <form class="d-flex" role="search">
              <input
                class="form-control w-50"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <select class="form-select w-25">
                <option selected>All category</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <button type="button" class="btn btn-primary">
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="icon">
          <p>
            <MdOutlineAccountCircle /> Profile
          </p>
          <p>
            <AiOutlineMessage /> Message
          </p>
          <p>
            <FaRegHeart /> Message
          </p>
          <p>
            <IoCartOutline /> MyCart
          </p>
        </div>
      </nav>

      <nav class="navbar navbar-expand-lg border-bottom ps-5">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            All category
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Hot offers
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Gift boxes
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Projects
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menu item
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="navbar-info">
        <li class="nav-item dropdown ">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  English, USD
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Ship to
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
        </div>
        
      </nav>
    </div>
  );
}
