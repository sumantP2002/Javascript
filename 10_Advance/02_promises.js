//promise in an object
/*
const prommiseOne = new Promise(function(resolve , reject){
    //do an async task
    setTimeout(() => {
        console.log('async task is complete');
        resolve();
    }, 1000);
})

prommiseOne.then(function(){
    console.log('promise consumed');
})

*/
//2nd promise
/*
new Promise(function(resolve , reject){
    setTimeout(() => {
        console.log("async task 2");
        resolve();
    } , 1000)
}).then(function(){
    console.log('async task 2 completed');
})
*/

//third promise
/*
const PromiseThree = new Promise(function(resolve , reject){
    setTimeout(() => {
        const data = {
            username: "chai", 
            email: "chai@example.com"
        }
        resolve(data);
    } , 2000);
});

PromiseThree.then(function(user){
    console.log(user);
})
*/

//fourth promise
/*
const promiseFour = new Promise(function(resolve , reject){
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username: "sumant" , password: "123"});
        }
        else{
            reject('error: something went wrong')
        }
        
    }, 200)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((myusername)=>{
    console.log(myusername);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("either reject or then is done");
})

// .finally always works
*/

//promise five
/*
const PromiseFive = new Promise(function(resolve , reject){
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username: "sumant" , password: "123"});
        }
        else{
            reject('Error: something went wrong')
        }
        
    }, 200)
})

async function consuemPromisefive(){
    try {
        const response = await PromiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consuemPromisefive();
*/

//writing fetch code using async await or .then .catch
//async await
/*
async function getAllUsers(){
    try{
        const response = await fetch('https://api.github.com/users/sumantP2002');
        const data = await response.json();
        console.log(data);
    } catch(error){
        console.log(`E : ${error}`);
    }
}

getAllUsers();
*/

//fetch is a promise
fetch('https://api.github.com/users/sumantP2002').then((data) => {
    return data.json();
}).then((data)=>{
    console.log(data.name);
})

.catch((error)=>{
    console.log(`E: ${error}`);
})

//reject me sirf tabhi jaiga jab client request hi nahi kar paya hai
//all other including 200 , 404 all come in response