"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var page1 = require("./page1");
var person = new person_1.Person('person1', 'pune', 10);
person.printInfo();
person.canVote();
page1.add(100, 200);
