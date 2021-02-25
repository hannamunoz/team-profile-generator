const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber){
        this.officeNumber = officeNumber;
        this.title = "Manager"
    };

    getNumber() {
        return this.officeNumber;
    };

    getRole() {
        return this.title;
    };
}

module.exports = Manager;