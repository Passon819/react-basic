import Item from "./Item";
import "./Transaction.css";

const Transaction = (props) => {
  const { items } = props;

  return (
    <div>
      <ul className="item-list">
        {/* spread operator can use when property name of component is same with data property name */}
        {items.map((element) => {
          return <Item {...element} key={element.id} />;
        })}
      </ul>
    </div>
  );
};

export default Transaction;
