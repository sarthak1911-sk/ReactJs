function Todoitem1({ name, date }) {
  return (
    <div class="container ">
      <div class="row">
        <div class="col-6">{name}</div>
        <div class="col-4">{date}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger sk-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todoitem1;
