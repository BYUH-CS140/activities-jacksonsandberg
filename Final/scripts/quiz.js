function generateResult() {
    const results = [
      "You need a beachside bungalow!",
      "You’d love a quiet studio near campus.",
      "You belong in a social student house with roommates!",
      "You’d enjoy a private guest house in Laie."
    ];
    const randomResult = results[Math.floor(Math.random() * results.length)];
    document.getElementById("result").innerText = randomResult;
  }
  