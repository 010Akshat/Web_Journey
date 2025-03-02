/* Fetch is an Exciting Feature in Node.js.
->Initially xhr requests were used for web request.
->Then request was used
-> BUt when fetch was natively injected into Node.js developers were very happy ,
as web requests were made easy

HISTORY OF WEB REQUEST
In the early days of the web, it was difficult to perform asynchronous requests across websites;
developers had to use clumsy approaches to interact across multiple networks.

Internet Explorer 5 changed this in 1998 with the introduction of the XMLHttpRequest API. 
Initially, XMLHttpRequest was designed to fetch XML data via HTTP, hence the name. 
Sometime after it was released, however, support for other data formats 
— primarily JSON, HTML, and plaintext — was added.

The XMLHttpRequest API worked like a charm back then, but as the web grew, 
it became so difficult to work with that JavaScript frameworks, notably jQuery, 
had to abstract it to make implementation easier and success/error handling smoother.

Though the Fetch API has been around for a while now, it wasn’t included in the Node.js core because of some limitations.
In a question answered by one of Node’s core contributors, it was noted that the browser’s 
Fetch API implementation is dependent on a browser-based Web Streams API
and the AbortController interface (for aborting fetch requests), which wasn’t available in Node until recently.
As such, it was difficult to choose the best approach to include it in the Node core.

//---------------------------------------------------------------------
The global fetch() method starts the process of fetching a resource from the network , 
returning a promise which is fullfilled once the response is available.

// ++++ IMP: fetch() returns a promise.


//--------------------------Very Very Imp JS Interview Question----------------------------------
Question : You made a request From fetch. There you got erroe 404 . So this you will get in resolve or reject?
Solution: You will get that message in resolve not in reject 
because 
error you will get only when browser can't even make a request.

--------------Documentation for aboove question----------------
A fetch() promise only rejects when the request fails, for example, 
because of a badly-formed request URL or a network error. 
A fetch() promise does not reject if the server responds with HTTP status codes 
that indicate errors (404, 504, etc.).
Instead, a then() handler must check the Response.ok and/or Response.status properties.

// Now if developer want to send data like userid password then,,,

const headers = {
  'C ontent-Type': 'text/xml',
  'Breaking-Bad': '<3',
};
fetch('https://example.com/', { headers });
*/

/* Now go to copy, to understand internal working of fetch */
/* Also go to new copy for understandind asynchronous route of promise returned by fetch */
        
