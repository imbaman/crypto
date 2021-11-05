import React from "react";
import millify from "millify";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { Container, Typography, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Cryptocurencies from "./Cryptocurencies";

const Home = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  console.log(data);

  if (isFetching) return "Loading ....";
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
          },
        }}>
        <Box
          sx={{
            bgcolor: "secondary.main",
            boxShadow: 1,
            borderRadius: 1,
            p: 2,
            minWidth: 250,
          }}>
          <Box sx={{ color: "text.secondary" }}>
            total number of Cryptocurencies
          </Box>
          <Box
            sx={{ color: "text.primary", fontSize: 34, fontWeight: "medium" }}>
            {globalStats.total}
          </Box>
        </Box>
        <Box
          sx={{
            bgcolor: "primary.main",
            boxShadow: 1,
            borderRadius: 1,
            p: 2,
            minWidth: 250,
          }}>
          <Box sx={{ color: "text.secondary" }}>Total market cap</Box>
          <Box
            sx={{ color: "text.primary", fontSize: 34, fontWeight: "medium" }}>
            {millify(globalStats.totalMarketCap)}
          </Box>
        </Box>
        <Box
          sx={{
            bgcolor: "primary.main",
            boxShadow: 1,
            borderRadius: 1,
            p: 2,
            minWidth: 250,
          }}>
          <Box sx={{ color: "text.secondary" }}>24h Volume</Box>
          <Box
            sx={{ color: "text.primary", fontSize: 34, fontWeight: "medium" }}>
            {millify(globalStats.total24hVolume)}
          </Box>
        </Box>
        <Box
          sx={{
            bgcolor: "primary.main",
            boxShadow: 1,
            borderRadius: 1,
            p: 2,
            minWidth: 250,
          }}>
          <Box sx={{ color: "text.secondary" }}>Total Markets</Box>
          <Box
            sx={{ color: "text.primary", fontSize: 34, fontWeight: "medium" }}>
            {globalStats.totalMarkets}
          </Box>
        </Box>
      </Box>
      <Box sx={{ p: 2, display: "flex" }}>
        <Typography variant='h4'>Top Cryptocurencies</Typography>
        <Typography variant='h5'>
          <Link to='/crypto'>show more</Link>
        </Typography>
      </Box>
      <Cryptocurencies simplified />
      <Box sx={{ p: 2 }}>
        <Typography variant='h4'>News</Typography>
        <Typography variant='h5'>
          <Link to='/crypto'>show more</Link>
        </Typography>
      </Box>
    </>
  );
};

export default Home;
