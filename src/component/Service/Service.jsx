import React from "react";
import "./Service.css";
import anh from "../../asset/image .png";
import bg from "../../asset/image 106.png";
import img from "../../asset/1.png";

export default function Service() {
  return (
    <div className="service">
      <h2>Our extra services</h2>
      <div className="item-service">
      <div class="card">
        <img src={anh} alt="..." />
        <div class="card-body">
          <p class="card-text">
            Source from Industry Hubs
          </p>
        </div>
      </div>
      <div class="card">
        <img src={bg} class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">
            Source from Industry Hubs
          </p>
        </div>
      </div>
      <div class="card">
        <img src={bg} class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">
            Source from Industry Hubs
          </p>
        </div>
      </div>
      <div class="card">
        <img src={anh} class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">
            Source from Industry Hubs
          </p>
        </div>
      </div>
      <div class="card">
        <img src={bg} class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">
            Source from Industry Hubs
          </p>
        </div>
      </div>
      <div class="card">
        <img src={anh} class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">
            Source from Industry Hubs
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}
