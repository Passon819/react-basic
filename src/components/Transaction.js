import Item from "./Item";
import "./Transaction.css";
import DataContext from "../data/DataContext";

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
      {/* วิธีการใช้งาน context แบบที่หนึ่ง */}
      <DataContext.Consumer>{(value) => <p>{value}</p>}</DataContext.Consumer>
    </div>
  );
};

export default Transaction;
