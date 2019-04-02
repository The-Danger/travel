"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const friends_1 = require("./modules/friends");
const jquerytest_1 = require("./modules/jquerytest");
var dev = new friends_1.Developer("Thomas");
dev.knowsTypeScript = true;
var jquerytest = new jquerytest_1.Jquerytest();
jquerytest.takeAction();
