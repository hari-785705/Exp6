const express = require("express");

const app = express();

app.use(express.json());

let students = [
    { id: 1, name: "Ram" },
    { id: 2, name: "Priya" }
];

// GET All Students
app.get("/students", (req, res) => {
    res.json(students);
});

// GET Student by ID
app.get("/students/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(student);

});

// POST Student
app.post("/students", (req, res) => {

    const { id, name } = req.body;

    students.push({ id, name });

    res.json({
        message: "Student Added Successfully"
    });

});

// PUT Student
app.put("/students/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    student.name = req.body.name || student.name;

    res.json({
        message: "Student Updated Successfully",
        student: student
    });

});

// DELETE Student
app.delete("/students/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    students.splice(index, 1);

    res.json({
        message: "Student Deleted Successfully"
    });

});

// Start Server
app.listen(3000, () => {
    console.log("Server Running");
});
