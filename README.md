# FSD-II Lab Manual — Express.js Programs

## Folder structure

```
express-lab-programs/
├── program1/              # (a) Hello World using Express Route
│   └── app.js
├── program2/               # (b) Small website with multiple routes
│   └── app.js
├── program3-console/       # (c) Print Hello World in browser console
│   └── app.js
├── program4-crud/          # (d) CRUD operations using Express
│   └── app.js
└── program5-mysql/         # (e) Express + MySQL connection
    ├── app.js
    └── students.sql
```

## Common setup (run inside each program folder)

```
npm init -y
npm install express
```

For program5-mysql, also run:
```
npm install mysql2
```

## Run

```
node app.js
```

## Notes per program

- **program1**: visit `http://localhost:3000/` → "Hello World"
- **program2**: visit `/`, `/about`, `/contact`, `/services`
- **program3-console**: visit `/` → browser shows a message, terminal logs "Hello World"
- **program4-crud**: uses an in-memory array (no DB). Endpoints:
  - GET `/students`, GET `/students/:id`
  - POST `/students` (body: `{ "id":3, "name":"Rahul" }`)
  - PUT `/students/:id` (body: `{ "name":"MDS" }`)
  - DELETE `/students/:id`
- **program5-mysql**: run `students.sql` in phpMyAdmin (database `college`) first, then start the server. Visit `http://localhost:3000/students`. Update the `host`/`port`/`password` in `app.js` to match your local MySQL setup.
