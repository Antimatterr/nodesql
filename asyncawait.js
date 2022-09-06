//these actions should be performed in order 
// 1.register 
// 2.send welcome email
// 3.login
// 4.get user data
// 5.display user data


let token;
function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      token = "aslkdjldk@@131#"
      console.log('register')
      resolve(token);
    }, 2000);
  })
}

function sendEmail(token) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      console.log('send mail' + token)
      resolve();
    }, 3000);
  })

}


function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('login')
      resolve();
    }, 2000);
  })

}

function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('user data')
      resolve();
    }, 1000);
  })

}


function displayUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('display')
      resolve();
    }, 1000)
  })

}


async function authenticate() {

  try {
    const token = await register();
    await sendEmail(token);
    await login();
    await getUserData();
    await displayUserData();

  } catch (err) {
    console.log(err);
  }

}

authenticate().then(() => {
  console.log("completed")
}).catch((err) => {
  console.log(err);
})