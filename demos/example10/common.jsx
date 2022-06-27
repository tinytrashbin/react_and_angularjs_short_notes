function MainFunc(props) {
  const state = useDictState({
    books: [
      {is_open: false, id: 1},
      {is_open: true, id: 2},
      {is_open: false, id: 3}],
    name: "Book",
  })
  const open = function(book) {
    book.set("is_open", true)
  }
  const close = function(book) {
    book.set("is_open", false)
  }
  return (
    <div>
      {state.get("books").map(book => (
        <div style={{border: "solid #ccc 1px", margin: "10px"}} >
          Book-{book.get("id")}
          <div>
            {book.get("is_open") &&
              <img src="https://thumbs.dreamstime.com/z/open-book-vector-icon-white-background-53193927.jpg"
                  style={{width: "40px"}} />}
            {!book.get("is_open") &&
              <img src="https://image.shutterstock.com/image-vector/closed-book-bookmark-icon-vector-260nw-1438430336.jpg"
                  style={{width: "40px"}} />}
          </div>
          <div>
            <button onClick={()=>open(book)} >Open</button>
            <button onClick={()=>close(book)} >Close</button>
          </div>
        </div>
        ))}
    </div>
  );
}
