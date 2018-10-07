export interface IPerson
{
    name: string;
    family: string;
    nationalCode: string;
    birthDate?: string;
}
export interface IEntity
{
    id:number;
}

export abstract class EmployeeBase implements IPerson, IEntity
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

export class Employee extends EmployeeBase
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

export class SalesEmployee extends EmployeeBase
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