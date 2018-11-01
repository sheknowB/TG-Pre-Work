# TG-Pre-Work

## When we hit https://www.techtonicgroup.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.

The browser goes to the DNS server and looks up the IP address of the server where the website resides. The browser then sends an HTTP request message to the server asking it to send a copy of the website to the client. If the server approves it sends the client an OK message and then starts sending the data in little chunks, known as data packets. The browser assembles the data packets into a complete website and displays it in the browser.

## From start to finish how does that data reach you to be rendered in the browser?

A user types a URL into the address bar of a browser. The browser parses the URL to find the protocol, host, and path. To reach the host the domain name needs to be interpreted into an IP address. The browser then looks up the IP address through the Domain Name System (DNS). The browser then sends an HTTP request. The host then makes the connection with the server and sends the request. The server receives the request, searches for the data and sends the response back to the browser. The browser then displays the data retrieved.

## What code is rendered in the browser?

A browser renders HTML code.

## What is the server-side code’s main function?

The server-side code handles the HTTP requests, it retrieves records from databases, and because the code is handled on the server-side it maintains a higher level of security.    

## What is the client-side code’s main function?

Client-side code changes the interface behaviors within a specific webpage in response to mouse/keyboard actions or at specified timing events. The client-side content is generated within the client's browser/computer.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

As many as needed. It is my understanding that an instance is an object, so there could be a number of objects that define a class such as properties or behavior of the function.

## How many instances of the server-side code are available at any given time?

There are several instances of the server-side code available such as session, application, cache, request, response, server, user and trace.

## What is runtime?

The period during which a computer program is executing its code/instructions.

## How many instances of the the databases connected to the server application are created?

A computer can run multiple instances of the databases connected to the server application. An instance of the database operates as a service that handles all application requests to work with the data of the database managed by that instance.
