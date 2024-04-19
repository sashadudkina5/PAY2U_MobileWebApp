import React, { useMemo } from "react";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartStyles from "./Chart.module.scss";
import { useAppSelector } from "../../../../utils/hooks";
import { getAllExpenses, getCategoryExpensesSum } from "../../../../redux_services/selectors";
import { TCategoryExpensesResponse } from "../../../../utils/types";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
  const categoryExpenses:  TCategoryExpensesResponse | null = useAppSelector(getCategoryExpensesSum);
  const totalExpenses = useAppSelector(getAllExpenses);

  const chartData = useMemo(() => ({
    labels: categoryExpenses?.data?.map(expense => expense.name) || [],
    datasets: [{
      label: 'Expenses',
      data: categoryExpenses?.data?.map(expense => expense.expenses) || [],
      backgroundColor: ['#FEA17A', '#7DD27C', '#FEE600'],
      borderColor: 'transparent',
      borderWidth: 0,
    }],
  }), [categoryExpenses]);

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
    return <Doughnut data={chartData} options={options} className={ChartStyles.canvas}/>;
  };

  const MyLegend = ({ data }: { data: { labels: string[], datasets: { backgroundColor: string[], data: number[] }[] } }) => {
    return (
      <div className={ChartStyles.legendWrapper}>
        {data.labels.map((label, index) => (
          <div key={label} className={ChartStyles.labelWrapper}>
            <div className={ChartStyles.legendName}>
              <span style={{ color: data.datasets[0].backgroundColor[index] }}>
                •
              </span>{' '}
              {label}: 
            </div>
            <div className={ChartStyles.legendPrice}>
              {data.datasets[0].data[index]} ₽
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={ChartStyles.chartContainer}>
      <div className={ChartStyles.canvas}>
        <MyDonutChart />
        <div className={ChartStyles.totalSum}>{totalExpenses} ₽</div>
      </div>
      <MyLegend data={chartData} />
    </div>
  );
};

export default Chart;
