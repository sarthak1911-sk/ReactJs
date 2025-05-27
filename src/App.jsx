import Appname from "./component/Appname";
import Addtodo from "./component/Addtodo";
import Todoitem1 from "./component/todoitem1";
import Todoitem2 from "./component/todoitem2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <Appname></Appname>
      <Addtodo></Addtodo>
      <div className="items">
        <Todoitem1></Todoitem1>
        <Todoitem2></Todoitem2>
      </div>
    </center>
  );
}

export default App;
