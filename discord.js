function discordMessage(webhook, message) {
	const data = {
    content: message
    };
    fetch(webhook, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    })
    .then(response => {
    console.log("DISCORD WEBHOOK", response.status, response.statusText)
    })
    .catch(error => {
    console.error("DISCORD WEBHOOK ERROR", error);
    });
};
function discordEmbed(webhook, title, description, color) {
    console.log(color)
	const data = {
    embeds: [
        {
        title: title,
        description: description,
        color: color,
        }
    ]
    };
    fetch(webhook, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    })
    .then(response => {
    console.log("DISCORD WEBHOOK", response.status, response.statusText);
    })
    .catch(error => {
    console.error("DISCORD WEBHOOK ERROR", error);
    });
};