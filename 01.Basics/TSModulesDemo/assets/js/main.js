System.register(["./Entities/Person"], function (exports_1, context_1) {
    "use strict";
    var Person_1, p;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Person_1_1) {
                Person_1 = Person_1_1;
            }
        ],
        execute: function () {
            p = new Person_1.Person();
            p.Name = "John";
            p.Family = "Doe";
            $(function () {
                $('#content').html(p.Name + " " + p.Family);
            });
        }
    };
});
//# sourceMappingURL=main.js.map