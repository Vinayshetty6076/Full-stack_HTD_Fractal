const STORAGE_KEY = "todo.tasks.v1";
const loadTasks = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
};
const saveTasks = (tasks) =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));

let tasks = loadTasks();

const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

function render() {
  list.innerHTML = "";
  tasks.forEach((t) => {
    const li = document.createElement("li");
    if (t.done) li.classList.add("done");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = !!t.done;
    checkbox.title = "Mark as done";
    checkbox.addEventListener("change", () =>
      toggleDone(t.id, checkbox.checked)
    );

    const text = document.createElement("span");
    text.className = "task-text";
    text.textContent = t.title;

    const status = document.createElement("span");
    status.className = "status";
    status.textContent = "Done";

    const removeBtn = document.createElement("button");
    removeBtn.className = "remove";
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => removeTask(t.id));

    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(removeBtn);
    li.appendChild(status);

    list.appendChild(li);
  });
}

function addTask(title) {
  const trimmed = title.trim();
  if (!trimmed) return;

  const newTask = {
    id: crypto.randomUUID
      ? crypto.randomUUID()
      : String(Date.now() + Math.random()),
    title: trimmed,
    done: false,
    createdAt: Date.now(),
  };
  tasks.push(newTask);
  saveTasks(tasks);
  render();

  const lastLi = list.lastElementChild;
  if (lastLi) {
    const text = lastLi.querySelector(".task-text");
    text.classList.add("added");
    setTimeout(() => text.classList.remove("added"), 900);
  }

  input.value = "";
  input.focus();
}

function toggleDone(id, checked) {
  const t = tasks.find((x) => x.id === id);
  if (!t) return;
  t.done = checked;
  saveTasks(tasks);
  render();
}

function removeTask(id) {
  tasks = tasks.filter((t) => t.id !== id);
  saveTasks(tasks);
  render();
}

addBtn.addEventListener("click", () => addTask(input.value));
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask(input.value);
});

render();
