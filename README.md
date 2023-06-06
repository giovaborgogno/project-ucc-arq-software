# Hotel Reservation Project

This is a hotel reservation project that allows users to search and book rooms in different hotels. It also includes an administration panel for administrators to manage hotels, bookings, and users.

## Prerequisites

- Go (version 1.18)
- Node.js (version 18.15.0)
- Docker (version 23.0.5)
- MySQL database (version 8.0.33)

## Environment Setup

1. In the `backend` folder, create a `.env` file using the `.env.example` file as a reference. This file will contain the configuration for your environment, such as the database connection configuration and SMTP configuration.

2. If you want to run tests, create a `test.env` file in the `backend/utils/initializers` folder using the `test.env.example` file as a reference.

3. Configure the `.env` file in the `frontend` folder with the URL of the docker backend server.

```bash
# frontend/.env file

NEXT_PUBLIC_URL_API='backend:8080'
```

4. Ensure that the database is created and properly configured with the necessary permissions.

## Running the Project

1. Run the project using Docker Compose for easy setup and execution. In the project root, run the following command:

```bash
# docker

docker-compose up
```

2. Once the project is up and running, open your web browser and access the project's home page at the specified URL (e.g `http://localhost:3000`).

3. Register as a user from the web page and complete the verification process.

4. Access the database and manually set your user as an "admin". This can be done by directly modifying the corresponding column in the user table:
```bash
# MYSQL

UPDATE users 
SET role = "admin" 
WHERE email = "youremail@email.com";
```

Congratulations! You can now use the hotel reservation project.

## Contribution

If you want to contribute to this project, feel free to open issues or submit pull requests on the GitHub repository.

## License

This project is licensed under the LosPibesUCC License. For more information, see the LICENSE file.
