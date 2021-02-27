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
            name: teamname
        }
    ]) .then(function(data) {
            const teamName = data.teamname
            teamArray.push(teamName)
            addManager();
    });
}


function addManager() {
    inquirer.prompt([
        {
            message: "What is the name of the team manager?",
            name: "managerName"
        },
        {
            message: "What is the manager's email address?",
            name: "managerEmail"
        },
        {
            message: "What is the manager's office number?",
            name: "officeNumber"
        }
    ]) .then(function(data) {
        const name = data.managerName;
        const id = 1;
        const email = data.managerEmail;
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
    ]) . then(function(datd) {
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
            name: "engineerName"
        },
        {
            message:"What is the engineer's email address?",
            name: "engineerEmail"
        },
        {
            message: "What is the engineer's github?",
            name: "engineerGithub"
        }
    ]).then(function(data) {
        const name = this.name;
        const id = teamArray.length + 1;
        const email = this.engineerEmail;
        const github = this.engineerGithub;
        const teamMember = new Engineer(name, id, email, github);
        teamArray.push(teamMember);
        addTeamMembers();
    });
}

function addIntern() {
    inquirer.prompt([
        {
            message: "What is the intern's name?",
            name: "internName"
        },
        {
            message: "What is the intern's email?",
            name: "internEmail"
        },
        {
            message: "What school does the intern attend?",
            name: "internSchool"   
        }
    ]).then(function(data) {
        const name = this.internName;
        const id = teamArray.length + 1;
        const email = this.internEmail;
        const school = this.internSchool;
        const teamMember = new Intern(name, id, email, school);
        teamArray.push(teamMember);
        addTeamMembers();
    });
}

function formTeam() {
    console.log("Team created, great work");

    const webArray = [];
    const wesiteHtml = `
    
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${teamArray[0]}<title>
</head>
    

<body>
    



</body>
    `
}