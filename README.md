# Tasks express project

## Rest - endpoints

### Get
API Syntax
	
    /tasks/
|request &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| response |status code|
|--|--|--|
|/tasks       | `[{ "id": 1, "name" : "Buy grocieries", "status" : "pending"}, { "id": 2, "name" : "Pay electiricy bill", "status" : "pending"}]`  | 200|
### GET - (one)
API Syntax
	
    /tasks/:id

| request &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| response  | status code|
|---|--|--|
|/tasks/1         | Success: `{ "id": 1, "name" : "Buy grocieries", "status" : "pending"}` | 200
||Error: `{"message": "Task with id: 1 not found"}`| 404|

### POST
API Syntax
	
    /tasks/
| request &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| body |response  | status code|
|------|--|--|--|
|/tasks/  |  `{ "name" : "Buy Notebook", "status" : "pending"}`  |`{ "id": 3, "name" : "Buy Notebook", "status" : "pending"}`| 201 |

### PUT
 
API Syntax
	
    /tasks/:id

| request &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  | body |response  | status code|
|-------|--|--|--|
|/tasks/1  |  `{ "name" : "Buy grocieries", "status" : "Done"}`  |Success: `{ "id": 1, "name" : "Buy grocieries", "status" : "Done"}`| 201|
|||Error: `{"message": "Task with id: 1 not found"}`| 404

### PATCH
API Syntax
	
    /tasks/:id


| request &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| body |response  | status code|
|-----|--|--|--|
|/tasks/3  |  `{ "name" : "Buy stationary"}`  |Success: `{ "id": 3, "name" : "Buy stationary", "status" : "Pending"}`| 200|
|||Error: `{"message": "Task with id: 3 not found "}`| 404
### DELETE
API Syntax
	
    /tasks/:id

| request &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| response  | status code|
|--|--|--|
|/tasks/1  |   Success: `{"message": "Task with id: 1 was deleted successfully "}`| 200|
||Error: `{"message": "Task with id: 3 not found "}` |404|