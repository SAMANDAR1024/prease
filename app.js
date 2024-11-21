

  document.addEventListener("DOMContentLoaded", () => {
    let container = document.querySelector("#user-container");
    let searchInput = document.querySelector(".input-group");
  
    let users = JSON.parse(localStorage.getItem("cards"));
  
    function displayCards(datas) {
      container.innerHTML = ""; 
      datas.forEach((user) => {
        let card = document.createElement("div");
        let name = document.createElement("h2");
        let username = document.createElement("h3");
        let email = document.createElement("p");
  
        name.textContent = user.name;
        username.textContent = user.username;
        email.textContent = user.email;
  
        card.append(name, username, email);
        container.append(card);
  
        card.classList.add("card", "p-3", "bg-info");
        card.style.width = "300px";
        card.style.cursor = "pointer";
  
        card.addEventListener("click", () => {
          window.location.href = `/user.html?${user.id}`;
        });
      });
    }
  
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase();
      const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(query)
      );
      displayCards(filteredUsers);
    });
  
    displayCards(users);
  });
  

  