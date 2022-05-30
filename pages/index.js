import * as React from "react";
import { useState } from "react";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Image from "next/image";

// const minValue = 0;
// const maxValue = 100;

const onChangeHandler = (e, setFunction) => {
  const newValue = e.target.value; // Math.min(Math.max(e.target.value, minValue), maxValue);
  console.log(e.target.value);
  setFunction(newValue);
};

const Index = () => {
  const [firstComTheoretical, setFirstComTheoretical] = useState(100);
  const [secondComTheoretical, setSecondComTheoretical] = useState(100);
  const [thirdComTheoretical, setthirdComTheoretical] = useState(100);
  const [fourthComTheoretical, setFourthComTheoretical] = useState(100);
  const [fifthComTheoretical, setFifthComTheoretical] = useState(100);
  const [electiveOneTheoretical, setElectiveOneTheoretical] = useState(100);
  const [sixthComTheoretical, setSixthComTheoretical] = useState(100);
  const [seventhComTheoretical, setSeventhComTheoretical] = useState(100);
  const [eighthComTheoretical, setEighthComTheoretical] = useState(100);
  const [electiveTwoTheoretical, setElectiveTwoTheoretical] = useState(100);
  const [securityTheoretical, setSecurityTheoretical] = useState(100);

  const [firstComLab, setFirstComLab] = useState(100);
  const [secondComLab, setSecondComLab] = useState(100);
  const [thirdComLab, setthirdComLab] = useState(100);
  const [fourthComLab, setFourthComLab] = useState(100);
  const [fifthComLab, setFifthComLab] = useState(100);
  const [sixthComLab, setSixthComLab] = useState(100);
  const [seventhComLab, setSeventhComLab] = useState(100);

  const [ihuOne, setIhuOne] = useState(100);
  const [ihuTwo, setIhuTwo] = useState(100);
  const [ihuThree, setIhuThree] = useState(100);

  const [finalTheoretical, setFinalTheoretical] = useState(100);
  const [finalLab, setFinalLab] = useState(100);
  const [finalYoks, setFinalYoks] = useState(100);

  const theoreticalGrade =
    firstComTheoretical * 0.09 +
    secondComTheoretical * 0.13 +
    thirdComTheoretical * 0.1 +
    fourthComTheoretical * 0.07 +
    fifthComTheoretical * 0.08 +
    electiveOneTheoretical * 0.05 +
    sixthComTheoretical * 0.11 +
    seventhComTheoretical * 0.17 +
    eighthComTheoretical * 0.13 +
    electiveTwoTheoretical * 0.05 +
    securityTheoretical * 0.02;

  const labGrade =
    firstComLab * 0.08 +
    secondComLab * 0.36 +
    thirdComLab * 0.12 +
    fourthComLab * 0.12 +
    fifthComLab * 0.06 +
    sixthComLab * 0.18 +
    seventhComLab * 0.08;

  const ihuGrade = ihuOne * 0.3 + ihuTwo * 0.3 + ihuThree * 0.4;

  const finalGrade =
    finalTheoretical * 0.89 + finalLab * 0.06 + finalYoks * 0.05;

  const gradeDuringSemester =
    theoreticalGrade * 0.89 + labGrade * 0.06 + ihuGrade * 0.05;

  const semesterGrade = gradeDuringSemester * 0.6 + finalGrade * 0.4;

  const canPass = finalGrade >= 50 && semesterGrade >= 60;

  return (
    <main>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="xl">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            HÜTF Not Hesaplama
          </Typography>
          <Box
            sx={{
              display: "flex",
              p: 1,
              mt: 1,
              mb: 1,
              bgcolor: "background.paper",
              borderRadius: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card sx={{ mr: 12 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 18 }}
                  color="text.primary"
                  gutterBottom
                >
                  Dönem İçi Notu
                </Typography>
                <Typography align="center">
                  {gradeDuringSemester.toFixed(2)}
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ mr: 12 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 18 }}
                  color="text.primary"
                  gutterBottom
                >
                  Dönem Sonu Notu
                </Typography>
                <Typography align="center">{finalGrade.toFixed(2)}</Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Typography
                  sx={{ fontSize: 18 }}
                  color="text.primary"
                  gutterBottom
                >
                  Dönem Notu
                </Typography>
                <Typography align="center">
                  {semesterGrade.toFixed(2)}
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Typography
            variant="h5"
            align="center"
            color={canPass ? "#4caf50" : "#f44336"}
            paragraph
            mb="16"
          >
            {canPass ? "Geçtiniz" : "Kaldınız"}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Teorik: {theoreticalGrade.toFixed(2)}
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">1. Komite</TableCell>
                  <TableCell align="left">2. Komite</TableCell>
                  <TableCell align="left">3. Komite</TableCell>
                  <TableCell align="left">4. Komite</TableCell>
                  <TableCell align="left">5. Komite</TableCell>
                  <TableCell align="left">Seçmeli-1</TableCell>
                  <TableCell align="left">6. Komite</TableCell>
                  <TableCell align="left">7. Komite</TableCell>
                  <TableCell align="left">8. Komite</TableCell>
                  <TableCell align="left">Seçmeli-2</TableCell>
                  <TableCell align="left">Hasta Güvenliği</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ paddingRight: 0 }} align="left">
                    <TextField
                      id="outlined-number"
                      type="number"
                      inputProps={{ min: 0, max: 100 }}
                      size="small"
                      style={{ width: "70%" }}
                      onChange={(e) =>
                        onChangeHandler(e, setFirstComTheoretical)
                      }
                      value={firstComTheoretical}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </TableCell>
                  <TableCell
                    style={{ paddingLeft: 16, paddingRight: 0 }}
                    align="left"
                  >
                    <TextField
                      id="outlined-number"
                      type="number"
                      inputProps={{ min: 0, max: 100 }}
                      size="small"
                      style={{ width: "70%" }}
                      onChange={(e) =>
                        onChangeHandler(e, setSecondComTheoretical)
                      }
                      value={secondComTheoretical}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </TableCell>
                  <TableCell
                    style={{ paddingLeft: 16, paddingRight: 0 }}
                    align="left"
                  >
                    <TextField
                      id="outlined-number"
                      type="number"
                      inputProps={{ min: 0, max: 100 }}
                      size="small"
                      style={{ width: "70%" }}
                      onChange={(e) =>
                        onChangeHandler(e, setthirdComTheoretical)
                      }
                      value={thirdComTheoretical}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </TableCell>
                  <TableCell
                    style={{ paddingLeft: 16, paddingRight: 0 }}
                    align="left"
                  >
                    <TextField
                      id="outlined-number"
                      type="number"
                      inputProps={{ min: 0, max: 100 }}
                      size="small"
                      style={{ width: "70%" }}
                      onChange={(e) =>
                        onChangeHandler(e, setFourthComTheoretical)
                      }
                      value={fourthComTheoretical}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </TableCell>
                  <TableCell
                    style={{ paddingLeft: 16, paddingRight: 0 }}
                    align="left"
                  >
                    <TextField
                      id="outlined-number"
                      type="number"
                      inputProps={{ min: 0, max: 100 }}
                      size="small"
                      style={{ width: "70%" }}
                      onChange={(e) =>
                        onChangeHandler(e, setFifthComTheoretical)
                      }
                      value={fifthComTheoretical}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </TableCell>
                  <TableCell
                    style={{ paddingLeft: 16, paddingRight: 0 }}
                    align="left"
                  >
                    <TextField
                      id="outlined-number"
                      type="number"
                      inputProps={{ min: 0, max: 100 }}
                      size="small"
                      style={{ width: "70%" }}
                      onChange={(e) =>
                        onChangeHandler(e, setElectiveOneTheoretical)
                      }
                      value={electiveOneTheoretical}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </TableCell>
                  <TableCell
                    style={{ paddingLeft: 16, paddingRight: 0 }}
                    align="left"
                  >
                    <TextField
                      id="outlined-number"
                      type="number"
                      inputProps={{ min: 0, max: 100 }}
                      size="small"
                      style={{ width: "70%" }}
                      onChange={(e) =>
                        onChangeHandler(e, setSixthComTheoretical)
                      }
                      value={sixthComTheoretical}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </TableCell>
                  <TableCell
                    style={{ paddingLeft: 16, paddingRight: 0 }}
                    align="left"
                  >
                    <TextField
                      id="outlined-number"
                      type="number"
                      inputProps={{ min: 0, max: 100 }}
                      size="small"
                      style={{ width: "70%" }}
                      onChange={(e) =>
                        onChangeHandler(e, setSeventhComTheoretical)
                      }
                      value={seventhComTheoretical}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </TableCell>
                  <TableCell
                    style={{ paddingLeft: 16, paddingRight: 0 }}
                    align="left"
                  >
                    <TextField
                      id="outlined-number"
                      type="number"
                      inputProps={{ min: 0, max: 100 }}
                      size="small"
                      style={{ width: "70%" }}
                      onChange={(e) =>
                        onChangeHandler(e, setEighthComTheoretical)
                      }
                      value={eighthComTheoretical}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </TableCell>
                  <TableCell
                    style={{ paddingLeft: 16, paddingRight: 0 }}
                    align="left"
                  >
                    <TextField
                      id="outlined-number"
                      type="number"
                      inputProps={{ min: 0, max: 100 }}
                      size="small"
                      style={{ width: "70%" }}
                      onChange={(e) =>
                        onChangeHandler(e, setElectiveTwoTheoretical)
                      }
                      value={electiveTwoTheoretical}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </TableCell>
                  <TableCell
                    style={{ paddingLeft: 16, paddingRight: 0 }}
                    align="left"
                  >
                    <TextField
                      id="outlined-number"
                      type="number"
                      inputProps={{ min: 0, max: 100 }}
                      size="small"
                      style={{ width: "70%" }}
                      onChange={(e) =>
                        onChangeHandler(e, setSecurityTheoretical)
                      }
                      value={securityTheoretical}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
            style={{ marginTop: 32 }}
          >
            Lab: {labGrade.toFixed(2)}
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">1. Komite</TableCell>
                  <TableCell align="left">2. Komite</TableCell>
                  <TableCell align="left">3. Komite</TableCell>
                  <TableCell align="left">4. Komite</TableCell>
                  <TableCell align="left">5. Komite</TableCell>
                  <TableCell align="left">6. Komite</TableCell>
                  <TableCell align="left">7. Komite</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  style={{ margin: 0 }}
                >
                  <TableCell style={{ paddingRight: 0 }} align="left">
                    <TextField
                      id="outlined-number"
                      type="number"
                      inputProps={{ min: 0, max: 100 }}
                      size="small"
                      style={{ width: "70%" }}
                      onChange={(e) => onChangeHandler(e, setFirstComLab)}
                      value={firstComLab}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </TableCell>
                  <TableCell
                    style={{ paddingLeft: 16, paddingRight: 0 }}
                    align="left"
                  >
                    <TextField
                      id="outlined-number"
                      type="number"
                      inputProps={{ min: 0, max: 100 }}
                      size="small"
                      style={{ width: "70%" }}
                      onChange={(e) => onChangeHandler(e, setSecondComLab)}
                      value={secondComLab}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </TableCell>
                  <TableCell
                    style={{ paddingLeft: 16, paddingRight: 0 }}
                    align="left"
                  >
                    <TextField
                      id="outlined-number"
                      type="number"
                      inputProps={{ min: 0, max: 100 }}
                      size="small"
                      style={{ width: "70%" }}
                      onChange={(e) => onChangeHandler(e, setthirdComLab)}
                      value={thirdComLab}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </TableCell>
                  <TableCell
                    style={{ paddingLeft: 16, paddingRight: 0 }}
                    align="left"
                  >
                    <TextField
                      id="outlined-number"
                      type="number"
                      inputProps={{ min: 0, max: 100 }}
                      size="small"
                      style={{ width: "70%" }}
                      onChange={(e) => onChangeHandler(e, setFourthComLab)}
                      value={fourthComLab}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </TableCell>
                  <TableCell
                    style={{ paddingLeft: 16, paddingRight: 0 }}
                    align="left"
                  >
                    <TextField
                      id="outlined-number"
                      type="number"
                      inputProps={{ min: 0, max: 100 }}
                      size="small"
                      style={{ width: "70%" }}
                      onChange={(e) => onChangeHandler(e, setFifthComLab)}
                      value={fifthComLab}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </TableCell>
                  <TableCell
                    style={{ paddingLeft: 16, paddingRight: 0 }}
                    align="left"
                  >
                    <TextField
                      id="outlined-number"
                      type="number"
                      inputProps={{ min: 0, max: 100 }}
                      size="small"
                      style={{ width: "70%" }}
                      onChange={(e) => onChangeHandler(e, setSixthComLab)}
                      value={sixthComLab}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </TableCell>
                  <TableCell
                    style={{ paddingLeft: 16, paddingRight: 0 }}
                    align="left"
                  >
                    <TextField
                      id="outlined-number"
                      type="number"
                      inputProps={{ min: 0, max: 100 }}
                      size="small"
                      style={{ width: "70%" }}
                      onChange={(e) => onChangeHandler(e, setSeventhComLab)}
                      value={seventhComLab}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
            style={{ marginTop: 32 }}
          >
            İHU: {ihuGrade.toFixed(2)}
          </Typography>
          <Container maxWidth="md" center>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 250 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ paddingLeft: 50 }} align="left">
                      1
                    </TableCell>
                    <TableCell align="left">2</TableCell>
                    <TableCell align="left">3</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    style={{ margin: 0 }}
                  >
                    <TableCell
                      style={{ paddingLeft: 50, paddingRight: 0 }}
                      align="left"
                    >
                      <TextField
                        id="outlined-number"
                        type="number"
                        inputProps={{ min: 0, max: 100 }}
                        size="small"
                        style={{ width: "70%" }}
                        onChange={(e) => onChangeHandler(e, setIhuOne)}
                        value={ihuOne}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      style={{ paddingLeft: 16, paddingRight: 0 }}
                      align="left"
                    >
                      <TextField
                        id="outlined-number"
                        type="number"
                        inputProps={{ min: 0, max: 100 }}
                        size="small"
                        style={{ width: "70%" }}
                        onChange={(e) => onChangeHandler(e, setIhuTwo)}
                        value={ihuTwo}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      style={{ paddingLeft: 16, paddingRight: 0 }}
                      align="left"
                    >
                      <TextField
                        id="outlined-number"
                        type="number"
                        inputProps={{ min: 0, max: 100 }}
                        size="small"
                        style={{ width: "70%" }}
                        onChange={(e) => onChangeHandler(e, setIhuThree)}
                        value={ihuThree}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
            style={{ marginTop: 32 }}
          >
            Final: {finalGrade.toFixed(2)}
          </Typography>
          <Container maxWidth="md">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 250 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ paddingLeft: 50 }} align="left">
                      Teorik
                    </TableCell>
                    <TableCell align="left">Lab</TableCell>
                    <TableCell align="left">YOKS</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    style={{ margin: 0 }}
                  >
                    <TableCell
                      style={{ paddingLeft: 50, paddingRight: 0 }}
                      align="left"
                    >
                      <TextField
                        id="outlined-number"
                        type="number"
                        inputProps={{ min: 0, max: 100 }}
                        size="small"
                        style={{ width: "70%" }}
                        onChange={(e) =>
                          onChangeHandler(e, setFinalTheoretical)
                        }
                        value={finalTheoretical}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      style={{ paddingLeft: 16, paddingRight: 0 }}
                      align="left"
                    >
                      <TextField
                        id="outlined-number"
                        type="number"
                        inputProps={{ min: 0, max: 100 }}
                        size="small"
                        style={{ width: "70%" }}
                        onChange={(e) => onChangeHandler(e, setFinalLab)}
                        value={finalLab}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      style={{ paddingLeft: 16, paddingRight: 0 }}
                      align="left"
                    >
                      <TextField
                        id="outlined-number"
                        type="number"
                        inputProps={{ min: 0, max: 100 }}
                        size="small"
                        style={{ width: "70%" }}
                        onChange={(e) => onChangeHandler(e, setFinalYoks)}
                        value={finalYoks}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
        </Container>
      </Box>
    </main>
  );
};

export default Index;
