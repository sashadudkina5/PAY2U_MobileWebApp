import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartStyles from "./Chart.module.scss"

// Register ChartJS elements
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Кино', 'Музыка', 'Книги'],
    datasets: [{
      label: 'Expenses',
      data: [299, 899, 257],
      backgroundColor: ['#FEA17A', '#7DD27C', '#FEE600'],
      borderColor: 'transparent',
      borderWidth: 0,
    }],
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '68%',
    plugins: {
      legend: {
        display: false,
      },
    },
  };


const MyDonutChart = () => {
  return <Doughnut data={data} options={options} className={ChartStyles.canvas}/>;
};

const MyLegend = () => {
  return (
    <div className={ChartStyles.legendWrapper}>
      {data.labels.map((label, index) => (
        <div key={label} className={ChartStyles.labelWrapper}>
            <div className={ChartStyles.legendName}>
          <span style={{ color: data.datasets[0].backgroundColor[index] }}>
            •
          </span>{' '}
          {label}: </div><div className={ChartStyles.legendPrice}>{data.datasets[0].data[index]} ₽</div>
        </div>
      ))}
    </div>
  );
};

const Chart = () => {
    return (
      <div className={ChartStyles.chartContainer}>
        <div className={ChartStyles.canvas}>
          <MyDonutChart />
          <div className={ChartStyles.totalSum}>1455 ₽</div>
        </div>
        <MyLegend />
      </div>
    );
  };
  

export default Chart;
