This section describes the UI architecture and how various components are created in React JS to build application pages.


React JS and Next JS components

Explanation:

a. Application Bootstrapping and Routing components: These components are responsible for bootstrapping the application for a user on the client browser. The Route Guard component is responsible for validating the user context and redirects user based upon authentication status.
The user context component provides information about logged user to UI components. This component stores the user token reeved from the authentication service after successful login or registration.

b. UI Pages: There are two types of application pages created in the system.
Standard application pages are used to configure the various sections of the application. Examples of these pages are creating risk rating parameters and creating fund pages.
Dynamic Rendering Onboarding Application Pages. In order to provide different application forms to the investors based on fund and investor type, a form builder and corresponding rendering engine are written.

c. Reusable Components: The various reusable components are created in the presentation layer that is used to build both the standard and dynamic rendering engine. The reusable components allow us to reuse the code and help to build the various pages quickly.
Some examples of reusable components: Input controls and validations, File Upload controls, and navigation components. The complete list of reusable components is provided in the Appendix-1.

d. Communication components: These components are responsible for calling the microservices and providing data to various reusable and application pages. Using a single channel of communication from all the pages and reusable code helped to handle the exceptions from the services.