const express = require("express");
const app = express();
const port = 4000;

const users = [
  {
    name: "M1",
    type: "mentor",
    id: 0,
  },
  {
    name: "HOD",
    type: "hod",
    id: 1,
  },
  {
    name: "S1",
    type: "student",
    id: 2,
  },
  {
    name: "S2",
    type: "student",
    id: 3,
  },
  {
    name: "S3",
    type: "student",
    id: 4,
  },
  {
    name: "S4",
    type: "student",
    id: 5,
  },
  {
    name: "S5",
    type: "student",
    id: 6,
  },
  {
    name: "S6",
    type: "student",
    id: 7,
  },
  {
    name: "M2",
    type: "mentor",
    id: 8,
  },
  {
    name: "S7",
    type: "student",
    id: 9,
  },
];

const pass = [
  "pass1",
  "pass2",
  "pass3",
  "pass4",
  "pass5",
  "pass6",
  "pass7",
  "pass8",
  "pass9",
  "pass10",
];

const teams = [
  {
    no: 1,
    mentor: 0,
    members: [2, 4, 6],
    tasks: [
      {
        name: "task1",
        due: "03-06-2022",
        status: "pending",
        assignees: [6, 2],
        projectId: 1,
      },
      {
        name: "task2",
        due: "03-06-2022",
        status: "completed",
        assignees: [4, 2],
        projectId: 1,
      },
      {
        name: "task3",
        due: "02-06-2022",
        status: "overdue",
        assignees: [2, 4, 6],
        projectId: 2,
      },
      {
        name: "task3",
        due: "05-06-2022",
        status: "completed",
        assignees: [4],
        projectId: 2,
      },
    ],
    projects: [
      {
        title: "project1",
        statement: "statement1",
        id: 0,
      },
      {
        title: "project2",
        statement: "statement2",
        id: 2,
      },
    ],
  },
  {
    no: 2,
    mentor: 8,
    members: [1, 3, 5, 7],
    // tasks: [
    //   {
    //     name: "task-1",
    //     due: "03-06-2022",
    //     status: "pending",
    //     assignees: [1, 3, 5],
    //   },
    //   {
    //     name: "task-2",
    //     due: "03-06-2022",
    //     status: "completed",
    //     assignees: [1, 7],
    //   },
    // ],
  },
];

const proposals = [
  {
    title: "proposal1",
    description: "description1",
    upVotes: 2,
    comments: [
      {
        comment: "comment1",
        by: 0,
      },
      {
        comment: "comment2",
        by: 8,
      },
    ],
    teamId: 1,
    queries: "dku hdjy gduyg dj du fytdjbkduy du",
  },
  {
    title: "proposal2",
    description: "description2",
    upVotes: 1,
    comments: [
      {
        comment: "comment3",
        by: 1,
      },
    ],
    teamId: 1,
  },
  {
    title: "proposal-1",
    description: "description-1",
    upVotes: 2,
    comments: [
      {
        comment: "comment-1",
        by: 0,
      },
    ],
    teamId: 2,
    queries: "dkugdkjdbjdg uduy gduy udy gudyg duy gduy dyt ",
  },
];

function findProject(id, projects) {
  return projects.find((project) => project.id === id);
}

function groupTasks(tasks, projects) {
  tasks = tasks.map((task) => {
    task.project = findProject(task.projectId, projects);
    return task;
  });

  tasks = {
    pending: tasks.filter((task) => task.status === "pending"),
    completed: tasks.filter((task) => task.status === "completed"),
    overdue: tasks.filter((task) => task.status === "overdue"),
  };

  Object.keys(tasks).forEach((key) => {
    tasks[key] = tasks[key].map((task) => {
      task.assignees = task.assignees.map((assignee) => findUser(assignee));
      return task;
    });
  });

  return tasks;
}

function findUser(id) {
  return users.find((user) => user.id === id);
}

// get team based on user id and replace mentor id with mentor name and members with users
function findTeam(id) {
  const team = teams.find((team) => team.members.includes(id));
  team.mentor = findUser(team.mentor);
  team.tasks = groupTasks(team.tasks, team.projects);
  team.members = team.members.map((member) => findUser(member));
  return team;
}

// retrieve user data
app.get("/users/:name/:password", (req, res) => {
  let name = req.params.name;
  let password = req.params.password;

  let user = users.find((user) => user.name === name);

  if (user) {
    if (pass[user.id] === password) {
      switch (user.type) {
        case "mentor":
          res.send({ user });
          break;

        case "hod":
          break;

        case "student":
          let team = findTeam(user.id);
          if (team) res.send({ user, team });
          else res.send({ user });
          break;
      }
    } else {
      res.send({ error: `Incorrect password for ${user.name}` });
    }
  } else {
    res.send({ error: `Username ${name} not found` });
  }
});

app.get("/proposals", (req, res) => {
  res.send({ proposals });
});

// listen to the port
app.listen(port, () => {
  console.log(
    `
PBL Project Page
Server running at http://localhost:${port}
`
  );
});
