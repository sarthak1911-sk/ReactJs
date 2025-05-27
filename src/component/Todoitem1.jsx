export default function todoitem1() {
  let name = "Buy Milk";
  let date = "26/5/2025";
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
