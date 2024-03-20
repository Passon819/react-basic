import Item from "./Item";
import "./Transaction.css";

const Transaction = () => {
  const data = [
    { title: "ค่าเดินทาง", amount: "5000" },
    { title: "เงินเดือน", amount: "25000" },
    { title: "ค่ารักษาพยาบาล", amount: "1000" },
  ];

  return (
    <ul className="item-list">
      <Item title={data[0].title} amount={data[0].amount} />
      <Item title={data[1].title} amount={data[1].amount} />
      <Item title={data[2].title} amount={data[2].amount} />
    </ul>
  );
};

export default Transaction;
