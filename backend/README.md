<div align="center">
    <a href="https://github.com/tomlai19852004/to-do-app">
        <h3 align="center">To Do App Backend</h3>
    </a>
</div>

## About The Project
API Backend for To Do App

### Prerequisites
In order to run, you need to first create the following environment variable file at the root of backend folder.

**.env**
```ini
PGHOST=
PGPORT=
PGDATABASE=
PGPASSWORD=
PGUSER=
```

PGHOST - Host of PostgreSQL
PGPORT - Database port
PGDATABASE - Database name
PGPASSWORD - Database password
PGUSER - Database username

Backend is connected to PostgreSQL. You will need to create the following database table before running the backend.

```sql
create table duty (
	id UUID NOT NULL DEFAULT uuid_generate_v1(),
	name text,
	deleted boolean default false,
	created_at timestamp without time zone default now(),
	modified_at timestamp without time zone default now()
);
```