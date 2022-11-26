# Download file using Express JS Response
download method is used to download/save any file using http response using that file URL. You can save it by another name simply using second parameter as the target name.
> Sample code | Download File
```javascript
res.download('/report-12345.pdf')
res.download('/report-12345.pdf', 'report.pdf')
res.download('/report-12345.pdf', 'report.pdf', (err) => {
  if (err) {
    // Handle error, but keep in mind the response may be partially-sent
    // so check res.headersSent
  } else {
    // decrement a download credit, etc.
  }
})
```
# REDIRECT USING EXPRESS JS
Redirects to the URL derived from the specified path, with specified status, a positive integer that corresponds to an HTTP status code . If not specified, status defaults to “302 “Found”.
> Sample Code | redirect URL
```javascript
res.redirect('/foo/bar')
res.redirect('http://example.com')
res.redirect(301, 'http://example.com')
res.redirect('../login')
```
Redirects can be a fully-qualified URL for redirecting to a different site:
```javascript
res.redirect('http://google.com')
```
Redirects can be relative to the root of the host name. For example, if the application is on http://example.com/admin/post/new, the following would redirect to the URL http://example.com/admin:
```javascript
res.redirect('/admin')
```
Redirects can be relative to the current URL. For example, from http://example.com/blog/admin/ (notice the trailing slash), the following would redirect to the URL http://example.com/blog/admin/post/new.
```javascript
res.redirect('post/new')
```
Redirecting to post/new from http://example.com/blog/admin (no trailing slash), will redirect to http://example.com/blog/post/new.

If you found the above behavior confusing, think of path segments as directories (with trailing slashes) and files, it will start to make sense.

Path-relative redirects are also possible. If you were on http://example.com/admin/post/new, the following would redirect to http://example.com/admin/post:
```javascript
res.redirect('..')
```
A back redirection redirects the request back to the referer, defaulting to / when the referer is missing.
```javascript
res.redirect('back')
```

# SET COOKIES USING EXPRESS JS
Sets cookie name to value. The value parameter may be a string or object converted to JSON.
The options parameter is an object that can have the following properties.
[See more Here | Set Cookies](https://expressjs.com/en/5x/api.html#res.cookie)
> Sample Code | Set Cookies
```javascript
app.get('/set-cookies',(req,res)=>{
    res.cookie('name','Ruman Hossain');
    res.cookie('city','Rangpur');
    res.cookie('profession','Software Engineer');
    res.cookie('username', 'Ruman_Hossain');
    res.cookie('email','ruman.cse.brur@gmail.com');
    res.status(201).end('Cookie Set Successful');
    console.log("Cookie Set Successful!");
});
```
# CLEAR COOKIES USING EXPRES JS
Removes information from cookies. You can see more details here [Clear cookies](https://expressjs.com/en/5x/api.html#res.clearCookie)
>Sample codes | clear Cookies
```javascript
app.get('/clear-cookies',(req,res)=>{
    res.clearCookie('username');
    res.clearCookie('email');
    res.status(200).end(`Username and Email Cleared from Cookies`);
    console.log(`Username and Email is cleared from cookies`);
});
```
**NB : ( Set cookies | Clear Cookies )** You can be able to see output using [Postman]() or Inspect Element then See Cookies of your Browser