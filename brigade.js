
const { events, Job } = require("brigadier");
events.on("push", () => {
  var job = new Job("package", "alpine:3.8");
  job.tasks = [
    "echo Hello",
    "echo World",
    "cd src/demo1",
    "ls",
    "sudo docker build -t packageimage:latest ."
  ];


  job.run();
});
