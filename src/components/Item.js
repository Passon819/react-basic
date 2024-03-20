// can use props 2 ways
// 1. use props parameter then destructuring --- const {} = props;
// 2. can direct destructuring on parameter of func --- ({xx, xxx})

const Item = (props) => {
  const { title, amount } = props;

  return (
    <li>
      {title} <span>{amount}</span>
    </li>
  );
};

export default Item;
