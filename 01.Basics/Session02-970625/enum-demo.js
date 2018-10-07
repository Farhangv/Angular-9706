var todoStatus;
(function (todoStatus) {
    todoStatus[todoStatus["compeleted"] = 0] = "compeleted";
    todoStatus[todoStatus["inProgress"] = 1] = "inProgress";
    todoStatus[todoStatus["closed"] = 2] = "closed";
    todoStatus[todoStatus["canceled"] = 3] = "canceled";
})(todoStatus || (todoStatus = {}));
var myStatus = todoStatus.canceled;
console.log(myStatus);
//# sourceMappingURL=enum-demo.js.map