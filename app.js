const fs = require("fs");
/**
 * Name : Hope Abraham
 * Class: A3126
 * Course: Advanced JS
 */
const students = [
    { id: 1, firstName: "Dylan", lastName: "Gamble", isSenior: true, courseId: "A112" },
    { id: 2, firstName: "Anne", lastName: "Greene", isSenior: true, courseId: "A112" },
    { id: 3, firstName: "Sam", lastName: "Wilson", isSenior: false },
    { id: 4, firstName: "Robert", lastName: "Probert", isSenior: true, courseId: "A113" },
    { id: 5, firstName: "Jane", lastName: "Killam", isSenior: true, courseId: "A112" },
    { id: 6, firstName: "Chris", lastName: "Cusack", isSenior: true, courseId: "A999" },
];

//console.log(__dirname);

if (!fs.existsSync("data")) {
    fs.mkdirSync("data")
} else {
    console.log("data folder already exists");
}


// convert js data/value to json
fs.writeFileSync("data/students.json", JSON.stringify(students, null, 2))

fs.writeFileSync("data/students.json", JSON.stringify(students,
    (key, value) => {

        if (typeof value === 'object' && value != null) {
            if (!("courseId" in value)) {
                value.courseId = "NA";
            }
        }
        return value;
    },
    2,
),
);


if (fs.existsSync("data")) {
    fs.renameSync("data", "datasource");
}
