let underLine = document.getElementById('under-line');
let menus = document.querySelectorAll('.tab');

let taskInput = document.getElementById('task-input');
let addButton = document.getElementById('add-button');
let tabs = document.querySelectorAll('.task-tabs div');
let taskList = [];
let mode = 'all';
let filterList = [];

menus.forEach((menu) => menu.addEventListener('click', (e) => indicator(e)));
addButton.addEventListener('click', addTask);

const indicator = (e) => {
  underLine.style.left = e.currentTarget.offsetLeft + 'px';
  underLine.style.width = e.currentTarget.offsetWidth + 'px';
  underLine.style.top = e.currentTarget.offsetTop + (e.currentTarget.offsetHeight - 4) + 'px';
};

for (let i = 1; i < tabs.length; i++) {
  tabs[i].addEventListener('click', function (event) {
    filter(event);
  });
}

const addTask = () => {
  let taskValue = taskInput.value;
  if (taskValue === '') return alert('할 일을 입력해주세요~');

  let task = {
    id: randomIDGenerate(),
    taskContent: taskInput.value,
    isComplete: false,
  };
  taskList.push(task);
  console.log(taskList);
  render();
  taskInput.value = '';
};

const render = () => {
  // 1. 내가 선택한 탭에 따라서
  let list = [];
  if (mode === 'all') {
    list = taskList;
  } else if (mode === 'ongoing' || mode === 'done') {
    list = filterList;
  }
  // 2. 리스트를 달리 보여준다.
  // all  => taskList
  // ongoing, done  => filterList
  let resultHTML = '';
  for (let i = 0; i < list.length; i++) {
    if (list[i].isComplete == true) {
      resultHTML += `
      <div class="task task-complete" id="${list[i].id}">
     <div class="task-done">${list[i].taskContent}</div>
      <div >
        <button class="tab-button" onclick="toggleComplete('${list[i].id}')">
          <i class="fa-solid fa-rotate-right fa-spin" ></i>
        </button>
        <button class="tab-button" onclick="deleteTask('${list[i].id}')">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
  </div>
      `;
    } else {
      resultHTML += `
    <div class="task" id="${list[i].id}">
     <div>${list[i].taskContent}</div>
     <div>
      <button class="tab-button" onclick="toggleComplete('${list[i].id}')">
        <i class="fa-solid fa-check"></i>
      </button>
      <button class="tab-button" onclick="deleteTask('${list[i].id}')">
        <i class="fa-solid fa-trash"></i>
      </button>
     </div>
  </div>`;
    }
  }

  document.getElementById('task-board').innerHTML = resultHTML;
};

const toggleComplete = (id) => {
  for (let i = 0; taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  console.log(taskList);
  filter();
};

const randomIDGenerate = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};

const deleteTask = (id) => {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList.splice(i, 1);
      break;
    }
  }
  filter();
};

const filter = (event) => {
  if (event) {
    mode = event.target.id;
  }
  filterList = [];

  if (mode === 'ongoing') {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete === false) {
        filterList.push(taskList[i]);
      }
    }
  } else if (mode === 'done') {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete === true) {
        filterList.push(taskList[i]);
      }
    }
  }
  render();
};

const enterKey = () => {
  if (window.event.keyCode == 13) {
    // 엔터키가 눌렸을 때
    addTask();
  }
};
