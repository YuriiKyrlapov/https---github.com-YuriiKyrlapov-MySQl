document.addEventListener("DOMContentLoaded", function() {
    // User Info
    const userForm = document.getElementById("userForm");
    const userInfo = document.getElementById("userInfo");
    
    userForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const username = document.getElementById("username").value;
      localStorage.setItem("username", username);
      displayUserInfo();
    });
    
    function displayUserInfo() {
      const storedUsername = localStorage.getItem("username");
      if (storedUsername) {
        userInfo.textContent = `Hello, ${storedUsername}!`;
      } else {
        userInfo.textContent = "Please enter your name.";
      }
    }
    
    displayUserInfo();
    
    // Visits Counter
    let visits = parseInt(localStorage.getItem("visits")) || 0;
    visits++;
    localStorage.setItem("visits", visits);
    document.getElementById("visitCounter").textContent = `You have visited this page ${visits} times.`;
    
    // Task List
    const newTaskInput = document.getElementById("newTask");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
    
    addTaskBtn.addEventListener("click", function() {
      const taskText = newTaskInput.value.trim();
      if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;
        taskList.appendChild(taskItem);
        saveTasks();
        newTaskInput.value = "";
      }
    });
    
    function saveTasks() {
      const tasks = Array.from(taskList.children).map(task => task.textContent);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    
    function loadTasks() {
      const tasks = JSON.parse(localStorage.getItem("tasks"));
      if (tasks) {
        tasks.forEach(task => {
          const taskItem = document.createElement("li");
          taskItem.textContent = task;
          taskList.appendChild(taskItem);
        });
      }
    }
    
    loadTasks();
  });




