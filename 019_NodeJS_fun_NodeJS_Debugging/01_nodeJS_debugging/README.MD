### NODE.JS DEBUGGING
we are going to use **Rest Countries** API to to learn debugging
we will call the api using axios and will check how the data flow is running on each stage
[Rest Countries](https://restcountries.com/) from this website we will **get** <i>all</i> data through this url
[https://restcountries.com/v2/all](https://restcountries.com/v2/all)
## STEP-1: Install Required Package *AXIOS* 
you can skip this step if you are going to debug any other file or code of *node.js* We are going to see see the API Response through axios hence we are installing this.
```shell
npm install axios
```
## STEP-2: Open the file or code that you want to debug 
Insert the Required code that you want to debug or open the file that you want to debug. Debugging file can be anything that you working on. In this case as we are going to debug **API Response** Hence we installed axios and we need to that file. we have **index.js** file which we want to debug
>File: nodeJS_Debugging -> index.js
```javascript
var axios = require('axios');
var URL="https://restcountries.com/v2/all";
// Payment
// SMS
// Paid API
// CSRF Sec
// DOS Attck...

axios.get(URL).then(function (response) {
    let CountryList=response.data;
    let StatusCode=response.status;

    console.log(CountryList)
    console.log(StatusCode)


}).catch(function (error){
    console.log(error)
});
```
## STEP-3: Debugging point Selection (Visual Studio Code)
Suppose we want to see the variable value 
- **URL**
- **CountryList**
- **StatusCode**

then we need to select that row as debugging point. So that we can see actually what is happening there

## STEP-4: Watch Variable Set(Visual Studio Code)
From the left navigation Click **Run and Debug** Now will be able to see debugging sections opened. 
Where,
- **Variables :** Local and Global Variables will be displayed Here
- **Watch :** You can add the variable names clicking the **+** sign that you want to watch how it is changing
- **Call Stack :** Calling Stack Sequencewill be Displayed
- **Loaded Scripts :**  Running Script will be displayed here.
- **Breakpoints** Breakpoints that you have given to watch varibles will be displayed

Now add the watch variables so that you can understand what is actually happening while moving step by step.
## STEP-4: Run and Debug (Visual Studio Code)
At the left top you will be able to see the option **RUN AND DEBUG** from here you need to slect the debugger. As we are debugging **node.js** file select **node.js** as debugger and select **current file** from the confugration option that will show as pop up.
## STEP-5: Step By Step Debugging
Now click the **Run** Icon and a debugging **menu** will pop up.
Here you will be able to see these options
- **Continue (F5) :**
- **Step Over (F10) :** To Display the Finall Value after debugging
- **Step Into (F11) :** Step by Step Debugging
- **Step Out (Shif+F11) :**
- **Restart (Ctrl+Shift+F5) :** To Restart the Debugging
- **Stop (Shift+F5) :**  To Close the Debugging Mode

Now Press **Step Into (F11)** to see output on each step in the **Watch**, **Variables**, **Call Stack**, **BreakPoints** Section.
## NOTE: Skip if Any build In File Opens while Debugging
```javascript
axios.get(URL).then(function (response)
```
When you are on this line you may see that another file is opening. We don't need to see that build in File. Hence You can press **Continue (F5)** to simply Skip this line. and then press **Step Into (F11)** and can complete the process of Debugging.
## Extra: Different State Checking to Understand
You can give the wrong URL or make any error in the code and see what happens.
# Happy Debugging | Enjoy coding