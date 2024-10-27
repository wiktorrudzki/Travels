# **Welcome to Travels app**

## **Aplication layers**

- **frontend** - _React Native_ using _Expo Go_ - **localhost:8081**
- **backend** - _.Net 8_ with _Entity Framework_ and _Swagger_ - **https://localhost:5000**
- **database** - dockerized _PostgreSQL_ - **localhost:5444**

## **How to run**

### 1. Set up database using Docker

1. Make sure that you have Docker Desktop installed and running

2. In `Travels-API` directory, run:

```
docker compose -f .\docker-compose.yml up -d
```

3. Make sure you have have Entity Framweork installed

4. In `Travels-API` directory, run:

```
dotnet ef database update
```

5. Copy _sql_ script from `Travels-API/seed.sql`, then paste it into your database client and run it

6. Your database should be good to go runing on **localhost:5444**

### 2. Set up backend app

1. Make sure that you have .Net 8 SDK installed

2. Install nuggets using following command in `Travels-API` directory:

```
dotnet restore
```

3. Make sure you have following `appsettings.Development.json` file in `Travels-API` directory (it should be correct as default)

```
{
    "Logging": {
        "LogLevel": {
            "Default": "Information",
            "Microsoft.AspNetCore": "Warning"
        }
    },
    "AllowedHosts": "*",
    "ConnectionStrings": {
        "DefaultConnection": "Host=localhost;Port=5444;Database=travels-dev;Username=user;Password=password"
    }
}
```

4. In `Travels-API` directory, run:

```
dotnet watch run
```

5. Your backend should be running. Your default browser should be automatically opened on https://localhost:5000/swagger/index.html

### 3. Run frontend

1. Make sure that you have Node installed on your server and Expo Go installed on your phone

2. Install ngrok from its official website - https://ngrok.com/download

3. After installing ngrok, run the app with following command:

```
ngrok 5000 https://localhost:5000
```

This is going to create http tunnel in order to allow communication between your mobile device and your server. The phone cannot see the localhost on your PC, so you have to find the way to make communication occure. It has to be done by http tunnel which is going to redirect all of the http requests to your localhost specified port.

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

- 6 users, where everyone's password is: Qwerty1!
- 1 main user whose email is user@example.com
- main user is added to all of the trips and he is the owner of all of them except one called "Niespodzianka"
- 1 user called "Do dodania QR CODE" is not added to any trip
- 6 trips and few events added to almost each of them

## **How to use the app**

### Logged in section

- App has the Welcome screen which navigates user to Login screen
- From Login screen, we can either log in to the app or navigate to register screen
- From Register screen, we can create an account

### Logged out section

- Home screen contains nothing right now
- Trips screen contains all user's trips, event assigned to those trips. Here owner of the trip can edit it (start, end time, participants, title) and edit its events (name, description, start, end time)
- Account screen has few mocked up buttons, unique QR code of the user which can be used for adding user to a trip and "logout" button

### Helpful info

When trying to log in to the app from a Swagger, send POST request to a /login endpoint. Use email from database and following password:
`195f62edd40a1d9b0c6407104596d6c29e2b408ecc1cc964e803376917ab1fd0` - Paste the token returned in the response to the Authorization section in the Swagger and feel free to use the app from the Swagger
