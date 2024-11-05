Understanding HTTP Status Codes is essential for web development and debugging. 

𝟭𝘅𝘅 - 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻𝗮𝗹 (𝟭𝟬𝟬–𝟭𝟵𝟵) 
These codes let you know that the request was received and the server is still processing. 
- 100 Continue: The server has received the request headers, and the client can continue to send the request body. 
- 101 Switching Protocols: The server is switching to a different protocol, as requested by the client.

---

𝟮𝘅𝘅 - 𝗦𝘂𝗰𝗰𝗲𝘀𝘀 (𝟮𝟬𝟬–𝟮𝟵𝟵) 
The best-case scenario! The request was successfully received, understood, and processed. 
- 200 OK: The standard for a successful request—everything worked as expected. 
- 201 Created: A new resource has been successfully created, such as after a POST request. 
- 202 Accepted: The request has been accepted for processing, but it may not have been completed yet. 

---

𝟯𝘅𝘅 - 𝗥𝗲𝗱𝗶𝗿𝗲𝗰𝘁𝗶𝗼𝗻 (𝟯𝟬𝟬–𝟯𝟵𝟵) 
Further action is required to complete the request, usually involving redirection. 
- 301 Moved Permanently: The requested resource has been moved to a new URL. 
- 307 Temporary Redirect: The resource is temporarily available at a different location, but future requests should still use the original URL. 
- 308 Permanent Redirect: Similar to 301, but with a guarantee that the method and the body won’t change.

---

𝟰𝘅𝘅 - 𝗖𝗹𝗶𝗲𝗻𝘁 𝗘𝗿𝗿𝗼𝗿𝘀 (𝟰𝟬𝟬–𝟰𝟵𝟵) 
These errors occur when the problem is likely on the client’s side, such as incorrect requests or lack of access. 
- 400 Bad Request: The server couldn’t understand the request due to invalid syntax. 
- 401 Unauthorized: Authentication is required to access the resource (or the credentials provided were invalid). 
- 403 Forbidden: The client is authenticated, but doesn’t have permission to access the requested resource. 
- 404 Not Found: The server couldn’t find the requested resource (a common error when URLs are broken or outdated). 
- 409 Conflict: The request could not be completed due to a conflict with the current state of the resource.

---

𝟱𝘅𝘅 - 𝗦𝗲𝗿𝘃𝗲𝗿 𝗘𝗿𝗿𝗼𝗿𝘀 (𝟱𝟬𝟬–𝟱𝟵𝟵) 
These indicate issues on the server’s side, often related to overloads or misconfigurations. 
- 500 Internal Server Error: A generic error message indicating something has gone wrong on the server, but the exact issue is unclear. 
- 503 Service Unavailable: The server is temporarily unable to handle the request (often due to overload or maintenance). 
- 504 Gateway Timeout: One server didn’t receive a timely response from another server, usually in a gateway or proxy context.



1xx Information:
- 100 Continue: Initial part of the request received; client should proceed.

- 101 Switching: Server is switching protocols.

- 102 Processing: Server accepted the request but hasn’t completed it.

- 103 Early Hints: Provides response headers before the final response.

2xx Success:
- 200 OK: Request was successful.

- 201 Created: Request resulted in a new resource.

- 202 Accepted: Request accepted but processing not complete.

- 204 No Content: Request processed successfully, but no content returned.

3xx Redirection:
- 301 Moved Permanently: Resource has moved to a new URL.

- 302 Found: Resource temporarily found under a different URL.

- 303 See Other: Resource can be found under a different URL using GET.

- 307 Temporary Redirect: Request should be repeated with another URL.

4xx Client Errors:
- 400 Bad Request: Server cannot process request due to bad syntax.

- 401 Unauthorized: Authentication required.

- 403 Forbidden: Server understood request but refuses to authorize it.

- 404 Not Found: Resource could not be found on the server.

5xx Server Errors:
- 500 Internal Server Error: Server encountered an unexpected condition.

- 502 Bad Gateway: Invalid response from an upstream server.

- 503 Service Unavailable: Server is temporarily unable to handle the request.

- 504 Gateway Timeout: Server acting as a gateway did not receive a timely response.