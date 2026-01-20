const send = document.getElementById("send");

send.addEventListener("click", () => {
    const data = {
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        phone: document.getElementById("phone").value,
        code: document.getElementById("code").value
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    .then(response => response.json())
    .then(result => {
        console.log("გაგზავნილია:", result);
        alert("განცხადება მიღებულია, მალე დაგიკავშირდებით")
    })
    .catch(error => {
        console.error("შეცდომა:", error);
    });
})