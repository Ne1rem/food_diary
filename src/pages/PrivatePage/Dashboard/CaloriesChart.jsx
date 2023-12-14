import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale, // x
    LinearScale, // y
    PointElement,
    Legend,
    Tooltip,
    Filler
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip,
    Filler
)

function CaloriesChart() {
    const data = {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [{
            label: 'Calories',
            data: [1, 1.2, 1, 1.2, 1, 1, 1.5, 1.4, 1, 1, 1.2, 1.2, 1.6, 1.4, 1.5, 1.6, 1.8],
            backgroundColor: 'transparent',
            borderColor: 'red',
            pointBorderColor: 'transparent',
            pointBorderWidth: 5,
            fill: true,
            tension: 0.5
        }]
    }

    const options = {
        plugins: {
            legend: true
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                min: 0,
                max: 3,
                ticks: {
                    stepSize: 1,
                    callback: (value) => value + 'k'
                }
            }
        }
    }

    return (
        <div style={{
            width: '676px',
            height: '382px',
            padding: '34px'
        }}>
            <h1>Calories</h1>
            <Line
                data={data}
                options={options}>
            </Line>
        </div>
    )
}

export default CaloriesChart;



// import React from 'react';

// const CaloriesChart = () => {
//     return (
//         <>
//             <div></div>
//         </>
//   );
// };

// export default CaloriesChart;