{
  "users": [
    {
      "name": "M1",
      "type": "mentor",
      "id": 0
    },
    {
      "name": "HOD",
      "type": "hod",
      "id": 1
    },
    {
      "name": "S1",
      "type": "student",
      "id": 2
    },
    {
      "name": "S2",
      "type": "student",
      "id": 3
    },
    {
      "name": "S3",
      "type": "student",
      "id": 4
    },
    {
      "name": "S4",
      "type": "student",
      "id": 5
    },
    {
      "name": "S5",
      "type": "student",
      "id": 6
    },
    {
      "name": "S6",
      "type": "student",
      "id": 7
    },
    {
      "name": "M2",
      "type": "mentor",
      "id": 8
    },
    {
      "name": "S7",
      "type": "student",
      "id": 9
    }
  ],
  "pass": [
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
  ],
  "teams": [
    {
      "no": 1,
      "mentor": 0,
      "members": [
        2,
        4,
        6
      ],
      "tasks": [
        {
          "name": "task1",
          "due": "03-06-2022",
          "status": "pending",
          "assignees": [
            6,
            2
          ],
          "projectId": 1
        },
        {
          "name": "task2",
          "due": "03-06-2022",
          "status": "completed",
          "assignees": [
            4,
            2
          ],
          "projectId": 1
        },
        {
          "name": "task3",
          "due": "02-06-2022",
          "status": "overdue",
          "assignees": [
            2,
            4,
            6
          ],
          "projectId": 2
        },
        {
          "name": "task3",
          "due": "05-06-2022",
          "status": "completed",
          "assignees": [
            4
          ],
          "projectId": 2
        }
      ],
      "projects": [
        {
          "title": "project1",
          "statement": "statement1",
          "id": 0
        },
        {
          "title": "project2",
          "statement": "statement2",
          "id": 2
        }
      ]
    },
    {
      "no": 2,
      "mentor": 8,
      "members": [
        1,
        3,
        5,
        7
      ]
    }
  ],
  "proposals": [
    {
      "title": "proposal1",
      "description": "description1",
      "upVotes": 2,
      "comments": [
        {
          "comment": "comment1",
          "by": 0
        },
        {
          "comment": "comment2",
          "by": 8
        }
      ],
      "teamId": 1,
      "queries": "dku hdjy gduyg dj du fytdjbkduy du"
    },
    {
      "title": "proposal2",
      "description": "description2",
      "upVotes": 1,
      "comments": [
        {
          "comment": "comment3",
          "by": 1
        }
      ],
      "teamId": 1
    },
    {
      "title": "proposal-1",
      "description": "description-1",
      "upVotes": 2,
      "comments": [
        {
          "comment": "comment-1",
          "by": 0
        }
      ],
      "teamId": 2,
      "queries": "dkugdkjdbjdg uduy gduy udy gudyg duy gduy dyt "
    },
    {
      "title": "hihello",
      "description": "howareyou",
      "queries": "idontknow",
      "teamId": "1"
    }
  ]
}