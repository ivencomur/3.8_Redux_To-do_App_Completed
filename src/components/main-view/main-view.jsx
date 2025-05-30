import { useState } from "react";
import { addTodo, toggleTodo, deleteTodo } from "../../actions";
import { connect } from "react-redux";
function MainView(props) {
  const [todo, setTodo] = useState("");
  const handleAddTodo = () => {
    props.addTodo(todo);
    setTodo("");
  };
  return (
    <div className="main-view">
      Hello Redux
      <br />
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      {props.todos.map((t) => (
        <p>
          {t.text}
          <input
            type="checkbox"
            value={t.completed}
            onChange={() => props.toggleTodo}
          />
        </p>
      ))}
    </div>
  );
}

//allows me to get state as props for my component
const mapStateToProps = (state) => ({
  todos: state,
});

//I can dispatch these actions from my component
const mapDispatchToProps = {
  addTodo,
  toggleTodo,
  deleteTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
