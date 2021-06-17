import React from "react";
import logo from "./assets/logo.png";
import Button from "./Button";
const Header = props => {
  // const btnOnclick = () => {
  //   if (!props.addBool) {
  //     props.setAddBool(true);
  //   } else {
  //     props.setAddBool(false);
  //   }
  // };

  return (
    <header className="m-2 text-center bg-dark p-3 rounded">
      <div>
        <img
          className="image-responsive img-fluid w-25"
          src={logo}
          alt="Logo"
        />
        ;
        <div>
          <h2 className="text-warning">Movies Watchlist</h2>
          <h6 className="text-white">u/{props.user}</h6>
        </div>
      </div>
      <Button
        onClick={props.onAdd}
        btnState={props.showAdd}
        btnClass="mt-2 btn btn-light"
      />
    </header>
  );
};

Header.defaultProps = {
  user: "defaultUser",
};

export default Header;
