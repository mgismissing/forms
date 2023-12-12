const delay = ms => new Promise(res => setTimeout(res, ms));
async function submitGET() {
	document.getElementById("submit").disabled = true;
	document.getElementById("submit").value = "Sending form via GET request...";
	var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        console.log(xmlHttp.status, xmlHttp.statusText);
		if (xmlHttp.status == 0) {
			document.getElementById("submit").value = "Website Is Offline (" + xmlHttp.status + ")";
		} else {
			document.getElementById("submit").value = xmlHttp.statusText + " (" + xmlHttp.status + ")";
		};
		if (xmlHttp.status == 200) {
			document.getElementById("submit").style.borderColor = "#55aa55";
			document.getElementById("submit").style.backgroundColor = "#eeffee";
		} else {
			document.getElementById("submit").style.borderColor = "#aa5555";
			document.getElementById("submit").style.backgroundColor = "#ffeeee";
		};
    };
	try {
		xmlHttp.open("GET", param1 + "?a=" + encodeURIComponent(document.getElementById("a").value) + "&b=" + encodeURIComponent(document.getElementById("b").value) + "&c=" + encodeURIComponent(document.getElementById("c").value), true);
		xmlHttp.send(null);
	} catch (error) {
		document.getElementById("submit").value = "JavaScript Error (Missing Element)";
	};
	await delay(2000);
	window.location.reload();
};
async function submitDWHEmbed(webhook, title, description, color) {
	document.getElementById("submit").disabled = true;
	document.getElementById("submit").value = "Sending form via Discord WebHook...";
	discordEmbed(webhook, title, description, color);
	document.getElementById("submit").value = "Sent";
	await delay(2000);
	window.location.reload();
};
async function submitDWHMessage(webhook, message) {
	document.getElementById("submit").disabled = true;
	document.getElementById("submit").value = "Sending form via Discord WebHook...";
	discordMessage(webhook, message);
	document.getElementById("submit").value = "Sent";
	await delay(2000);
	window.location.reload();
};