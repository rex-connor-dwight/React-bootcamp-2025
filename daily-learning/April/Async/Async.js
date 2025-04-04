

const Async = () => {


    // console.log(`Start`)

    const arv = () => console.log(`Async Task`)

    // setTimeout(arv, 3000)

    // console.log(`End`)

    // setTimeOut
    // setTimeout(callbackFunction, delayInMilliseconds);


    // Promises
    // const myPromise = new Promise((resolve, reject) => {
    //     // Async operation
    //     if (/* operation successful */) {
    //         resolve(value); /* Fuillied*/
    //     } else {
    //         reject(error); /* Reject the promise*/
    //     }
    // })

    // const OurPromise = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         const logIn = true;
    //         if (logIn) resolve(`Loign Successful`);
    //         else reject(`Error login in`);
    //     }, 2000)
    // }) ;

    // const OverOne = (data) => console.log(data)
    // const errorMessage = (err) => console.log(err)

    // OurPromise.then(OverOne)
        

    // .catch(errorMessage);
    // console.log(typeof OurPromise.then)
    
    // Math.ceil()



    // const jsd = (resolve, reject) => {
    //     const signIn = true 
    //     if (signIn) resolve(`User signed in`)
    //         else reject(`Unable to signin this user`)
    // }

    // const xoor = () => {
    //     setTimeout(jsd, 2000)
    // }

    const Authentication = new Promise((resolve, reject) => {

        const whatToResolve = `User signed in`
        const whatToReject = `Unable to signin this user`

            const jsd = () => {
                const signIn = true 
                if (signIn) resolve(whatToResolve)
                   else reject(whatToReject)
            }

        setTimeout(jsd, 2000)
    })

    Authentication
        .then((john) => console.log(john))
        .catch((error) => console.log(error))


    
   
}

export default Async

