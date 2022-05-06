

       if(navigator.serviceWorker) {
           navigator.serviceWorker.register('service-worker.js')
           .then(function(registration){
               console.log('Registration of service worker succcessfully');
           }).catch(function(err){
               console.log('Registration of service worker failed with error: ', err)
           })
        } else {
           console.log('Service Worker is not supported by this browser')
       }
