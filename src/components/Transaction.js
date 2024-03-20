import Item from "./Item";
import "./Transaction.css";
import { v4 as uuidv4 } from "uuid";

const Transaction = () => {
  const data = [
    { title: "ค่าเดินทาง", amount: 5000 },
    { title: "เงินเดือน", amount: 26000 },
    { title: "ค่ารักษาพยาบาล", amount: 1000 },
    { title: "ค่าประกันรถ", amount: 600 },
  ];

  return (
    <ul className="item-list">
      {/* spread operator can use when property name of component is same with data property name */}
      {data.map((element) => {
        return <Item {...element} key={uuidv4()} />;
      })}
    </ul>
  );
};

export default Transaction;
