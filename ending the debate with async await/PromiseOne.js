function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data fetched successfully!');
      }, 1000); // Simulate an asynchronous operation with a 1-second delay
    });
  }
  

function fetchDataAsync() {
    console.log('Before fetching data');
  
    fetchData().then((data) => console.log(data)); 
  
    console.log('I logged instantly');
  }
  
  fetchDataAsync();