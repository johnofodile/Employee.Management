const form = document.getElementById("employeeForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: form.name.value,
    email: form.email.value,
    department: form.department.value,
    role: form.role.value
  };

  // ✅ Moved inside the async function
  await fetch("http://localhost:5000/api/employees", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  location.reload(); // ✅ Still inside the function
});
