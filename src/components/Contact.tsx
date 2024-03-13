import "./Contact.css";
import {sendNotification} from "./helpers.tsx";

function Contact() {
	function notifyMe(event: any) {
		event.preventDefault();

		let email = document.querySelector(
			"input[placeholder='Email']"
		) as HTMLInputElement;
		let emailaddress = email.value;
		if (emailaddress === "") {
			alert("Please enter a valid email address");
			return;
		}
		let name = document.querySelector(
			"input[placeholder='Name']"
		) as HTMLInputElement;
		let message = document.querySelector(
			"textarea[placeholder='Message']"
		) as HTMLTextAreaElement;
		let data = {
			email: emailaddress,
			name: name.value,
			message: message.value,
		};
		sendNotification(data);
		alert("Message sent!");
		email.value = "";
		name.value = "";
		message.value = "";
	}

	return (
		<>
			<div className="backing">
				<main className="contactMain">
					<h1>Contact Details</h1>
					<div className="contactDetails">
						<p>Phone: 123-456-7890</p>
						<p>Email: </p>
						<p>LinkedIn: </p>
					</div>

					<div className="contactform">
						<h1>Direct Message</h1>
						<form>
							<input type="text" placeholder="Name" />
							<input type="text" placeholder="Email" />
							<textarea placeholder="Message" />
							<button id="contactSendButton" onClick={notifyMe}>
								Send
							</button>
						</form>
					</div>
				</main>
			</div>
		</>
	);
}

export default Contact;
