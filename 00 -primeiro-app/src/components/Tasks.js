import { useState, useEffect } from "react";

function Tasks() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState(["Esta é uma task teste"]);

  // GET local storage
  useEffect(() => {
    const localTasks = localStorage.getItem("@tasks");

    if (localTasks && tasks !== []) setTasks(JSON.parse(localTasks));
  }, []);

  // save task list change to local storage
  useEffect(() => {
    localStorage.setItem("@tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(e) {
    e.preventDefault();

    if (input !== "") setTasks([...tasks, input]);
    setInput("");
  }

  function removeTask(e, testTask) {
    e.preventDefault();

    if (tasks) setTasks((tasks) => tasks.filter((tasks) => tasks !== testTask));
  }

  function clearTaskList(e) {
    e.preventDefault();

    setTasks([]);
    localStorage.removeItem("@tasks");
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
      <div onClick={clearTaskList}>
        <button type="submit">Limpar lista</button>
      </div>
      <ul className="tasks tasks__ul task-list">
        {tasks.map((tarefa, index) => (
          <li key={index} className="task task__item item">
            {tarefa}
            <button
              key={index}
              type="submit"
              onClick={(e, index) => removeTask(e, tarefa)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Tasks;
