import "./DeleteButton.css";

const DeleteButton = (props) => {
	return (
		<button
			className="DeleteButton"
			onClick={props.deleteMovie}>
			Vymazať film
		</button>
	);
};

export default DeleteButton;
