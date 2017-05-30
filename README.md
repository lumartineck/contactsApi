## Running Locally
```bash
git clone https://github.com/lumartineck/contactsApi.git
cd contactsApi
npm install
mongod #in a separated terminal
npm run start
```


### API Resources

#### Endpoints for users

  - GET /users/
  - POST /users/
  - PUT /users/:id
  - DELETE /users/:id

#### Endpoints for contacts

  - GET /users/:id/contacts
  - POST /users/:id/contacts
  - PUT /users/:id/contacts/:id
  - DELETE /users/:id/contacts/:id