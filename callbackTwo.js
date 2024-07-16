function markAsDelivered(orderId, callback) {
  setTimeout(() => {
    if(orderId){    
     callback(orderId);
    }
    else {
     callback(null);
    }
  }, 1000);
}

createOrder(foodOrderArray, funtion(orderId){
      markAsDelivered(foodOrderArray, function(orderId){
        if(orderId){    
          console.log(`${orderId} - Mark as delivered after payment💸`);    
        }
        else {
          console.log('Not able to process the order');    
        }
      })
});