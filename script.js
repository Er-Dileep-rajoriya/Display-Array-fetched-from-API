document.addEventListener("DOMContentLoaded", () => {
  const fetchDataButton = document.getElementById("fetch-data-button");
  const dataOutput = document.getElementById("data-output");

  // Function to fetch data from API 1
  function promiseAPI1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        fetch("https://dummyjson.com/posts")
          .then((response) => response.json())
          .then((data) => {
            displayData(data.posts);
            resolve(true); // Resolve the promise
          })
          .catch((error) => console.error("Error fetching posts:", error));
      }, 1000); // Simulate 1 second delay
    });
  }

  // Function to fetch data from API 2
  function promiseAPI2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        fetch("https://dummyjson.com/products")
          .then((response) => response.json())
          .then((data) => {
            displayData(data.products);
            resolve(true); // Resolve the promise
          })
          .catch((error) => console.error("Error fetching products:", error));
      }, 2000); // Simulate 2 seconds delay
    });
  }

  // Function to fetch data from API 3
  function promiseAPI3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        fetch("https://dummyjson.com/todos")
          .then((response) => response.json())
          .then((data) => {
            displayData(data.todos);
            resolve(true); // Resolve the promise
          })
          .catch((error) => console.error("Error fetching todos:", error));
      }, 3000); // Simulate 3 seconds delay
    });
  }

  // Function to display data in the table
  function displayData(items) {
    items.forEach((item) => {
      const row = document.createElement("tr");
      const titleCell = document.createElement("td");
      const contentCell = document.createElement("td");

      titleCell.textContent = item.title || item.name || item.todo; // Adjust according to the API
      contentCell.textContent = item.body || item.description || item.completed; // Adjust according to the API

      row.appendChild(titleCell);
      row.appendChild(contentCell);
      dataOutput.appendChild(row);
    });
  }

  // Event listener for button click
  fetchDataButton.addEventListener("click", () => {
    // Clear previous data
    dataOutput.innerHTML = "";

    // Start the promise chain
    promiseAPI1()
      .then(() => promiseAPI2())
      .then(() => promiseAPI3())
      .catch((error) => console.error("Error in promise chain:", error));
  });
});
