const express = require('express')
const app = express()
const port = 4000

const users = [
    {
        name: "rajM1",
        type: "mentor",
        id: 0
    },
    {
        name: "tej",
        type: "hod",
        id: 1
    },
    {
        name: "raj2",
        type: "student",
        id: 2
    },
    {
        name: "raj3",
        type: "student",
        id: 3
    },
    {
        name: "raj4",
        type: "student",
        id: 4
    },
    {
        name: "raj5",
        type: "student",
        id: 5
    },
    {
        name: "raj6",
        type: "student",
        id: 6
    },
    {
        name: "raj7",
        type: "student",
        id: 7
    },
    {
        name: "rajM2",
        type: "mentor",
        id: 8
    },
    {
        name: "raj8",
        type: "student",
        id: 9
    },
]

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
    "pass10"
]

const teams = [
    {
        no: 1,
        mentor: 0,
        members: [
            2,
            4,
            6,
        ],
        tasks: [
            {
                name: "task1",
                due: "03-06-2022",
                status: "pending",
                assignees: [6, 2],
                projectId: 1
            },
            {
                name: "task2",
                due: "03-06-2022",
                status: "completed",
                assignees: [4, 2],
                projectId: 1
            },
            {
                name: "task3",
                due: "02-06-2022",
                status: "overdue",
                assignees: [2, 4, 6],
                projectId: 2
            },
            {
                name: "task3",
                due: "05-06-2022",
                status: "completed",
                assignees: [4],
                projectId: 2
            },
        ],
        projects: [
            {
                title: "project1",
                statement: "statement1",
                id: 0
            },
            {
                title: "project2",
                statement: "statement2",
                id: 2
            }
        ],
        proposals: [
            {
                title: "proposal1",
                description: "description1",
                upVotes: 2,
                comments: [
                    {
                        comment: "comment1",
                        by: 0
                    },
                    {
                        comment: "comment2",
                        by: 8
                    }
                ],
                queries: "dku hdjy gduyg dj du fytdjbkduy du"
            },
            {
                title: "proposal2",
                description: "description2",
                upVotes: 1,
                comments: [
                    {
                        comment: "comment3",
                        by: 1
                    }
                ]
            }
        ]
    },
    {
        no: 2,
        mentor: 8,
        members: [
            1,
            3,
            5,
            7,
        ],
        tasks: [
            {
                name: "task-1",
                due: "03-06-2022",
                status: "pending",
                assignees: [1, 3, 5]
            },
            {
                name: "task-2",
                due: "03-06-2022",
                status: "completed",
                assignees: [1, 7]
            }
        ],
        proposals: [
            {
                title: "proposal-1",
                description: "description-1",
                upVotes: 2,
                comments: [
                    {
                        comment: "comment-1",
                        by: 0
                    },
                ],
                queries: "dkugdkjdbjdg uduy gduy udy gudyg duy gduy dyt "
            }
        ]
    }
]

function findTeam(user) {


    let t = null;
    teams.forEach(
        team => {
            if (team.members.includes(user.id)) {
                t = team
            }
        }
    )
    return t
}

// user authentication
app.get('/users/:name/:password', (req, res) => {

    let name = req.params.name;
    let password = req.params.password;

    let user = users.find(user => user.name === name);

    if (user) {
        if (pass[user.id] === password) {
            let team = findTeam(user)
            if (team) {
                res.send({ user, team })
            }
            else {
                res.send({ user })
            }
        }
        else {
            res.send({ error: `Incorrect password for ${user.name}` });
        }
    }
    else {
        res.send({ error: `Username ${name} not found` });
    }


})

// listen to the port
app.listen(port, () => {
    console.log(
        `
PBL Project Page
Server running at http://localhost:${port}
`
    )
})