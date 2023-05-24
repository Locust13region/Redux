import { useDispatch, useSelector } from "react-redux";
import { inc, dec, rnd } from "../src/store/counterSlice";

const App = () => {
	const dispatch = useDispatch();
	const count = useSelector((state) => state.countStore.counter);
	return (
		<div className="jambotron">
			<h1>
				Conut: <span>{count}</span>
			</h1>
			<button
				className="btn btn-primary"
				onClick={() => {
					dispatch(inc());
				}}
			>
				INC
			</button>
			<button
				className="btn btn-primary"
				onClick={() => {
					dispatch(dec());
				}}
			>
				DEC
			</button>
			<button
				className="btn btn-primary"
				onClick={() => {
					const random = Math.floor(Math.random() * 10);
					dispatch(rnd(random));
				}}
			>
				RND
			</button>
		</div>
	);
};
export default App;
