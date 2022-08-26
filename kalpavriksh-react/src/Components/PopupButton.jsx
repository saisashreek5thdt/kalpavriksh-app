import React from "react";

const PopupButton = () => {
  return (
    <div className="popup">
      <div>
        <div className="dropup relative">
          <button className="popup__button" type="button" id="dropdownMenuButton1u" data-bs-toggle="dropdown" aria-expanded="false">+</button>
          <ul className="popup__ul" aria-labelledby="dropdownMenuButton1u">
            <li>
              <a className="popup__a" href="#" >Action</a>
            </li>
            <li>
              <a className="popup__a" href="#">Another action</a>
            </li>
            <li>
              <a className="popup__a" href="#">Something else here</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PopupButton;
