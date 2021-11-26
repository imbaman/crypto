import { React, useState } from "react";
import { useParams } from "react-router";
import { useGetCryptoDetailsQuery } from "../services/cryptoApi";
import millify from "millify";
import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

const CryptoDetails = () => {
  let { id } = useParams();
  const [timeperiod, setTimeperiod] = useState("1W");
  const { data, isFetching } = useGetCryptoDetailsQuery(id);
  console.log(data);

  const cryptoDetails = data?.data?.coin;
  if (isFetching) return "loading...";
  const time = ["1H", "4H", "1D", "1W", "1M", "1Y", "ALL"];

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
                onClick={(value) => setTimeperiod(value.target.innerText)}>
                {time}
              </Button>
            ))}
            {timeperiod}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default CryptoDetails;
