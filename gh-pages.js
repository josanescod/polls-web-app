var ghpages = require("gh-pages");

ghpages.publish(
  "public", // path to public directory
  {
    branch: "gh-pages",
    repo: "https://github.com/josanescod/polls-web-app.git", // Update to point to your repository
    user: {
      name: "josanescod", // update to use your name
      email: "josanescod@gmail.com", // Update to use your email
    },
    dotfiles: true,
  },
  () => {
    console.log("Deploy Complete!");
  }
);
