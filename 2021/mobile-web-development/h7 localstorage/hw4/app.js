


if(navigator.serviceWorker) {
  
    navigator.serviceWorker.register('./service-worker.js',{scope:'index.html'})
    .then(function(registration){
      console.log('Registration of service worker successful with scope:',registration.scope);
    }).catch(function(err) {
      console.log("Registration of service worker failed with error:",err)
    })
} else {
  console.log('Service Worker is not supported by the browser')
}



