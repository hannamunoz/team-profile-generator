const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(github) {
        this.github = github;
        this.title = "Engineer"
    };

    getGithub() {
        return this.github;
    };

    getRole() {
        return this.title;
    };
}


module.exports = Engineer;