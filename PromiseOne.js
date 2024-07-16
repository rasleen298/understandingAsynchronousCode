const promiseExample = createOrder(foodOrderArray).then(
      console.log("order is created, proceed to next steps..")
).catch(error){
      console.log("failed to created order due to ${error}")
}