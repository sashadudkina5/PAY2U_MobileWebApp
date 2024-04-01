import React from 'react';
import ProgressBarStyles from "./ProgressBar.module.scss"; // This will be your CSS file for styling

interface ProgressBarProps {
  completed: number; // Amount completed (e.g., 70 for 70%)
  total: number; // Total amount (e.g., 100 for 100%)
}

const ProgressBar: React.FC<ProgressBarProps> = ({ completed, total }) => {
  const percentage = (completed / total) * 100;

  return (
    <div className={ProgressBarStyles.progressBar}>
      <div className={ProgressBarStyles.progressBarFilled} style={{ width: `${percentage}%` }} />
      <div className={ProgressBarStyles.progressBarRemaining} />
    </div>
  );
};

export default ProgressBar;
