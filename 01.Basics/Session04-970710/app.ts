console.log("Hello");
/*
import IPerson = App.Entities.IPerson;
import Employee = App.Entities.Employee;
import EmployeeService = App.Services.EmployeeService;
import SalesEmployee = App.Entities.SalesEmployee;
*/
import { IPerson, Employee, EmployeeBase, SalesEmployee } from "./App.Entities.js";
import { EmployeeService, IService } from "./App.Services.js";


    var p: IPerson = {
        name: "John",
        family: "Doe",
        nationalCode: "0012345678",
        birthDate: "1350/10/10" 
    };
    
    let employeeService = new EmployeeService();
    let p2 = new Employee("John", "Doe");
    let p3 = new Employee("Reza", "Rezayi");
    let p4 = new SalesEmployee("Ali", "Alian");

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

    for(var i = 0; i < employeeService.getAll().length; i++)
    {
        console.log(employeeService.getAll()[i].getTotalPayment());
    }



    $("#name").html(p2.name);
    $("#family").html(p2.family);
    


