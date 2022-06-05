function ToDoList() {
  return (
    <form id="toDoList">
      <div id="label">
        <h1>TO DO LIST</h1>
      </div>

      <br></br>
      <div id="inputHead">
        <h2 style={{ marginLeft: 70 }}>ADD TODO</h2>
        <input id="add" type="text"></input> <br></br>
        <button
          type="button"
          className="btn btn-primary"
          style={{ marginTop: 10, marginLeft: 70 }}>
          SUBMIT
        </button>
      </div>
      <br></br>

      <div id="todo-lists" className="col-sm-12 bg-white p-3 border">
        Complete the react course
        <div id="button-div">
        <button id="delButtons"><span class="material-icons" style={{color:"red"}}>close</span></button>
        </div>
        <div id="button-div1"><button id="addButtons"><span class="material-icons" style={{color:"green"}}>done</span></button></div>
      </div>

      <div id="todo-lists" className="col-sm-12 bg-white p-3 border">
        Get started with node js
        <div id="button-div"><button id="delButtons"><span class="material-icons" style={{color:"red"}}>close</span></button></div>
        <div id="button-div1"><button id="addButtons"><span class="material-icons" style={{color:"green"}}>done</span></button></div>
      </div>
      <div id="todo-lists" className="col-sm-12 bg-white p-3 border">
        Polish DS and Algorithms concepts
        <div id="button-div"><button id="delButtons"><span class="material-icons" style={{color:"red"}}>close</span></button></div>
        <div id="button-div1"><button id="addButtons"><span class="material-icons" style={{color:"green"}}>done</span></button></div>
      </div>
      <div id="todo-lists" className="col-sm-12 bg-white p-3 border">
        Test this app
        <div id="button-div"><div><button id="delButtons"><span class="material-icons" style={{color:"red"}}>close</span></button></div></div>
        <div id="button-div1"><button id="addButtons"><span class="material-icons" style={{color:"green"}}>done</span></button></div>
      </div>
    </form>
  );
}

ReactDOM.render(<ToDoList/>, document.getElementById("container"));
