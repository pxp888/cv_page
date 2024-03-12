import "./Contact.css";

function Contact() {
	return (
		<>
			<div className="contactBacking">
				<main>
					<div className="contact">
						<p>Phone: 123-456-7890</p>
						<p>Email: </p>
						<p>LinkedIn: </p>
						<p>GitHub: </p>
					</div>

					<div className="contactform">
						<form>
							<input type="text" placeholder="Name" />
							<input type="text" placeholder="Email" />
							<textarea placeholder="Message" />
							<button type="submit">Send</button>
						</form>
					</div>
				</main>
			</div>
		</>
	);
}

export default Contact;
