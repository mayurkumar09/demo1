
const { events, Job } = require("brigadier");
events.on("push", () => {
  var job = new Job("package", "docker:dind");
  job.tasks = [
    "echo Hello",
    "echo World",
    "cd /src/image-processing",
    "ls",
//    "docker build -t packageimage:latest ."
  ];


  job.run();
});
