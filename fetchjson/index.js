"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (res) {
    var _a = res.data, id = _a.id, title = _a.title, completed = _a.completed;
    logTodo(id, title, completed);
});
var logTodo = function (id, title, completed) {
    console.log("\n    The todo with id: ".concat(id, "\n    Has a title of: ").concat(title, "\n    Is it finished? ").concat(completed, "\n  "));
};
var today = new Date();
