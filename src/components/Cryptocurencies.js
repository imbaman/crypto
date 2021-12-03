import { React, useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useGetCryptosQuery } from "../services/cryptoApi";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Cryptocurencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  //   console.log(cryptos);
  useEffect(() => {
    const filtered = cryptoList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filtered);
  }, [cryptoList, searchTerm]);

  if (isFetching) return "Loading ... ";
  return (
    <>
      {!simplified && (
        <Box pb={2}>
          <input
            style={{ padding: "10px" }}
            placeholder='search for cryptocurency'
            onChange={(e) => setSearchTerm(e.target.value)}></input>
        </Box>
      )}

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 1, md: 2 }}
          columns={{ xs: 4, sm: 6, md: 12 }}>
          {/* {Array.from(Array(10)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>xs=2</Item>
          </Grid>
        ))} */}

          {cryptos?.map((currency) => (
            <Grid item key={currency.id} xs={12} sm={3} md={4} lg={3}>
              <Link to={`/crypto/${currency.id}`}>
                <Card
                  sx={{
                    bgcolor:
                      currency.change < 0
                        ? "rgba(186, 4, 2, 0.1)"
                        : "rgba(26, 137, 23, 0.1)",
                    border: 1,
                    borderColor:
                      currency.change < 0
                        ? "rgba(186, 4, 2, 0.4)"
                        : "rgba(26, 137, 23, 0.4)",
                    display: "flex",
                    minWidth: 180,
                    // maxWidth: 220,
                    height: 180,
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1" }}>
                      <Typography component='h2' variant='h5' mr={1}>
                        {currency.name}
                      </Typography>
                      <Typography
                        variant='subtitle1'
                        color={
                          currency.change > 0 ? "success.main" : "error.main"
                        }
                        component='div'>
                        {currency.change}%
                      </Typography>
                      <p>{millify(currency.price)}$</p>
                    </CardContent>
                  </Box>

                  <CardMedia
                    component='img'
                    sx={{
                      // width: "auto",
                      display: "flex",
                      maxWidth: 60,
                      mr: 3,
                    }}
                    image={currency.iconUrl}
                    alt='Live from space album cover'
                  />
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Cryptocurencies;
