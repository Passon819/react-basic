import Transaction from "./components/Transaction";

const Description = () => <p>บันทึกข้อมูลบัญชีในแต่ละวันของคุณ</p>;

function App() {
  return (
    <div>
      <h1>แอพบัญชีรายรับ-รายจ่าย</h1>
      <Description />
      <Transaction />
    </div>
  );
}

export default App;
