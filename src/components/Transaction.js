import Item from "./Item";
import "./Transaction.css";

const Transaction = (props) => {
  const { items } = props;

  return (
    <ul className="item-list">
      {/* spread operator can use when property name of component is same with data property name */}
      {items.map((element) => {
        return <Item {...element} key={element.id} />;
      })}
    </ul>
  );
};

export default Transaction;
