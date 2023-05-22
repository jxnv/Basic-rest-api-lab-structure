# Simple Express API for Course Management

This is a simple Express API for managing courses. It provides basic CRUD operations (Create, Read, Update, Delete) for courses.

## Prerequisites

- Node.js should be installed on your machine.

## Installation

1. Clone the repository and navigate to the project directory.

2. Install the dependencies by running the following command:

   ```bash
   npm install
Usage
Start the server by running the following command:

bash
Copy code
npm start
The server will start running on port 3000 by default.

Access the API using a REST client or tools like cURL or Postman.

Available endpoints:

GET /api/course: Get the list of all courses.
POST /api/courses: Create a new course.
GET /api/course/:id: Get a specific course by ID.
PUT /api/course/:id: Update a specific course by ID.
DELETE /api/course/:id: Delete a specific course by ID.
Note: Replace :id in the URL with the actual ID of the course.

The API uses JSON format for request and response bodies. Ensure that you set the Content-Type header to application/json when sending requests.

The API also includes basic input validation using the joi library. The name field of the course is validated to be a string with a minimum length of 3 characters.

Example Requests
Create a new course:

bash
Copy code
POST /api/courses

Request Body:
{
  "name": "New Course"
}
Update an existing course:

bash
Copy code
PUT /api/course/:id

Request Body:
{
  "name": "Updated Course"
}
Delete a course:

bash
Copy code
DELETE /api/course/:id
