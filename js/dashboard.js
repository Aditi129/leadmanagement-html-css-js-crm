document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".sidebar a");
    const sections = document.querySelectorAll(".section");
  
    navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = link.getAttribute("data-target");
  
        // Show the selected section
        sections.forEach(sec => {
          sec.style.display = sec.id === target ? "block" : "none";
        });
  
        // Highlight active link
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      });
    });
  
    // Default show Dashboard
    document.querySelector(".sidebar a[data-target='dashboard']").click();
  
    // Add Task Logic
    document.getElementById("addTaskBtn")?.addEventListener("click", () => {
      const taskInput = document.getElementById("taskInput");
      const taskList = document.getElementById("taskList");
  
      if (taskInput.value.trim()) {
        const li = document.createElement("li");
        li.textContent = taskInput.value;
        taskList.appendChild(li);
        taskInput.value = "";
      }
    });
  });
  