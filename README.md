# Fixer-Upper Bookings

Fixer-Upper Bookings
This app is used for booking event venues on certain dates. The booking system only needs to support four venues: "Victoria", "Vancouver", "Toronto", and "Calgary" but it will need to support many more in the future.

Installation
To install this app, follow these steps:

Clone the repository from GitHub: git clone https://github.com/susmithaabk5/fixer-upper-main-2.git.
Install dependencies for the React application: cd app && npm install.
Install dependencies for the API server: cd api && npm install.
Install Docker (if not already installed).
Run the command docker-compose up to start the database.
Run the command npx concurrently 'make start-db' 'make start-app' 'make start-api' to start the app and the API server.
Usage
The app allows users to create bookings with a date, location, and the person who booked it. Users can also reset bookings.

The app also has a "booked view" that displays a table with sorting options for date, location, and the person who booked it. There is also a delete button to remove a row from the table.

Dependencies
React Application
"@testing-library/jest-dom": "^5.11.4"
"@testing-library/react": "^11.1.0"
"@testing-library/user-event": "^12.1.10"
"@types/jest": "^26.0.15"
"@types/moment": "^2.13.0"
"@types/node": "^12.0.0"
"@types/react": "^17.0.0"
"@types/react-dom": "^17.0.0"
"autoprefixer": "^10.4.14"
"axios": "^0.24.0"
"axios-retry": "^3.2.4"
"bootstrap": "^5.2.3"
"css": "^3.0.0"
"formik": "^2.2.9"
"moment": "^2.15.1"
"postcss": "^8.4.21"
"react": "^17.0.2"
"react-bootstrap": "^2.7.2"
"react-dom": "^17.0.2"
"react-router": "^6.0.2"
"react-router-dom": "^6.0.2"
"react-scripts": "4.0.3"
"sass": "^1.59.2"
"tailwind": "^4.0.0"
"typescript": "^4.1.2"
"web-vitals": "^1.0.1"
"yup": "^1.0.2"
API Server
"@types/express": "^4.17.13"
"@types/pg": "^8.6.1"
"@types/uuid": "^8.3.1"
"cors": "^2.8.5"
"express": "^4.18.2"
"pg": "^8.10.0"
"postgres-migrations": "^5.3.0"
"uuid": "^8.3.2"

License
This project is licensed under the MIT License - see the LICENSE.md file for details.
