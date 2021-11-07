import React from "react";
import { useParams } from "react-router";
import { useGetCryptoDetailsQuery } from "../services/cryptoApi";
import millify from "millify";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

const CryptoDetails = () => {
  let { id } = useParams();
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
          <Typography variant='h2' component='div' gutterBottom>
            {data?.data?.coin.name}
          </Typography>
          <p>({data?.data?.coin.slug})</p>
        </Box>
      </Container>
    </>
  );
};

export default CryptoDetails;
