import {
  Button,
  TextField,
  Grid,
  Modal,
  Box,
  styled,
  Typography,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import "@fontsource/lobster";
import "lato-font";
const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "350px",
});
const StyledAlert = styled(Alert)({
  width: 375,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "50px",
});
const StyledTypo = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: { width: 425 },
}));
const Salary = () => {
  const [open, setOpen] = useState(false);
  const [grossSalary, setGrossSalary] = useState("");
  const [taxRate, setTaxRate] = useState(0);
  const [pension, setPension] = useState(0);
  const [netSalary, setNetSalary] = useState(0);
  const [message, setMessage] = useState({ error: false, msg: "" });
  const calSal = () => {
    if (grossSalary === "") {
      setMessage({ error: true, msg: "Please Enter Your Gross Salary" });
      return;
    }
    setOpen(true);
    if (grossSalary > 600 && grossSalary < 1651) {
      let taxR = grossSalary * 0.1 - 60;
      let penS = grossSalary * 0.07;
      let netSal = grossSalary - taxR - penS;

      setTaxRate(taxR);
      setPension(penS);
      setNetSalary(netSal);
    } else if (grossSalary > 1650 && grossSalary < 3201) {
      let taxR = grossSalary * 0.15 - 142.5;
      let penS = Math.floor(grossSalary * 0.07);
      let netSal = grossSalary - taxR - penS;

      setTaxRate(taxR);
      setPension(penS);
      setNetSalary(netSal);
    } else if (grossSalary > 3200 && grossSalary < 5251) {
      let taxR = grossSalary * 0.2 - 302.5;
      let penS = grossSalary * 0.07;
      let netSal = grossSalary - taxR - penS;

      setTaxRate(taxR);
      setPension(penS);
      setNetSalary(netSal);
    } else if (grossSalary > 5250 && grossSalary < 7801) {
      let taxR = grossSalary * 0.25 - 565;
      let penS = grossSalary * 0.07;
      let netSal = grossSalary - taxR - penS;

      setTaxRate(taxR);
      setPension(penS);
      setNetSalary(netSal);
    } else if (grossSalary > 7800 && grossSalary < 10901) {
      let taxR = grossSalary * 0.3 - 955;
      let penS = grossSalary * 0.07;
      let netSal = grossSalary - taxR - penS;

      setTaxRate(taxR);
      setPension(penS);
      setNetSalary(netSal);
    } else if (grossSalary > 10900) {
      let taxR = grossSalary * 0.35 - 1500;
      let penS = grossSalary * 0.07;
      let netSal = grossSalary - taxR - penS;

      setTaxRate(taxR);
      setPension(penS);
      setNetSalary(netSal);
    } else {
      setTaxRate(0);
      setPension(0);
      setNetSalary(grossSalary);
    }
    setGrossSalary("");
  };

  return (
    <div>
      <Grid
        container
        direction='column'
        alignItems='center'
        justify='center'
        sx={{ marginTop: "20px" }}
      >
        <StyledTypo
          sx={{
            width: 725,
            height: 80,
            p: 2,
            border: "0.5px solid gray",
            fontFamily: "lato",
          }}
        >
          This free tax calculator helps you determine your personal employment
          income taxes in Ethiopia. This calculator will provide you detailed
          information about your income tax, pension and net salary.
        </StyledTypo>
      </Grid>

      <form>
        <Grid container direction='column' alignItems='center' justify='center'>
          {message?.msg && (
            <StyledAlert
              variant='filled'
              severity={message?.error ? "error" : "success"}
              dismissible
              onClose={() => setMessage("")}
            >
              {message?.msg}
            </StyledAlert>
          )}
        </Grid>
        <Grid container direction='column' alignItems='center' justify='center'>
          <TextField
            variant='outlined'
            label='Enter Your Gross Salary'
            sx={{ width: "400px", marginTop: 10 }}
            value={grossSalary}
            onChange={(e) => setGrossSalary(+e.target.value)}
            required
          />

          <Button
            variant='contained'
            sx={{ width: "400px", marginTop: 2 }}
            onClick={calSal}
          >
            Calculate
          </Button>

          <StyledModal open={open} onClose={() => setOpen(false)}>
            <Box
              width={500}
              height={280}
              bgcolor='white'
              borderRadius={5}
              padding={4}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontFamily: "lato",
                  marginLeft: "45px",
                  marginTop: "40px",
                }}
              >
                Your NetSalary is (የተጣራ ደሞዝ) : {netSalary}
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontFamily: "lato",
                  marginLeft: "45px",
                }}
              >
                Your taxRate is (ታክስ) : {taxRate}
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontFamily: "lato",
                  marginLeft: "45px",
                }}
              >
                Your Pension is (ጡረታ) : {pension}
              </Typography>

              <Grid
                container
                direction='column'
                alignItems='center'
                justify='center'
              >
                <Button
                  variant='contained'
                  sx={{ width: "400px", marginTop: "10px" }}
                  onClick={(e) => setOpen(false)}
                >
                  Ok
                </Button>
              </Grid>
            </Box>
          </StyledModal>
        </Grid>
      </form>
    </div>
  );
};

export default Salary;
