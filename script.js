const answers = ["It is certain", "Reply hazy", "Do not count on it", 
                "It is decidedly so", "Ask again later", "My reply is no", 
                "Without a doubt", "Better not tell you now", "My sources say no", 
                "Yes, definitely", "Cannot predict now", "Outlook not so good", 
                "You may rely on it", "Concentrate and ask again", "Very doubtful", 
                "As I see it, yes", "Most likely", "Outlook good", 
                "Yes", "Signs point to yes", "Try again"];

const btn = document.querySelector("#teller");

btn.addEventListener("click", function() {
  const answer = Math.floor(Math.random() * answers.length);
  document.querySelector("#ans").textContent = answers[answer];
});