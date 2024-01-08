import React from "react";
import "./Content.css";
import laptop from "../../asset/laptop.png";
import watch from "../../asset/watch.png";
import camera from "../../asset/camera.png";
import earphone from "../../asset/earphone.png";
import phone from "../../asset/phone.png";
import countdownt from "../../asset/countdown.jpg";

const TO = new Date().getTime() + 24 * 3600 * 1000 + 5000;
console.log("TO VALUE", TO);

const Content = () => {
  return (
    <div
      className="section-sale d-flex border border-1 rounded "
      style={{ margin: 50 }}
    >
      <div style={{ borderRadius: 2, width: "25%" }} className="p-3 border-end">
        <img src={countdownt} alt="" />
      </div>
      <div className="d-flex ">
        <div className="sale-item border-end">
          <img src={watch} alt="" />
          <p className="mt-3">Smart watches</p>
          <p className="bg-danger rounded-4 w-50 mb-0 text-white">-15%</p>
        </div>

        <div className="sale-item border-end">
          <img src={laptop} alt="" />
          <p className="mt-3">Laptops</p>
          <p className="bg-danger rounded-4 w-50 mb-0 text-white">-15%</p>
        </div>

        <div className="sale-item border-end">
          <img src={camera} alt="" />
          <p className="mt-3">GoPro cameras</p>
          <p className="bg-danger rounded-4 w-50 mb-0 text-white">-15%</p>
        </div>

        <div className="sale-item border-end">
          <img src={earphone} alt="" />
          <p className="mt-3">Headphones</p>
          <p className="bg-danger rounded-4 w-50 mb-0 text-white">-15%</p>
        </div>

        <div className="sale-item border-end">
          <img src={phone} alt="" />
          <p className="mt-3">Canon cameras</p>
          <p className="bg-danger rounded-4 w-50 mb-0 text-white">-15%</p>
        </div>

        <div className="sale-item ">
          <img src={laptop} alt="" />
          <p className="mt-3">Laptops</p>
          <p className="bg-danger rounded-4 w-50 mb-0 text-white">-15%</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
