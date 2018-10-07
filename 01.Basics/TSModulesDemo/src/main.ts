import { Person } from './Entities/Person';

let p:Person = new Person();
p.Name = "John";
p.Family = "Doe";

$(function(){
    $('#content').html(`${p.Name} ${p.Family}`);
    
});