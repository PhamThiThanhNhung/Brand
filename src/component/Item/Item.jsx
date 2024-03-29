import React from "react";
import vest from "../../asset/vest.png";
import jacket from "../../asset/jacket.png";
import earphone from "../../asset/earphone1.png";
import "./item.css";

export default function Item() {
  return (
    <div className="item">
      <div className="banner">
        <div className="banner-info">
          <h4 >An easr way to send requests to all suppliers</h4>
          <p>
            Learem ipsum dolor sit amet, consectetur adipisicing
            <br />
            elit, sed do eiusmod tempor incididunt
          </p>
        </div>
        <div class="ss-nav">
          <p class="ssNav-text">Send quote to suppliers</p>
          <input type="text" class="input-one" />
          <input type="text" class="input-two" />
          <button class="ssNav-btn">Send inquiry</button>
        </div>
      </div>
      <div className="buy-item row row-cols-5">
        <div class="col">
          <div class="card">
            <img src={vest} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Brown winter coat medium size</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={vest} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Brown winter coat medium size</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={earphone} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Headser for gaming with mic</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={earphone} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Headser for gaming with mic</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={vest} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Brown winter coat medium size</p>
            </div>
          </div>
        </div>
        
        <div class="col">
          <div class="card">
            <img src={earphone} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Headser for gaming with mic</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={vest} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Brown winter coat medium size</p>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
}
