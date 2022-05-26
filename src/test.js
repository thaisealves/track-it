import dayjs from "dayjs";
import React from "react";
import { BallTriangle, Circles } from "react-loader-spinner"
import ReactDOM from "react-dom"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';

let now = dayjs();
console.log(now)

const data = {
    Component: BallTriangle,
    props: {
        color: "#0ead69",
        height: 100,
        width: 110
    },
    name: "Ball Triangle"
}
const percentage = 40;

function App() {
    return (
        <div>
            <data.Component {...data.props} />
            <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                background
                backgroundPadding={6}
                styles={buildStyles({
                    backgroundColor: "#3e98c7",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent"
                })}
            />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"))