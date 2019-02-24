# Community Server
Community Data

# Location
Get all locations
* Link - https://communityserver.herokuapp.com/locations
* Request - GET

Add a location
* Link - https://communityserver.herokuapp.com/locations
* Request - POST
* Body - location

# Profile
Get all profiles from that location
* Link - https://communityserver.herokuapp.com/locations/:locationId/profiles
* Request - GET
* Params - Replace ':locationId' with an id of a location

Create a profile
* Link - https://communityserver.herokuapp.com/locations/:locationId/profiles
* Request - POST
* Params - Replace ':locationId' with an id of a location
* Body - name, age, phone, email, title, scores, numberOfEvents