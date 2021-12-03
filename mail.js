document.getElementById("button_mymail").addEventListener("click", (event)=> {
      event.preventDefault();
      let input = document.createElement("input");
      input.placeholder="test@mail.com"
      input.name="email[]"
      input.type="email"
      document.getElementById("block_mymail").appendChild(input);
    })