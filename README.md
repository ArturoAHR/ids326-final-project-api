**Base NestJS + Typeorm API Project**

**Setup**

1. Clone the repository.
2. Install the packages
```npm install```
3. Copy the .env.example and rename it .env and fill the database details.
4. Run the migrations
```npm run migration:run```
5. Run the project
```npm run start```

**Routes**

* Todo
  * `GET /todo` - Get All Todo records.
  * `GET /todo/:id` - Get a Todo by ID.
  * `POST /todo` - Create a Todo record.
  * `PATCH /todo/:id` - Update a Todo record.
  * `DELETE /todo` - Delete a Todo record.