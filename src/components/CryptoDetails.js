import { React, useState, useRef } from "react";
import { useParams } from "react-router";
import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../services/cryptoApi";
import millify from "millify";
import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Chart from "./Chart";

const CryptoDetails = () => {
  let { id } = useParams();
  const [timeperiod, setTimeperiod] = useState("24h");
  const { data, isFetching } = useGetCryptoDetailsQuery(id);
  const { data: coinHistory } = useGetCryptoHistoryQuery({ id, timeperiod });

  console.log(data, "wtf");
  console.log(coinHistory, "coin history");
  console.log(timeperiod);

  const cryptoDetails = data?.data?.coin;
  if (isFetching) return "loading...";

  const time = ["3h", "24h", "7d", "30d", "3m", "1y"];

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails.price && millify(cryptoDetails.price)}`,
    },
    { title: "Rank", value: cryptoDetails.rank },
    {
      title: "24h Volume",
      value: `$ ${cryptoDetails.volume && millify(cryptoDetails.volume)}`,
    },
    {
      title: "Market Cap",
      value: `$ ${cryptoDetails.marketCap && millify(cryptoDetails.marketCap)}`,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${millify(cryptoDetails.allTimeHigh.price)}`,
    },
  ];

  const genericStats = [
    { title: "Number Of Markets", value: cryptoDetails.numberOfMarkets },
    { title: "Number Of Exchanges", value: cryptoDetails.numberOfExchanges },
    { title: "Aprroved Supply", value: cryptoDetails.approvedSupply },
    { title: "Total Supply", value: `$ ${millify(cryptoDetails.totalSupply)}` },
    {
      title: "Circulating Supply",
      value: `$ ${millify(cryptoDetails.circulatingSupply)}`,
    },
  ];

  return (
    <>
      <Container>
        <Box>
          <Typography
            variant='h2'
            component='div'
            style={{ display: "inline" }}
            sx={{ mr: 1 }}>
            {data?.data?.coin.name}
          </Typography>
          <span style={{ display: "inline" }}>{data?.data?.coin.slug}</span>
          <p>social media</p>
          <Typography variant='h1' coponent='div'>
            $
            {millify(cryptoDetails.price, {
              precision: 5,
              decimalSeparator: ",",
            })}
          </Typography>
          <Box>
            {time.map((time) => (
              <Button
                key={time}
                onClick={(time) => {
                  setTimeperiod(time.target.innerText);
                }}>
                {time}
              </Button>
            ))}
            {timeperiod}
          </Box>
        </Box>
        <Chart
          coinHistory={coinHistory}
          currentPrice={millify(cryptoDetails.price)}
          coinName={cryptoDetails.name}
        />
      </Container>
    </>
  );
};

export default CryptoDetails;
