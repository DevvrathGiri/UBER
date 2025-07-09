# User Registration Endpoint

## Endpoint

`POST /users/register`

## Description

This endpoint allows a new user to register by providing their details. Upon successful registration, a user account will be created in the database.

## Request Body

The request must include the following fields in JSON format:

- `fullname`: An object containing:
  - `firstname`: A string representing the user's first name (required, minimum 3 characters).
  - `lastname`: A string representing the user's last name (required, minimum 3 characters).
- `email`: A string representing the user's email address (required, must be unique, minimum 5 characters).
- `password`: A string representing the user's password (required).

### Example Request

{
"fullname": {
"firstname": "John",
"lastname": "Doe"
},
"email": "john.doe@example.com",
"password": "securePassword123"
}

## Response

### Success

- **Status Code**: 201 Created
- **Response Body**: A success message along with the created user details.

### Error

- **Status Code**: 400 Bad Request
  - If any required fields are missing or invalid.
- **Status Code**: 409 Conflict
  - If the email already exists in the database.

## Example Response

### Success

{
"message": "User registered successfully",
"user": {
"fullname": {
"firstname": "John",
"lastname": "Doe"
},
"email": "john.doe@example.com"
}
}

### Error

{
"error": "Email already exists"
}
