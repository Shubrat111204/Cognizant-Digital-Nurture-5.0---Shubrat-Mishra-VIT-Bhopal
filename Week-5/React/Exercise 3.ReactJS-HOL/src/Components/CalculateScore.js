import "../Stylesheets/mystyle.css";

const percentToDecimal = (decimal) => {
    return (decimal * 100).toFixed(2) + "%";
}

const calcScore = (total, goal) => {
    return percentToDecimal(total / goal);
}

export const CalculateScore = ({ Name, School, total, goal }) => {

    return (
        <div className="formatstyle">

            <h1>Student Details:</h1>

            <div className="Name">
                <span>Name:</span>
                <span>{Name}</span>
            </div>

            <div className="School">
                <span>School:</span>
                <span>{School}</span>
            </div>

            <div className="Total">
                <span>Total:</span>
                <span>{total}</span>
            </div>

            <div className="Score">
                <span>Score:</span>
                <span>{calcScore(total, goal)}</span>
            </div>

        </div>
    );
}