import { Link } from "react-router-dom";

const Navbar = (props) => {

  return (
    <div style={{color:props.mode==="light"?"black":"white"}}>
      <nav className={`navbar navbar-expand-lg bg-${props.mode}`} >
        <div className="container-fluid" >
          <Link className="navbar-brand" to="/" style={{color:props.mode==="light"?"black":"white"}}>
            {props.brand}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" style={{color:props.mode==="light"?"black":"white"}}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About" style={{color:props.mode==="light"?"black":"white"}}>
                  About
                </Link>
              </li>
            </ul>
        <div className="color">
          <div className="btnss"   ><button name="yellow" id="yellow" onClick={props.color} className="warning"/></div>
          <div className="btnss"  ><button name="green" id="green" onClick={props.color} className="success"/></div>
          <div className="btnss" ><button name="red" id="red" onClick={props.color}  className="danger"/></div>
          <div className="btnss"  ><button name="purple" id="purple" onClick={props.color} className="primary"/></div>
        </div>
              <div className="custom-control custom-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customSwitch1"
                  onClick={props.toggle}
                />
                <label className="custom-control-label" htmlFor="customSwitch1">
                  Dark Mode
                </label>
              </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
