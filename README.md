# Graduation Project - Getir 
### Oguz Colak

[heroku-demo](https://getir-coluck.herokuapp.com/).
https://getir-coluck.herokuapp.com/
In this project, there is a single endpoint. Therefore, I did not create a complex project file structure.

### Installation
```bash
git clone https://github.com/getir-nodejs-bootcamp/getir-nodejs-bootcamp-graduation-project-coluck.git
cd getir-nodejs-bootcamp-graduation-project-coluck
# replace .env.example with .env and give valid MONGO_URL connection string
npm i
npm start
```

### API

| No  | Method | Endpoint | Description         |
| --- | ------ | -------- | ------------------- |
| #1  | `POST` | `/`      | Gets requested data |

| No  | Request Body                               | Response Body                              |
| --- | ------------------------------------------ | ------------------------------------------ |
| #1  | { startDate, endDate, minCount, maxCount } | { code:Number, msg:String, records:Array } |


-------------------------------------------
When user POST
```json
{
  "startDate": "2016-07-10",
  "endDate": "2021-02-02",
  "minCount": 2700,
  "maxCount": 3000
}
```
data to the "/" endpoint, this server returns
```json
{
    "code": 0,
    "msg": "Success",
    "records": [
        {
            "key": "fEWwrjug",
            "createdAt": "2016-10-30T22:49:27.236Z",
            "totalCount": 2935
        },
        {
            "key": "kzSqsBrJ",
            "createdAt": "2016-12-02T15:07:30.465Z",
            "totalCount": 2803
        } ... ]
}
```
