## NODE JS Live Terminal/OUTPUT Generate Configuration
## First Open Terminal in your Working Directory
##  1. Create ***package.json*** file 
```powershell
    npm init --y 
```
## 2. Now Install <mark style="background-color:gray"> nodemon </mark> Package to see live output
```powershell
npm install nodemon         
```
## 3. Now Edit the ***YourProjectName>Package.json*** File
This will be used to run your live Terminal/Server. *start-dev* name can be anything according to your choice but this is standard. **index.js** is the file that you want to run.
```json
  "scripts": {
    "start-dev": "nodemon index.js"  
  }
  ```

## 4. To Run Live Server Now Run
```shell
  npm run start-dev
```
## Now change <mark>index.js</mark> file output will be udpated automatically
