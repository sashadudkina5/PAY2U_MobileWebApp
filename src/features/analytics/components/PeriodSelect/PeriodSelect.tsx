import React from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import PeriodSelectStyles from "./PeriodSelect.module.scss";

const PeriodSelect = () => {
  const [timePeriod, setTimePeriod] = React.useState<string>("Март");
  const [totalPeriod, setTotalPeriod] = React.useState<string>("За месяц");

  const handleChange = (event: SelectChangeEvent) => {
    setTimePeriod(event.target.value);
  };

  const handleTotalChange = (event: SelectChangeEvent) => {
    setTotalPeriod(event.target.value);
  };

  return (
    <div className={PeriodSelectStyles.formWrapper}>
      <FormControl fullWidth className={PeriodSelectStyles.formControl}>
        <InputLabel id="total-period-select-label">Выбрать период</InputLabel>
        <Select
          labelId="total-period-select-label"
          id="total-period-select"
          value={totalPeriod}
          label="Total Period"
          onChange={handleTotalChange}
          className={PeriodSelectStyles.select}
          renderValue={(value) =>
            value === "month" ? "За месяц" : "За все время"
          }
        >
          <MenuItem value={"total"}>За весь период</MenuItem>
          <MenuItem value={"month"}>За месяц</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth className={PeriodSelectStyles.formControl}>
        <InputLabel id="time-period-select-label">Выбрать месяц</InputLabel>
        <Select
          labelId="time-period-select-label"
          id="time-period-select"
          value={timePeriod}
          label="Select Month"
          onChange={handleChange}
          className={PeriodSelectStyles.select}
          renderValue={(value) =>
            `${value.charAt(0).toUpperCase() + value.slice(1)}`
          }
        >
          <MenuItem value={"январь"}>Январь</MenuItem>
          <MenuItem value={"февраль"}>Февраль</MenuItem>
          <MenuItem value={"март"}>Март</MenuItem>
          <MenuItem value={"апрель"}>Апрель</MenuItem>
          <MenuItem value={"май"}>Май</MenuItem>
          <MenuItem value={"июнь"}>Июнь</MenuItem>
          <MenuItem value={"июль"}>Июль</MenuItem>
          <MenuItem value={"август"}>Август</MenuItem>
          <MenuItem value={"сентябрь"}>Сентябрь</MenuItem>
          <MenuItem value={"октябрь"}>Октябрь</MenuItem>
          <MenuItem value={"ноябрь"}>Ноябрь</MenuItem>
          <MenuItem value={"декабрь"}>Декабрь</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default PeriodSelect;
