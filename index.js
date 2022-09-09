var token = JSON.parse(localStorage.getItem('user'));

if(!token){
   window.location.replace('/login.html')
}