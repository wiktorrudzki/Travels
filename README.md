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

POSTMAN PASSWORD: 195f62edd40a1d9b0c6407104596d6c29e2b408ecc1cc964e803376917ab1fd0
