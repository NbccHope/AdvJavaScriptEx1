const fs = require("fs");
const path = require("path");

try {
    const studentData = fs.readFileSync("data/students.json");
    //console.log(studentData);

    const students = JSON.parse(studentData);

    //Truthify
    const hasStudent = !!students.length; // this would give a truth or false
    const hasStudents = students.length; // this would give an integer

    console.log(hasStudent);
    console.log(hasStudents);


    //check if there is data before filtering
    if (students.length) {
        // filter
        const registrationStudents = students.filter(
            (s) => s.isSenior && s.courseId === "A112",
        );

        if (registrationStudents.length) {
            fs.writeFileSync(
                "data/registration.json",
                JSON.stringify(registrationStudents, null, 5),
            );

            if (!fs.existsSync("backup")) fs.mkdirSync("backup");

            //hard-coded path
            //fs.copyFileSync("data/students.json", "backup/students.json");

            // better format for coding path instead of hard-coding
            fs.copyFileSync(
                path.join("data", "students.json"),
                path.join("backup", "students.json"),
            );

            fs.unlinkSync(path.join("data", "students.json"));

        } else {
            console.log("No Students found for filter");

        }
    } else {
        console.log("No students found");
    }
} catch (error) {
    console.log(error.message);
}

//Difference between JSON.parse and JSON.stringify
//Answer is available when you hover on each method