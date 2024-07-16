let foodOrderArray = ['pizza','burger','soda'];

const callbackExample = createOrder(foodOrderArray, function(orderId){
          console.log("order is created, proceed to next steps..")
}