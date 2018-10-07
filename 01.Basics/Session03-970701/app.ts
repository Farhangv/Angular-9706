interface IPerson
{
    name: string;
    family: string;
    nationalCode: string;
    birthDate?: string;
}
interface IEntity
{
    id:number;
}

var p: IPerson = {
    name: "John",
    family: "Doe",
    nationalCode: "0012345678",
    birthDate: "1350/10/10" 
};

abstract class EmployeeBase implements IPerson, IEntity
{
    id: number;
    private _nationalCode: string;
    public birthDate: string;
    public rate:number;
    public workingHours:number;
    constructor(public name:string, public family:string)
    {
    }
    abstract getTotalPayment():number;
    /*getTotalPayment():number
    {
        return this.rate * this.workingHours;
    }*/


    get nationalCode()
    {
        return this._nationalCode;
    }
    set nationalCode(_nationalCode:string)
    {
        if(_nationalCode.length === 10)
            this._nationalCode = _nationalCode;
        else
            alert('لطفا کد ملی را صحیح وارد کنید');
    }
}

class Employee extends EmployeeBase
{
    /*
    constructor()
    {
        //super()
    }
    */
   getTotalPayment():number
   {
        return this.rate * this.workingHours;
   }
}

class SalesEmployee extends EmployeeBase
{
    public totalSales:number;
    private _percentage:number;

    get percentage(){
        return this._percentage;
    }
    set percentage(_percentage:number)
    {
        if(_percentage <= 1 && _percentage >= 0)
            this._percentage = _percentage;
        else
            alert('مبلغ پورسانت درست وارد نشده');
    }

    getTotalPayment():number
    {
        return (this.rate * this.workingHours)+ (this.totalSales * this.percentage);
    }
    
}

interface IService<T extends IEntity>
{
    getAll():T[];
    add(newObject:T);
    remove(objectToRemove:IEntity);
    edit(editedObject:T);
}

class EmployeeService implements IService<EmployeeBase>
{
    remove(objectToRemove: IEntity):void {
        throw new Error("Method not implemented.");
    }
    edit(editedObject: EmployeeBase):void {
        throw new Error("Method not implemented.");
    }

    private employees: EmployeeBase[] = [];


    getAll():EmployeeBase[]{
        return this.employees;
    }
    add(_employee: EmployeeBase):void
    {
        this.employees.push(_employee);
    }
 }

(function(){
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
})();

