import React from "react";

//include images into your bundle
import  Card  from "./Card";
import { LuClock9 } from "react-icons/lu";

//create your first component
const Home = ({ time }) => {
	
	return (
		<>
			<div className="wrapper d-flex p-2 justify-content-center align-items-center bg-dark gap-1">
				<Card Digit={<LuClock9 />} />
				<Card Digit={Math.floor(time / 100000) % 100000} />
				<Card Digit={Math.floor(time / 10000) % 10000} />
				<Card Digit={Math.floor(time / 1000) % 1000} />
				<Card Digit={Math.floor(time / 100) % 100} />
				<Card Digit={Math.floor(time % 10)} />
			</div>
		</>
	)
}
export default Home;
