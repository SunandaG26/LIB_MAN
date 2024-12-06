// Dummy Users
const users = [
    { username: "admin", password: "admin123", role: "admin" },
    { username: "user", password: "user123", role: "user" },
  ];
  
  // Login Validation
  document.getElementById("loginForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
      const dashboard = user.role === "admin" ? "admin-dashboard.html" : "user-dashboard.html";
      window.location.href = dashboard;
    } else {
      document.getElementById("errorMessage").textContent = "Invalid credentials!";
    }
  });
  
  // Add Book Validation
  document.getElementById("addBookForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("bookTitle").value;
    const author = document.getElementById("bookAuthor").value;
  
    if (!title || !author) {
      document.getElementById("errorMsg").textContent = "All fields are mandatory.";
    } else {
      alert("Book added successfully!");
    }
  });
  