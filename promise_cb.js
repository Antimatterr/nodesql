//these actions should be performed in order 
// 1.register 
// 2.send welcome email
// 3.login
// 4.get user data
// 5.display user data



function wait() {
  let ms = 3000 + new Date().getTime();
  while (new Date() < ms) { }
}

function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('register')
      resolve();
    }, 2000);
  })
}

function sendEmail() {
  return new Promise((reject, resolve) => {
    setTimeout(() => {
      console.log('send mail')
      resolve();
    }, 3000);
  })

}


function login() {
  return new Promise((reject, resolve) => {
    setTimeout(() => {
      console.log('login')
      resolve();
    }, 1000);
  })

}

function getUserData() {
  return new Promise((reject, resolve) => {
    setTimeout(() => {
      console.log('user data')
      resolve();
    }, 1000);
  })

}


function displayUserData() {
  return new Promise((reject, resolve) => {
    setTimeout(() => {
      console.log('display')
      resolve();
    }, 1000)
  })

}

// console.log("other")

register()
  .then(sendEmail)
  .then(login)
  .then(getUserData)
  .then(displayUserData)


