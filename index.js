"use strict";

// Imports
const { Server } = require("@pinechat/pine.js").server.structures;

// Variables
let server = new Server(require("./config.json"));

// Events
server
    .on("start", () => console.log(`${time()} | Server is online at ${server.address}`))
    .on("join", user => console.log(`${time()} | ${user.username} has joined the server!`))
    .on("leave", user => console.log(`${time()} | ${user.username} left the server!`))
    .on("message", message => console.log(`${time()} | ${message.user.username} > ${message.content}`))
    .on("error", () => {})

// Functions
function time(ms = Date.now()) {
    let date = new Date();
    return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
};

function pad(v) {
    return `${v}`.padStart(2, "0");
};

// Starts
server.start();