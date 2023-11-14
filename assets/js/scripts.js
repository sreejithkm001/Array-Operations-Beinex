// Sample array of students
const students = [
  {
    name: "Ram",
    age: 20,
    department: "IT",
    marks: 85,
    state: "Thrissur",
    student_id: "1001",
  },
  {
    name: "Sam",
    age: 22,
    department: "Maths",
    marks: 75,
    state: "Palakkad",
    student_id: "1002",
  },
  {
    name: "Vishnu",
    age: 21,
    department: "Biology",
    marks: 90,
    state: "Ernakulam",
    student_id: "1003",
  },
  {
    name: "Akash",
    age: 22,
    department: "Maths",
    marks: 95,
    state: "Thrissur",
    student_id: "1004",
  },
  {
    name: "Vyshak",
    age: 21,
    department: "Biology",
    marks: 83,
    state: "Wayanad",
    student_id: "1005",
  },
  {
    name: "Sivan",
    age: 23,
    department: "Maths",
    marks: 77,
    state: "Thrissur",
    student_id: "1006",
  },
  {
    name: "Sahal",
    age: 20,
    department: "IT",
    marks: 85,
    state: "Palakkad",
    student_id: "1007",
  },
];

// Function to display students in the table
function displayStudents(studentArray) {
  const tableBody = document.querySelector("#studentTable tbody");
  tableBody.innerHTML = ""; // Clear existing content

  (studentArray || students).forEach((student) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${student.name}</td><td>${student.age}</td><td>${student.department}</td>
        <td>${student.marks}</td><td>${student.state}</td><td>${student.student_id}</td>`;
    tableBody.appendChild(row);
  });
}

// Function to sort the table
function sortTable() {
  const sortBy = document.getElementById("sort").value;
  const sortedStudents = [...students].sort((a, b) => {
    if (typeof a[sortBy] === "string") {
      return a[sortBy].localeCompare(b[sortBy]);
    } else {
      return a[sortBy] - b[sortBy];
    }
  });
  displayStudents(sortedStudents);
}

// Function to search the table
function searchTable() {
  const searchTerm = document.getElementById("search").value.toLowerCase();
  const filteredStudents = students.filter((student) =>
    Object.values(student).some(
      (value) =>
        typeof value === "string" && value.toLowerCase().includes(searchTerm)
    )
  );
  displayStudents(filteredStudents);
}

// Function to filter the table by minimum mark
function filterByMinMark() {
  const minMark = parseInt(document.getElementById("minMark").value, 10);
  const filteredStudents = students.filter(
    (student) => student.marks >= minMark
  );
  displayStudents(filteredStudents);
}

// Initial display
displayStudents();
