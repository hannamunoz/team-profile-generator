const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let teamArray = [];

function startPrompt() {
    inquirer.prompt([
        {
            message: "Please Enter Your Team Name: ",
            name: "teamname"
        }
    ]).then(function (data) {
        const teamName = data.teamname
        teamArray.push(teamName)
        addManager();
    });
}


function addManager() {
    inquirer.prompt([
        {
            message: "What is the name of the team manager?",
            name: "name"
        },
        {
            message: "What is the manager's email address?",
            name: "email"
        },
        {
            message: "What is the manager's office phone number?",
            name: "officeNumber"
        }
    ]).then(function (data) {
        const name = data.name;
        const id = 1;
        const email = data.email;
        const officeNumber = data.officeNumber;
        const teamMember = new Manager(name, id, email, officeNumber);

        teamArray.push(teamMember);
        addTeamMembers();
    });
}

function addTeamMembers() {
    inquirer.prompt([
        {
            type: "list",
            message: "Add more team members?",
            choices: ["Yes, add an engineer", "Yes, add an intern", "No, team is complete"],
            name: "memberData"
        }
    ]).then(function (data) {
        switch (data.memberData) {
            case "Yes, add an engineer":
                addEngineer();
                break;
            case "Yes, add an intern":
                addIntern();
                break;
            case "No, team is complete":
                formTeam();
                break;
        }
    });
}

function addEngineer() {
    inquirer.prompt([
        {
            message: "What is the engineer's name?",
            name: "name"
        },
        {
            message: "What is the engineer's email address?",
            name: "email"
        },
        {
            message: "What is the engineer's github?",
            name: "github"
        }
    ]).then(function (data) {
        const name = data.name;
        const id = teamArray.length + 1;
        const email = data.email;
        const github = data.github;
        const teamMember = new Engineer(name, id, email, github);
        teamArray.push(teamMember);
        addTeamMembers();
    });
}

function addIntern() {
    inquirer.prompt([
        {
            message: "What is the intern's name?",
            name: "name"
        },
        {
            message: "What is the intern's email?",
            name: "email"
        },
        {
            message: "What school does the intern attend?",
            name: "school"
        }
    ]).then(function (data) {
        const name = data.name;
        const id = teamArray.length + 1;
        const email = data.email;
        const school = data.school;
        const teamMember = new Intern(name, id, email, school);
        teamArray.push(teamMember);
        addTeamMembers();
    });
}

function formTeam() {
    console.log("Team created, great work");

    const webArray = [];
    const websiteHtml = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>${teamArray[0]}</title>
</head>
    

<body>
    <div class="header">
        <h1>${teamArray[0]}</h1>
    </div>

<div class="container"> `

    webArray.push(websiteHtml);

    for (let i = 1; i < teamArray.length; i++) {
        let obj = `


    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${teamArray[i].name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${teamArray[i].title}</h6>
            <p class="card-text">Employee ID: ${teamArray[i].id}</p>
            <p class="card-text">Email: <a href="mailto:${teamArray[i].email}">${teamArray[i].email}</a></p>
        `

        if (teamArray[i].officeNumber) {
            obj += `
            <p>${teamArray[i].officeNumber}</p>
        `
        }
        if (teamArray[i].github) {
            obj += `
            <p>Github: <a href="https://github.com/${teamArray[i].github}">${teamArray[i].github}</a></p>
        `
        }
        if (teamArray[i].school) {
            obj += `
            <p>School: ${teamArray[i].school}</p>
        `
        }
        obj += `
        
        </div>
    </div>
`
        webArray.push(obj)
    }

    const webEnd = `

</div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
</body>
</html>
    `
    webArray.push(webEnd);
    fs.writeFile(`./generate/${teamArray[0]}.html`, webArray.join(""), function (err) {

    })

}

startPrompt();