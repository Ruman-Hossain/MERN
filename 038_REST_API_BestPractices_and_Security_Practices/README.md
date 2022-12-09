# STATUS CODE (Most USED)
|     Code    	|     Meaning                            	|     Description                                                                                                                                   	|
|-------------	|----------------------------------------	|---------------------------------------------------------------------------------------------------------------------------------------------------	|
|     200     	|     OK                                 	|     The   request is OK (this is the standard response for successful HTTP requests)                                                              	|
|     201     	|     Created                            	|     The   request has been fulfilled, and a new resource is created                                                                               	|
|     202     	|     Accepted                           	|     The   request has been accepted for processing, but the processing has not been   completed                                                   	|
|     203     	|     Non-Authoritative   Information    	|     The   request has been successfully processed, but is returning information that   may be from another source                                 	|
|     204     	|     No   Content                       	|     The   request has been successfully processed, but is not returning any content                                                               	|
|     205     	|     Reset   Content                    	|     The   request has been successfully processed, but is not returning any content,   and requires that the requester reset the document view    	|
|     200     	|     OK                                 	|     The   request is OK (this is the standard response for successful HTTP requests)                                                              	|
|     201     	|     Created                            	|     The   request has been fulfilled, and a new resource is created                                                                               	|
|     202     	|     Accepted                           	|     The   request has been accepted for processing, but the processing has not been   completed                                                   	|
|     203     	|     Non-Authoritative   Information    	|     The   request has been successfully processed, but is returning information that   may be from another source                                 	|
|     204     	|     No   Content                       	|     The   request has been successfully processed, but is not returning any content                                                               	|
|     205     	|     Reset   Content                    	|     The   request has been successfully processed, but is not returning any content,   and requires that the requester reset the document view    	|
|     408     	|     Request   Timeout                  	|     Request   Timeout                                                                                                                             	|
|     500     	|     Internal   Server Error            	|     A   generic error message, given when no more specific message is suitable                                                                    	|
|     502     	|     Bad   Gateway                      	|     The   server was acting as a gateway or proxy and received an invalid response from   the upstream server                                     	|
|     503     	|     Service   Unavailable              	|     The   server is currently unavailable (overloaded or down)                                                                                    	|
# API NAMING BEST PRACTICES
- Restful URIs should not indicate any kind of CRUD ( Create, Read, Update and Delete ) functionality. Instead, REST APIs should allow you to manipulate a resource
> Example: instead of /getUser write <font style="color:green">/user/{id} </font>
- Forward Slashes are conventionally used to show the hierarchy between individual resources and collections
>Example: <font style="color:green">/user/{id}/address</font> clearly falls under the <font style="color:green">/user/{id}</font> which falls under the <font style="color:green">/user</font> collection
- Punctuation for lists: 
When there is no hierarchical relationship (such as in lists), punctuation marks such as the semicolon, or, more frequently, the comma should be used. 
> Example: <font style="color:green">/users/{id1},{id2}</font> to access multiple user resources 

- **Query parameters where necessary:** 
In order to sort or filter a collection, a REST API should allow query parameters to be passed in the URI.
> Example: to find all users living in the United States 

- **Lowercase letters and dashes:**
By convention, resource names should use exclusively lowercase letters. Similarly, dashes (-) are conventionally used in place of underscores (_).
> Example: <font style="color:green">/users/{id}/pending-orders</font> instead Of <font style="color:red">/users/{id}/Pending_Orders</font>
- **No file extensions:** 
Leave file extensions (such as .xml) out of your URIs. We’re sorry to say it, but they’re ugly and add length to URIs. If you need to specify the format of the body, instead use the Content-Type header
 > Example: <font style="color:green">/users/{id}/pending-orders</font> instead Of <font style="color:red">/users/{id}/pending- 
orders. xml</font>
- **No trailing forward slash:** Similarly, in the interests of keeping URIs clean, do not add a trailing forward slash to the end of URIs. 
> Example: <font style="color:green">/users/{id}/pending-orders</font> instead Of <font style="color:red">/users/{id}/pending- 
orders/ </font>

# Express REST API Project Structure
## Steps to be followed While Creating Express REST API Project
1. Create  a project folder 
2. Create <font style="color:blue">package.json </font>
3. Install <font style="color:blue">express </font>
4. Install node <font style="color:blue">packages </font>
5. Create <font style="color:blue">index.js @ </font>root
6. Create <font style="color:blue">app.js </font>@root 
7. Create <font style="color:blue">config.env </font>@root
8. Create <font style="color:blue">src </font>directory 
9. Create <font style="color:blue">src->controllers </font>folder 
10. Create <font style="color:blue">src->models </font>folder 
11. Create <font style="color:blue">src->routes </font>folder 

