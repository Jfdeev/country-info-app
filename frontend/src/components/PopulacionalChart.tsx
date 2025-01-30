// components/PopulationChart.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';


Chart.register(...registerables);

interface PopulationChartProps {
    populationData: { year: number; value: number }[] | undefined;
}

const PopulationChart: React.FC<PopulationChartProps> = ({ populationData }) => {
    if (!populationData || populationData.length === 0) {
        return <div>No population data available.</div>; 
    }

    const data = {
        labels: populationData.map(data => data.year),
        datasets: [
            {
                label: 'Population',
                data: populationData.map(data => data.value),
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    return (
        <div>
            <Line data={data} />
        </div>
    );
};

export default PopulationChart;