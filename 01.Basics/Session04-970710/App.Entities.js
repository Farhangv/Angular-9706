export class EmployeeBase {
    constructor(name, family) {
        this.name = name;
        this.family = family;
    }
    /*getTotalPayment():number
    {
        return this.rate * this.workingHours;
    }*/
    get nationalCode() {
        return this._nationalCode;
    }
    set nationalCode(_nationalCode) {
        if (_nationalCode.length === 10)
            this._nationalCode = _nationalCode;
        else
            alert('لطفا کد ملی را صحیح وارد کنید');
    }
}
export class Employee extends EmployeeBase {
    /*
    constructor()
    {
        //super()
    }
    */
    getTotalPayment() {
        return this.rate * this.workingHours;
    }
}
export class SalesEmployee extends EmployeeBase {
    get percentage() {
        return this._percentage;
    }
    set percentage(_percentage) {
        if (_percentage <= 1 && _percentage >= 0)
            this._percentage = _percentage;
        else
            alert('مبلغ پورسانت درست وارد نشده');
    }
    getTotalPayment() {
        return (this.rate * this.workingHours) + (this.totalSales * this.percentage);
    }
}
//# sourceMappingURL=App.Entities.js.map