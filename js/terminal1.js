const terminal = document.getElementById("terminal");
const commandInput = document.getElementById("commandInput");

const responses = {
    "help": "Available commands: help, joke, weather, fact, exit, kill, ssh, hello, hire-me",
    "joke": "Why do JavaScript developers wear glasses? Because they don’t C#.",
    "weather": "Today's forecast: Cloudy with a 90% chance of bugs.",
    "fact": "A group of flamingos is called a 'flamboyance'. Just like my code.",
    "exit": "Goodbye! you really thought you can leave...Dayummmm!",
    "kill": "<img src='https://i.pinimg.com/474x/be/0b/79/be0b790b7656a6a0b76ee3124c4591f1.jpg' alt='Kill Meme' width='200' />",
    "ssh": "<img src='https://24.media.tumblr.com/ee52e10dbf5d0288c46813e44e7bb1fe/tumblr_n40lw6E6fO1smcbm7o1_400.gif' alt='SSH GIF' width='200' />",
    "hello": "<img src='https://gifdb.com/images/high/finding-dory-just-saying-hi-pznsyf2xc7mtwzuo.gif' alt='Hello GIF' width='200' />",
    "hire-me": "<img src='https://www.icegif.com/wp-content/uploads/2023/04/icegif-115.gif' alt='Hired GIF' width='200' />"
};

commandInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        let command = commandInput.value.trim().toLowerCase();
        commandInput.value = "";

        let output = responses[command] || "Command not found. Try 'help'.";
        terminal.innerHTML += `<p class='prompt'>~ &gt; ${command}</p>`;
        terminal.innerHTML += `<p>${output}</p>`;
        terminal.scrollTop = terminal.scrollHeight;
    }
});
