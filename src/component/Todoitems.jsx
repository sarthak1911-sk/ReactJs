import Todoitem1 from "./Todoitem1";
const Todoitems = ({ todoitem }) => {
  return (
    <>
      <div className="items">
        {todoitem.map((item) => (
          <Todoitem1 name={item.name} date={item.date}></Todoitem1>
        ))}
      </div>
    </>
  );
};
export default Todoitems;
