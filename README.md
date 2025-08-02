## Project information
Demonstrates using GraphQL and Apollo with React

<img width="1522" height="530" alt="image" src="https://github.com/user-attachments/assets/ce751974-6394-4ed7-84c6-9aade9de08fa" />


## Getting started

## Backend Setup (Root directory)
```
npm install
```

## Frontend Setup(client folder)
```
npm install
```

## React App starting both server and React same time:
```
npm run dev
```

## Accessing GraphQL in browser:
```
http://localhost:5000/graphql
```
or whatever port you specified.

## Example queries:
### Launch by flight number
```
{
  launch(flight_number: 2) {
    mission_name,
    launch_year,
    launch_success,
    rocket {
      rocket_name
    }
  } 
}
```

### Launches:
```
{
  launches {
    flight_number,
    mission_name,
    launch_year,
    launch_success,
    launch_date_local,
    rocket {
      rocket_id,
      rocket_name,
      rocket_type
    }
  }
}
```


### All Rockets:
```
{
  rockets {
    rocket_id
    rocket_name
    rocket_type
  }
}
```

### One particular rocket by id:
```
{
  rocket(id: "falcon1") {
    rocket_id
    rocket_name
    rocket_type
  }
}
```

## Resources:
### API:
https://github.com/r-spacex/SpaceX-API
https://docs.spacexdata.com/
https://api.spacexdata.com/v3/launches

https://github.com/gitchrisadams/SpaceXGraphQLApolloReactTutorial

# GraphQL/Apollo/React tutorial
https://www.youtube.com/playlist?list=PLillGF-RfqbZrjw48EXLdM4dsOhURCLZx

# More on GraphQL tutorial on CRUD operations:
https://www.youtube.com/playlist?list=PLillGF-RfqbYZty73_PHBqKRDnv7ikh68

## Express graphql repo
https://github.com/graphql/express-graphql
