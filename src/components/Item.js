// can use props 2 ways
// 1. use props parameter then destructuring --- const {} = props;
// 2. can direct destructuring on parameter of func --- ({xx, xxx})

import PropTypes from "prop-types";
import "./Item.css";
import DataContext from "../data/DataContext";
import { useContext } from "react";

const Item = (props) => {
  const { title, amount } = props;
  const status = amount < 0 ? "expense" : "income";
  const symbol = amount < 0 ? "-" : "+";

  // วิธีการใช้งาน context แบบที่สอง
  const name = useContext(DataContext);

  return (
    <li className={status}>
      {title}
      <span>
        {symbol}
        {Math.abs(amount)}
      </span>
      {name}
    </li>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Item;
