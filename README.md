# Getting Started

0. **Install Docker Desktop**

1. **Clone Repository**:

```bash
git clone "https://github.com/bagus342/userManagement.git"
cd userManagement
```

2. **Set up your .env file**:

```.env
PORT=3000

DB_PORT=5432
POSTGRES_USER=<your_user_db>
POSTGRES_PASSWORD=<your_password_db>
POSTGRES_DB=<your_db_name>

DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@db:${DB_PORT}/${POSTGRES_DB}"
```

3. **Boot up docker containers**:

`docker compose up --build`

*or*

`docker compose up -d --build`

4. **To stop docker containers**:

`docker compose down`

5. **Access the API**:

Open Postman and set `http://localhost:3000/api/pengguna` endpoint


# Documentation API

## End-point: getAll
### Method: GET
>```
>http://localhost:3000/api/pengguna
>```

### Response: 200
```json
{
    "success": true,
    "message": "Success get data",
    "data": [
        {
            "id": 1,
            "name": "Bagus Rama Maulana",
            "email": "bagusyes005@gmail.com",
            "phone": "081230737582",
            "status": true,
            "departement": "IT"
        }
    ]
}
```

### Response: 500
```json
{
    "success": false,
    "message": "Internal server error"
}
```

## End-point: create
### Method: POST
>```
>http://localhost:3000/api/pengguna
>```
### Body (**raw**)

```json
{
    "name": "Bagus Rama Maulana",
    "email": "bagusyes005@gmail.com",
    "phone": "081230737582",
    "status": true,
    "departement": "IT"
}
```

### Response: 200
```json
{
    "success": true,
    "message": "Success create data"
}
```

### Response: 500
```json
{
    "success": false,
    "message": "Internal server error"
}
```

### Response: 400 (Email validation)
```json
{
    "success": false,
    "errors": [
        {
            "field": "email",
            "message": "Invalid email format"
        }
    ]
}
```

### Response: 400 (Phone validation numeric)
```json
{
    "success": false,
    "errors": [
        {
            "field": "phone",
            "message": "Phone must be numeric"
        }
    ]
}
```

### Response: 400 (Phone validation min length)
```json
{
    "success": false,
    "errors": [
        {
            "field": "phone",
            "message": "Phone length min 10"
        }
    ]
}
```

### Response: 400 (Unique of email)
```json
{
    "success": false,
    "message": "Email has already exist"
}
```

## End-point: update
### Method: PUT
>```
>http://localhost:3000/api/pengguna/1
>```
### Body (**raw**)

```json
{
    "name": "Ratna Najibatunnisa",
    "email": "isabellaadr13@gmail.com",
    "phone": "0891237745123",
    "status": false,
    "departement": "Management"
}
```

### Response: 200
```json
{
    "success": true,
    "message": "Success update data",
    "data": {
        "id": 1,
        "name": "Ratna Najibatunnisa",
        "email": "isabellaadr13@gmail.com",
        "phone": "0891237745123",
        "status": false,
        "departement": "Management"
    }
}
```

### Response: 500
```json
{
    "success": false,
    "message": "Internal server error"
}
```

### Response: 400 (Email validation)
```json
{
    "success": false,
    "errors": [
        {
            "field": "email",
            "message": "Invalid email format"
        }
    ]
}
```

### Response: 400 (Phone validation numeric)
```json
{
    "success": false,
    "errors": [
        {
            "field": "phone",
            "message": "Phone must be numeric"
        }
    ]
}
```

### Response: 400 (Phone validation min length)
```json
{
    "success": false,
    "errors": [
        {
            "field": "phone",
            "message": "Phone length min 10"
        }
    ]
}
```

### Response: 400 (Unique of email)
```json
{
    "success": false,
    "message": "Email has already exist"
}
```

## End-point: delete
### Method: DELETE
>```
>http://localhost:3000/api/pengguna/1
>```

### Response: 200
```json
{
    "success": true,
    "message": "Success delete data"
}
```

### Response: 500
```json
{
    "success": false,
    "message": "Internal server error"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃