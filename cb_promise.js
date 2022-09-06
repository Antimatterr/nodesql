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

function register(cb) {
  setTimeout(() => {
    console.log('register')
    cb();
  }, 2000);
}

function sendEmail(cb) {
  setTimeout(() => {
    console.log('send mail')
    cb();
  }, 3000);
}


function login(cb) {
  setTimeout(() => {
    console.log('login')
    cb();
  }, 1000);
}

function getUserData(cb) {
  setTimeout(() => {
    console.log('user data')
    cb();
  }, 1000);
}


function displayUserData() {
  setTimeout(() => {
    console.log('display')
  }, 1000)
}

// console.log("other")

register(() => {
  sendEmail(() => {
    login(() => {
      getUserData(() => {
        displayUserData();
      });

    });

  });

});
