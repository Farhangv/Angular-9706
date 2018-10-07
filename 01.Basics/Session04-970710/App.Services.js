export class EmployeeService {
    constructor() {
        this.employees = [];
    }
    remove(objectToRemove) {
        throw new Error("Method not implemented.");
    }
    edit(editedObject) {
        throw new Error("Method not implemented.");
    }
    getAll() {
        return this.employees;
    }
    add(_employee) {
        this.employees.push(_employee);
    }
}
//# sourceMappingURL=App.Services.js.map