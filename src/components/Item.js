// can use props 2 ways
// 1. use props parameter then destructuring --- const {} = props;
// 2. can direct destructuring on parameter of func --- ({xx, xxx})

import PropTypes from "prop-types";

const Item = (props) => {
  const { title, amount } = props;

  return (
    <li>
      {title} <span>{amount}</span>
    </li>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Item;
