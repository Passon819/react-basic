import Item from "./Item";
import "./Transaction.css";

const Transaction = () => {
  return (
    <ul className="item-list">
      <Item title="ค่ารักษาพยาบาล" amount="1000" />
      <Item title="เงินเดือน" amount="25000" />
      <Item title="ค่าอาหาร" amount="5000" />
    </ul>
  );
};

export default Transaction;
