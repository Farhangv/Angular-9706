var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var p = {
    name: "John",
    family: "Doe",
    nationalCode: "0012345678",
    birthDate: "1350/10/10"
};
var EmployeeBase = /** @class */ (function () {
    function EmployeeBase(name, family) {
        this.name = name;
        this.family = family;
    }
    Object.defineProperty(EmployeeBase.prototype, "nationalCode", {
        /*getTotalPayment():number
        {
            return this.rate * this.workingHours;
        }*/
        get: function () {
            return this._nationalCode;
        },
        set: function (_nationalCode) {
            if (_nationalCode.length === 10)
                this._nationalCode = _nationalCode;
            else
                alert('لطفا کد ملی را صحیح وارد کنید');
        },
        enumerable: true,
        configurable: true
    });
    return EmployeeBase;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /*
    constructor()
    {
        //super()
    }
    */
    Employee.prototype.getTotalPayment = function () {
        return this.rate * this.workingHours;
    };
    return Employee;
}(EmployeeBase));
var SalesEmployee = /** @class */ (function (_super) {
    __extends(SalesEmployee, _super);
    function SalesEmployee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SalesEmployee.prototype, "percentage", {
        get: function () {
            return this._percentage;
        },
        set: function (_percentage) {
            if (_percentage <= 1 && _percentage >= 0)
                this._percentage = _percentage;
            else
                alert('مبلغ پورسانت درست وارد نشده');
        },
        enumerable: true,
        configurable: true
    });
    SalesEmployee.prototype.getTotalPayment = function () {
        return (this.rate * this.workingHours) + (this.totalSales * this.percentage);
    };
    return SalesEmployee;
}(EmployeeBase));
var EmployeeService = /** @class */ (function () {
    function EmployeeService() {
        this.employees = [];
    }
    EmployeeService.prototype.remove = function (objectToRemove) {
        throw new Error("Method not implemented.");
    };
    EmployeeService.prototype.edit = function (editedObject) {
        throw new Error("Method not implemented.");
    };
    EmployeeService.prototype.getAll = function () {
        return this.employees;
    };
    EmployeeService.prototype.add = function (_employee) {
        this.employees.push(_employee);
    };
    return EmployeeService;
}());
(function () {
    var employeeService = new EmployeeService();
    var p2 = new Employee("John", "Doe");
    var p3 = new Employee("Reza", "Rezayi");
    var p4 = new SalesEmployee("Ali", "Alian");
    //let p5 = new EmployeeBase();
    p2.rate = 20000;
    p2.workingHours = 10;
    p3.rate = 30000;
    p3.workingHours = 10;
    p4.rate = 10000;
    p4.workingHours = 40;
    p4.percentage = 0.2;
    p4.totalSales = 1000000;
    employeeService.add(p2);
    employeeService.add(p3);
    employeeService.add(p4);
    for (var i = 0; i < employeeService.getAll().length; i++) {
        console.log(employeeService.getAll()[i].getTotalPayment());
    }
})();
//# sourceMappingURL=app.js.map