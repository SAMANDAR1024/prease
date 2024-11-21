
  document.addEventListener("DOMContentLoaded", () => {
    let userId = location.search.slice(1);
    let users = JSON.parse(localStorage.getItem("cards"));
    let user = users.find((u) => u.id == userId);
  
    document.querySelector("#user-name").textContent = user.name;
    document.querySelector("#user-email").textContent = user.email;
    document.querySelector("#user-city").textContent = user.address.city;
    document.querySelector("#user-phone").textContent = user.phone;
    document.querySelector("#user-company").textContent = user.company.name;
  
    document.querySelector("#go-back").addEventListener("click", () => {
      window.location.href = "/index.html";
    });
  });
  

  