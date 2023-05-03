document.getElementById("log-out").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: form.get("username"),
        password: form.get("password"),
      }),
    };
  
    const response = await fetch("http://localhost:3000/users/logout", options);
    const data = await response.json();
    console.log(data);
  
    localStorage.removeItem(data.token);
    window.location.assign("login.html");
  });
  
  console.log("Loaded!");