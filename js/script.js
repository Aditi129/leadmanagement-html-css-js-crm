document.addEventListener("DOMContentLoaded", function() {
    showContent('dashboard');
});

// Modal functions
function openModal(type) {
    document.getElementById(type + "Modal").style.display = "block";
}

function closeModal(type) {
    document.getElementById(type + "Modal").style.display = "none";
}

// Form submission redirects
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'dashboard.html';
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'dashboard.html';
});

// Smooth scrolling for "About Us" section
document.querySelectorAll('a[href="#about-us"]').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        document.getElementById('about-us').scrollIntoView({ behavior: 'smooth' });
    });
});

// Content switching
function showContent(section) {
    document.querySelectorAll('.content-section').forEach(div => {
        div.style.display = 'none';
    });
    document.getElementById(section).style.display = 'block';
}

// Task management using a table
function addTask() {
    let table = document.getElementById("taskTable");
    let row = table.insertRow();
    
    let taskCell = row.insertCell();
    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter Task Name";
    taskCell.appendChild(input);

    let actionCell = row.insertCell();
    actionCell.innerHTML = `<button onclick="deleteRow(this)">Delete</button>`;
}

function deleteTask() {
    let table = document.getElementById("taskTable");
    if (table.rows.length > 1) { // Ensures the header row is not deleted
        table.deleteRow(table.rows.length - 1);
    }
}

// Row management for tables (Leads, Contacts, Companies)
function addRow(tableId) {
    let table = document.getElementById(tableId);
    let row = table.insertRow();
    for (let i = 0; i < table.rows[0].cells.length - 1; i++) {
        let cell = row.insertCell();
        let input = document.createElement("input");
        input.type = "text";
        cell.appendChild(input);
    }
    let actionCell = row.insertCell();
    actionCell.innerHTML = `<button onclick="deleteRow(this)">Delete</button>`;
}

function deleteRow(btn) {
    let row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
