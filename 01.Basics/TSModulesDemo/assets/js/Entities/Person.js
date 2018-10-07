System.register([], function (exports_1, context_1) {
    "use strict";
    var Person;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Person = /** @class */ (function () {
                function Person() {
                    this.Name = "";
                    this.Family = "";
                    this.Age = 0;
                }
                return Person;
            }());
            exports_1("Person", Person);
        }
    };
});
//# sourceMappingURL=Person.js.map