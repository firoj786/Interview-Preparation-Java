Apex FAC Investor Onboarding
Software Architecture Document

1. Overview

Apex FAC is building a product that connects fund market participants on a distributed ledger-based network that holds a digital representation of assets, cash, and transactions.
Investors, distributors, fund managers, and service providers participate in the network allowing them to share the same information on ownership and transactions reducing the layers of intermediation between the investor and the product.
The product brings market-traded and principal-traded funds into the digital age, aligning with best practices in tokenization of all asset classes, with a view to future interoperability and ultimately offering the opportunity of atomic settlement of fund transactions. It simplifies fund distribution, bringing customers closer to the product.
The product will be developed in multiple phases. In phase 1, the investor onboarding module is getting implemented. There are three portals being developed for Investors, Fund Administrators, and Fund Managers
The product will be used by Fund Managers and Fund Administration to simplify and automate the onboarding of the investors and provides following key functionalities.

. Onboarding retail and Institutional investors

. Ability to Risk rate any Investor Type.

. Ability to dynamically adapt KYC and AML requirements on the basis of the customer

This document provides a comprehensive architectural overview of the system, using several different architectural views to depict various aspects of the Investor Onboarding System. It is intended to capture and convey the significant architectural decisions which have been made on the system.
Stakeholders who require a business understanding of the system are encouraged to start by reading the product requirements user stories.

1.1. Scope of project or System
The scope of the project includes:

. Creating investor portal to apply for new applications for investment.

. Creating Fund administration portal to send invitations to investors, review applications and also configure the system to capture various data elements in the onboarding application.

. Creating Fund management portal to view the investors and their application status.

. The platform requires integration with World-check APIs for KYC requirements. This information is further used in the risk rating engine to calculate the overall risk for each investor.

. The platform requires integration with DocuSign so that investors can sign the agreement electronically.

. The platform must use an existing identity management system instead of building its own identity system.

. The platform should be configurable from the fund administration portal so that the separate installation of the same platform can be used by any other fund administration company.

. The organizations and contact information stored in multiple installations must be synchronized and can be used to speed up the overall application process.

. The investor portal, fund admin portal and fund management portal branding (which includes primary color and logo) can be configured from the admin portal.


1.2. High-Level Objectives of project or system
The onboarding project will meet the following objectives

. Allows fund managers and fund administrators to create a new fund, its description, and other key metadata, without intervention by IT personnel.

. Allows fund administrators to create different application forms and configure it as per fund domicile and investor type as per the requirement from a specific jurisdiction.

. Allows fund administrators to create new risk rating parameters, change their weightage, and use these rating parameters in different application forms.

. Allows investors to fill up all the information in the application form, upload required documents, and submit it for review.

. Allows fund administrator to review the online submitted application.

. Reduce the total cycle time for the onboarding of the investor.

2. Application Architecture
This section describes the application architecture of the onboarding platform. The technologies and architecture have been finalized after considering the requirements and after a series of discussions with key stakeholders in Coforge and ApexFAC.
The various technologies are chosen after thorough analysis. In this section the final selected technologies are decisions are mentioned.
The application architecture is explained by breaking out the different layers involved: Presentation, Application, Data, and Integration. Physical resources are not represented in this section but logical representations are used instead.


2.1. Description
I. Users: The different types and classes of users of the system.

. Fund Administrators
. Fund Managers
. Investors
II. Clients: The different types of clients that are used by users.

Modern Browsers – Chrome, Firefox, and Safari. The application will be used on the desktop by all types of users.
III. Presentation Layer Bootstrapping
The presentation layer is built using ReactJs and NextJs JavaScript frameworks.
The following diagram shows how the presentation layer runs the process to render the first screen to the user. After the successful execution of the first process, the client-side code components call various microservices to provide business functionality in the application.


React JS and Next JS single page application bootstrapping

Explanation:

a. User hits the website site URL using a modern browser.

b. The request is received by the web server, where application bootstrapping code calls the Global Web Service to validate the domain URL.

c. The global service returns the branding configuration associated with the domain to the Web server.

d. Once the web server receives the response from the Global Service, it sends all the branding configurations along with compiled JavaScript files and CSS files to the browsers to render the application page.
