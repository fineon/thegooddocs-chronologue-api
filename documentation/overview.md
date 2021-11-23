# Documentation for the Chronologue API
This doc's content is written in Markdown. Markdown can be parsed and displayed by many tools: 
- Docusaurus
- Jekyll
- Mkdocs
- Sphinx
- etc.

## API Routes

GET `/` 
GET `/all-locations-id`
GET `/all-years-id`
GET `/year/{year-id}`
param: string
GET `/location/{location-id}`
param: string
GET `year/{year-id}/location/{location-id}`
param: string

## Supported HTTP Request Methods
Currently, the API only supports GET requests, other request methods will be supported in future versions. 
