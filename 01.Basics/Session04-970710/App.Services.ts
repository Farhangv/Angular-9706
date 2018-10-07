import {IEntity, EmployeeBase} from "./App.Entities.js";

export interface IService<T extends IEntity>
{
    getAll():T[];
    add(newObject:T);
    remove(objectToRemove:IEntity);
    edit(editedObject:T);
}

export class EmployeeService implements IService<EmployeeBase>
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