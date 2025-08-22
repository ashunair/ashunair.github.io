// const terminal = document.getElementById("terminal");
// const commandInput = document.getElementById("commandInput");

// const responses = {
//     "help": "Available commands: help, joke, weather, fact, exit, kill, ssh, hello, hire-me",
//     "joke": "Why do JavaScript developers wear glasses? Because they don’t C#.",
//     "weather": "Today's forecast: Cloudy with a 90% chance of bugs.",
//     "fact": "A group of flamingos is called a 'flamboyance'. Just like my code.",
//     "exit": "Goodbye! you really thought you can leave...Dayummmm!",
//     "kill": "<img src='https://i.pinimg.com/474x/be/0b/79/be0b790b7656a6a0b76ee3124c4591f1.jpg' alt='Kill Meme' width='200' />",
//     "ssh": "<img src='https://24.media.tumblr.com/ee52e10dbf5d0288c46813e44e7bb1fe/tumblr_n40lw6E6fO1smcbm7o1_400.gif' alt='SSH GIF' width='200' />",
//     "hello": "<img src='https://gifdb.com/images/high/finding-dory-just-saying-hi-pznsyf2xc7mtwzuo.gif' alt='Hello GIF' width='200' />",
//     "hire-me": "<img src='https://www.icegif.com/wp-content/uploads/2023/04/icegif-115.gif' alt='Hired GIF' width='200' />"
// };

// commandInput.addEventListener("keypress", function(event) {
//     if (event.key === "Enter") {
//         event.preventDefault();
//         let command = commandInput.value.trim().toLowerCase();
//         commandInput.value = "";

//         let output = responses[command] || "Command not found. Try 'help'.";
//         terminal.innerHTML += `<p class='prompt'>~ &gt; ${command}</p>`;
//         terminal.innerHTML += `<p>${output}</p>`;
//         terminal.scrollTop = terminal.scrollHeight;
//     }
// });

// // Working CODE 
// const terminal = document.getElementById("terminal");
// const commandInput = document.getElementById("commandInput");

// // Replace this with your deployed Cloud Function/Cloud Run URL
// const CLOUD_FUNCTION_URL = "https://rag-response-828703860413.us-central1.run.app/hello_http";



// commandInput.addEventListener("keypress", function(event) {
//     if (event.key === "Enter") {
//         event.preventDefault();
//         let command = commandInput.value.trim();
//         commandInput.value = "";

//         // Display user input in terminal
//         terminal.innerHTML += `<p class='prompt'>~ &gt; ${command}</p>`;
//         terminal.scrollTop = terminal.scrollHeight;

//         // Prepare payload (must match what your function expects)
//         const payload = { name: command };

//         // Call Cloud Function
//         fetch(CLOUD_FUNCTION_URL, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(payload)
//         })
//         .then(res => res.text())  // Your Cloud Function currently returns plain text (Hello X!)
//         .then(data => {
//             terminal.innerHTML += `<p>${data}</p>`;
//             terminal.scrollTop = terminal.scrollHeight;
//         })
//         .catch(error => {
//             terminal.innerHTML += `<p class="error">Error: ${error.message}</p>`;
//             terminal.scrollTop = terminal.scrollHeight;
//         });
//     }
// });



// TEST CODEEE

const terminal = document.getElementById("terminal");
const commandInput = document.getElementById("commandInput");

// Your Cloud Run/Function URL
const CLOUD_FUNCTION_URL = "https://rag-response-828703860413.us-central1.run.app/hello_http";

function renderAnswer(payload) {
  const { answer_text, inline_cited_html, citations } = payload;

  // Answer with inline superscripts
  terminal.innerHTML += `<div class="answer">${inline_cited_html || answer_text}</div>`;

  // Footnotes
  if (Array.isArray(citations) && citations.length > 0) {
    let foot = `<ol class="footnotes">`;
    citations
      .sort((a, b) => a.idx - b.idx)
      .forEach(c => {
        const pages = c.pages ? ` (pp. ${c.pages})` : "";
        const safeTitle = (c.title || "").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        const safeUri = (c.uri || "").replace(/"/g, "&quot;");
        foot += `<li id="cite-${c.idx}">
                  <strong>[${c.idx}]</strong> ${safeTitle}${pages}
                  — <a href="${safeUri}" target="_blank" rel="noopener noreferrer">${safeUri}</a>
                 </li>`;
      });
    foot += `</ol>`;
    terminal.innerHTML += foot;
  }

  terminal.scrollTop = terminal.scrollHeight;
}

commandInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const command = commandInput.value.trim();
    if (!command) return;
    commandInput.value = "";

    // echo user input
    terminal.innerHTML += `<p class='prompt'>~ &gt; ${command}</p>`;
    terminal.scrollTop = terminal.scrollHeight;

    // POST {query: "..."} to your function
    fetch(CLOUD_FUNCTION_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: command })
    })
      .then(async (res) => {
        // Handle both JSON and text (fallback)
        const ct = res.headers.get("content-type") || "";
        if (ct.includes("application/json")) return res.json();
        const text = await res.text();
        return { answer_text: text, inline_cited_html: text, citations: [] };
      })
      .then((payload) => {
        renderAnswer(payload);
      })
      .catch((error) => {
        terminal.innerHTML += `<p class="error">Error: ${error.message}</p>`;
        terminal.scrollTop = terminal.scrollHeight;
      });
  }
});
