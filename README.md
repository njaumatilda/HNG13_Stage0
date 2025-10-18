# HNG Stage 0 API

This is a simple REST API project that provides a single GET endpoint which returns my profile information and a random cat fact, in JSON format.

## Features

- Provides my name, HNG registered email and backend stack
- Provides current datetime in ISO 8601 format which is dynamically generated
- Provides a random cat fact fetched from an external API
- Returns response in JSON format
- Handles CORS for cross-origin requests

## Tech Stack

- Node.js
- Express.js

## Local setup instructions

1. Clone the repository

```bash
git clone https://github.com/njaumatilda/HNG13_Stage0.git
```

2. Navigate to the project directory

```bash
cd HNG13_Stage0/
```

3. Install dependencies

```bash
npm install
```

| The dependancies used in this task are: `dotenv`, `express` and `cors` |

4. Configure environment variables

To run this project, you will need to create a `.env` file in the project directory and make sure it is included in the `.gitignore` file. Configure the following environment variables:

```env
PORT = your-port
```

> Replace `your-port` with your specified port

5. Start the server

```bash
npm run dev
```

## API Documentation

Here is the reference on the usage of the API:
[API Documentation](https://documenter.getpostman.com/view/38132076/2sB3QQJTMG)

## Deployment

The API has been deployed to a publicly accessible endpoint on Railway:
[Live URL](https://hng13stage0-production-850c.up.railway.app/me)

## Author

[Matilda Njau](https://github.com/njaumatilda)

