import { MdLocalMovies } from "react-icons/md";
import { FaArrowAltCircleUp } from "react-icons/fa";

let button = "";
const Button = props => {
  if (!props.btnState) {
    button = (
      <button onClick={props.onClick} className={props.btnClass}>
        Add <MdLocalMovies />
      </button>
    );
  } else {
    button = (
      <button onClick={props.onClick} className="btn btn-light">
        Hide <FaArrowAltCircleUp />
      </button>
    );
  }
  return <div>{button}</div>;
};

export default Button;
