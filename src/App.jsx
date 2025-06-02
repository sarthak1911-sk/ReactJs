import Appname from "./component/Appname";
import Addtodo from "./component/Addtodo";
import Todoitems from "./component/Todoitems";
import "./App.css";
function App() {
  const todoitem = [
    {
      name: "buy milk",
      date: "2/3/2025",
    },
    { name: "go to college", date: "2/3/2025" },
  ];
  return (
    <center className="todo-container">
      <Appname></Appname>
      <Addtodo></Addtodo>
      <Todoitems todoitem={todoitem}></Todoitems>
    </center>
  );
}

export default App;
