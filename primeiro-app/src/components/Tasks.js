import { useState, useEffect } from "react";

function Tasks() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const localTasks = localStorage.getItem("@tasks");

    if (localTasks) {
      setTasks(JSON.parse(localTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("@tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(e) {
    e.preventDefault();

    setTasks([...tasks, input]);
    setInput("");
  }

  return (
    <section className="tasks__sect container parent__row">
      <h1 className="tasks__title title">Lista de Tarefas</h1>
      <form className="input-tasks__form" onSubmit={addTask}>
        <span>Nome da tarefa: </span>
        <input
          type="text"
          placeholder="Digite aqui a tarefa"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
        <button type="submit">Adicionar tarefa</button>
      </form>
      <ul className="tasks tasks__ul task-list">
        {tasks.map((tarefa) => (
          <li key={tarefa} className="task task__item item">
            {tarefa}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Tasks;
