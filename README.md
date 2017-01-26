# EdTrack

##Objective
EdTrack is a versatile performance tracking tool that alleviates the burden on overworked teachers, oversized classrooms, and students to better track and learn from their performance.

There will be three different account levels: manager, instructor, and student.

The student will be able to log in which will account for attendence, turn in their assignments, and see their in class progress. Possible functionality can be instructor feedback, view and edit job search.

Instructors will be able to assign and request assignments from students, set deadlines, enter grades, view student progress as a graph and also class progress as well. Possible functionality  can be student feedback, view and edit student job search.

Managers will be able to view the class progress, student progress, and associate it with the instructor. Possible functionality can be to view all feedback and job search.


## Database Setup
Install postgres app AND postico app then run both, then create a database called "EdTrack" within postico.

```
{
  "development": {
    "username": "NAME",
    "password": null,
    "database": "EdTrack",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "NAME",
    "password": null,
    "database": "EdTrack",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "NAME",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```

In the config folder, create a file named config.json. Then, copy the contents above and paste it into the config.json file you created.

Also, change the "username", "database", and "dialect" fields in the config.json
file. Username should be your username for the database, database should be
"EdTrack", and dialect should be "postgres".

Change the fields for development, test, and production

## Start
First: `npm install`
To start: `npm start`
