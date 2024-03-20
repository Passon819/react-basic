import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import ReportComponent from "./components/ReportComponent";
import "./App.css";
import { useState } from "react";
import DataContext from "./data/DataContext";

function App() {
  const design = { color: "red", textAlign: "center", fontSize: "1.5em" };
  const initData = [
    { id: 1, title: "ค่าเดินทาง", amount: 5000 },
    { id: 2, title: "เงินเดือน", amount: 26000 },
    { id: 3, title: "ค่ารักษาพยาบาล", amount: 1000 },
    { id: 4, title: "ค่าประกันรถ", amount: 600 },
  ];

  // replace [] in useState for emtry init data.
  const [items, setItems] = useState(initData);

  const onAddNewItem = (newItem) => {
    //console.log("ข้อมูลที่ส้งมาจาก Form Component = ", newItem);
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };

  return (
    <DataContext.Provider value={"longger"}>
      <div className="container">
        <h1 style={design}>แอพบัญชีรายรับ-รายจ่าย</h1>
        <ReportComponent />
        <FormComponent onAddItem={onAddNewItem} />
        <Transaction items={items} />
      </div>
    </DataContext.Provider>
  );
}

export default App;
