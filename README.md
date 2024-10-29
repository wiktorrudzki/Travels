# **Welcome to Travels app**

## **To use the app, you are going to need two repos: Travels & Travels-API:**
-  https://github.com/wiktorrudzki/Travels - frontend
-  https://github.com/wiktorrudzki/Travels-API - backend

## **Application layers**

-   **frontend** - _React Native_ using _Expo Go_ - **localhost:8081**
-   **backend** - _.Net 8_ with _Entity Framework_ and _Swagger_ - **https://localhost:5000**
-   **database** - dockerized _PostgreSQL_ - **localhost:5444**

## **How to run**

### 1. Set up the database using Docker

1. Make sure that you have Docker Desktop installed and running

2. In `Travels-API` directory, run:

```
docker compose -f .\docker-compose.yml up -d
```

3. Make sure you have have Entity Framework installed

4. In `Travels-API` directory, run:

```
dotnet ef database update
```

5. Your database should be good to go running on **localhost:5444**

### 2. Set up the backend app

1. Make sure that you have .Net 8 SDK installed

2. Install nuggets using the following command in `Travels-API` directory:

```
dotnet restore
```

3. In `Travels-API` directory, run:

```
dotnet watch run
```

4. Your backend should be running. Your default browser should be automatically opened on https://localhost:5000/swagger/index.html

### 3. Run frontend

1. Make sure that you have Node installed on your server and Expo Go installed on your phone

2. Install ngrok from its official website - https://ngrok.com/download

3. After installing ngrok, run ngrok following command in the ngrok CLI:

```
ngrok http https://localhost:5000
```

This will create an HTTP tunnel to allow communication between your mobile device and your server. The phone cannot see the localhost on your PC, so you have to find a way to make communication occur. It has to be done by an HTTP tunnel, which will redirect all of the HTTP requests to your localhost specified port.

3. In `Travels` directory, install npm packages:

```
npm install
```

4. In `.env` file, set the EXPO_PUBLIC_API_BASE_URL variable to the ngrok tunnel URL, e.g.

```
EXPO_PUBLIC_API_BASE_URL=https://570a-94-246-157-145.ngrok-free.app
```

5. In `Travels` directory, run:

```
npm start
```

6. Scan the QR code with your phone and open **Travels** app

## **What does the seed contain**

-   6 users, where everyone's password is: Qwerty1!
-   1 main user whose email is user@example.com
-   The main user is added to all of the trips and he is the owner of all of them except two: "Niespodzianka" and "Londyn + Brighton + Edynburg"
-   1 user called "Do dodania QR CODE" is not added to any trip
-   6 trips and a few events added to almost each of them

## **How to use the app**

### Logged in section

-   The app has the Welcome screen which navigates the user to the Login screen
-   From the Login screen, we can either log in to the app or navigate to the register screen
-   From the Register screen, we can create an account

### Logged out section

-   The home screen contains nothing right now
-   Trips screen contains all user's trips and events assigned to those trips. This is the place where the owner of the trip can edit it (start, end time, participants, title) and edit its events (name, description, start, end time)
-   The account screen has a few mocked-up buttons, a unique QR code of the user which can be used for adding a user to a trip and a "logout" button

### Helpful info

When trying to log in to the app from a Swagger, send a POST request to a /login endpoint. Use email from the database and the following password:
`195f62edd40a1d9b0c6407104596d6c29e2b408ecc1cc964e803376917ab1fd0` - Paste the token returned in the response to the Authorization section in the Swagger and feel free to use the app from the Swagger
