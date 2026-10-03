"use strict"

function runCommand(cmd) {

    switch (cmd.toLowerCase()) {
        case "start":
            return "Starting...";
        case "stop":
            return "Stopping...";
        case "pause":
            return "Pausing...";
        case "resume":
            return "Resuming...";
        default:
            return "Unknown command";
    }
}
console.log(runCommand("start"));
console.log(runCommand("PAUSE"));
console.log(runCommand("kiss"));