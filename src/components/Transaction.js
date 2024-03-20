import Item from "./Item";
import "./Transaction.css";

const Transaction = () => {
  const data = [
    { title: "ค่าเดินทาง", amount: "5000" },
    { title: "เงินเดือน", amount: "25000" },
    { title: "ค่ารักษาพยาบาล", amount: "1000" },
    { title: "ค่าประกันรถ", amount: "500" },
  ];

  return (
    <ul className="item-list">
      {/* spread operator can use when property name of component is same with data property name */}
      {data.map((element) => {
        return <Item {...element} />;
      })}
    </ul>
  );
};

export default Transaction;
