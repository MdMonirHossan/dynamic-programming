const promise: Promise<string> = new Promise((resolve, reject) => {
  const success = false;
  if (success) {
    resolve("Promise is resolved");
  } else {
    reject("Promise is rejected..");
  }
  //   setTimeout(() => {
  //     resolve("Promise is resolved with data");
  //   });
});

// Execute promise with then chaining
promise
  .then((value) => {
    console.log("Promise is resolves with value ", value);
    return value;
  })
  .then((value) => {
    console.log("000000 value in second then ", value);
    return value;
  })
  .then((value) => {
    console.log("Got the value in 3rd then ", value);
  })
  .finally(() => {
    console.log("In finally block");
  })
  .catch((error) => {
    console.log("Promise is rejected with error ", error);
  });

// Execute promise with async/await
async function myPromise() {
  try {
    const value = await promise;
    console.log("Promise is resolved with value ", value);
  } catch (error) {
    console.log("Promise is rejected with error ");
  }
}

async function fetchAuthor() {
  const response = await fetch("http://localhost:3000/authors").catch(
    (error) => {
      throw new Error("Data fetch failed ---");
    }
  );

  if (!response.ok) {
    throw new Error("Data fetch failed");
  }
  return response.json();
}

fetchAuthor();

// fetch("http://localhost:3000/authors", {
//   method: "Post",
//   headers: {
//     "Content-Type": "json",
//   },
//   body: JSON.stringify({}),
// })
//   .then((response) => {
//     // if (!response.ok) return "something went wrong";

//     return response.json();
//   })
//   .then((responseData) => {
//     console.log(responseData);
//     return responseData;
//   })
//   .catch((error) => console.log("Error fetching data ", error));
