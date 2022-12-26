import "./Movie.css";
import data from "../data";
import DeleteButton from "./DeleteButton";
import DeleteAll from "./DeleteAll";
import RefreshAll from "./RefreshAll";
import { useState } from "react";

const Movie = () => {
	const [movieList, setMovieList] = useState(data);
	const deleteMovie = (idecko) => {
		const filteredMovies = movieList.filter((oneMovie) => {
			return oneMovie.id !== idecko;
		});
		setMovieList(filteredMovies);
	};
	const deleteAll = () => {
		setMovieList([]);
	};
	const refreshAll = () => {
		setMovieList(data);
	};

	return (
		<section>
			<div className="Movie">
				{movieList.map((oneMovie) => {
					const { id, image, title, age, tags, description } = oneMovie;
					return (
						<div
							className="Movie-oneMovie"
							key={id}>
							<img
								src={image}
								alt="movie image"
							/>
							<h2>{title}</h2>
							<p>{age}</p>
							<p>{tags}</p>
							<p>{description}</p>
							<DeleteButton deleteMovie={() => deleteMovie(id)} />
						</div>
					);
				})}
			</div>
			<div className="Movie-btns">
				<DeleteAll deleteAll={deleteAll} />
				<RefreshAll refreshAll={refreshAll} />
			</div>
		</section>
	);
};

export default Movie;
