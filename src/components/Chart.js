import { Box } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";
import { Line } from "react-chartjs-2";

const Chart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
    );
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  console.log(coinPrice);
  console.log(coinHistory);

  return (
    <>
      <Box>
        <Typography variant='h2' component='div'>
          TEST
        </Typography>
        <Line options={options} data={data}></Line>
      </Box>
    </>
  );
};

export default Chart;
