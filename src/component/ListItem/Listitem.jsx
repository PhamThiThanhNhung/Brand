import React from "react";
import "./Listitem.css";
import icon from "../../asset/1.png";

export default function Listitem() {
  return (
    <div className="list-item">
      <h2>Suppliers by region</h2>
      <div>
      <div class="d-flex ">
        <div className="icon-list">
            <img className="img" src={icon} alt="" />
            <div class="p-3">Arablc Emirates</div>
        </div>
        <div className="icon-list">
            <img className="img" src={icon} alt="" />
            <div class="p-3">Arablc Emirates</div>
        </div>
        <div className="icon-list">
            <img className="img" src={icon} alt="" />
            <div class="p-3">Arablc Emirates</div>
        </div>
        <div className="icon-list">
            <img className="img" src={icon} alt="" />
            <div class="p-3">Arablc Emirates</div>
        </div>
        <div className="icon-list">
            <img className="img" src={icon} alt="" />
            <div class="p-3">Arablc Emirates</div>
        </div>
      </div>
      </div>
      <div>
      <div class="d-flex ">
        <div className="icon-list">
            <img className="img" src={icon} alt="" />
            <div class="p-3">Arablc Emirates</div>
        </div>
        <div className="icon-list">
            <img className="img" src={icon} alt="" />
            <div class="p-3">Arablc Emirates</div>
        </div>
        <div className="icon-list">
            <img className="img" src={icon} alt="" />
            <div class="p-3">Arablc Emirates</div>
        </div>
        <div className="icon-list">
            <img className="img" src={icon} alt="" />
            <div class="p-3">Arablc Emirates</div>
        </div>
        <div className="icon-list">
            <img className="img" src={icon} alt="" />
            <div class="p-3">Arablc Emirates</div>
        </div>
      </div>
      </div>
    </div>
  );
}
