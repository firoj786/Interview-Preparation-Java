Authentication Mechanisms - Microservices 

[1.] 𝐀𝐏𝐈 𝐊𝐞𝐲𝐬
◾ Simple, unique identifiers assigned to each client or service.
◾ Sent as a header or query parameter with each request.
◾ Best suited for internal services, less sensitive APIs, or for granting access to specific features. 
◾ Easy to implement and manage.
◾ Not as secure as token-based methods. Keys can be easily leaked or stolen.

[2.] 𝐁𝐚𝐬𝐢𝐜 𝐀𝐮𝐭𝐡𝐞𝐧𝐭𝐢𝐜𝐚𝐭𝐢𝐨𝐧
◾ Username and password are sent in the Authorization header as base64 encoded string.
◾ Simple to implement but requires HTTPS to be secure.
◾ Suitable for simple scenarios with low-security requirements.
◾ Widely supported and easy to understand.
◾ Vulnerable to man-in-the-middle attacks if not used with HTTPS.
◾ Passwords are sent in cleartext (even when encoded).

[3.] 𝐉𝐒𝐎𝐍 𝐖𝐞𝐛 𝐓𝐨𝐤𝐞𝐧𝐬 (𝐉𝐖𝐓)
◾ Self-contained tokens that carry user information and claims in a JSON payload.
◾ Issued by an authentication server after successful login, then sent by the client in the Authorization header.
◾ Widely used for stateless authentication in microservices, single sign-on (SSO) and authorization.
◾ Stateless, secure, compact and can contain additional claims.
◾ Requires proper key management for signing and verification.

[4.] 𝐎𝐀𝐮𝐭𝐡 2.0
◾ An authorization framework allowing third-party applications to obtain limited access to resources on behalf of the resource owner (user) without sharing credentials.
◾ Uses various grant types (authorization code, implicit, client credentials, etc.) to obtain access tokens and refresh tokens.
◾ Widely used for user authorization and delegated access to APIs.
◾ Provides a standardized way to secure access to resources without sharing credentials.
◾ Can be complex to implement and requires careful consideration of security vulnerabilities.

[5.] 𝐎𝐩𝐞𝐧𝐈𝐃 𝐂𝐨𝐧𝐧𝐞𝐜𝐭 (𝐎𝐈𝐃𝐂)
◾ An identity layer on top of OAuth 2.0 that provides user authentication and profile information.
◾ Uses an ID token along with the access token to provide user identity information.
◾ Used for authentication in conjunction with OAuth 2.0 for authorization.
◾ Simplifies authentication by providing a standardized way to obtain user information.
◾ Requires integration with an OIDC provider (e.g., Google, Okta).