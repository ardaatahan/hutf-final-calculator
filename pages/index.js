import * as React from "react";
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

const Index = () => {
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
            Grade Calculator
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Teorik
          </Typography>
          <TableContainer component={Paper} gutterBottom>
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
                      size="small"
                      style={{ width: "70%" }}
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
                      size="small"
                      style={{ width: "70%" }}
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
                      size="small"
                      style={{ width: "70%" }}
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
                      size="small"
                      style={{ width: "70%" }}
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
                      size="small"
                      style={{ width: "70%" }}
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
                      size="small"
                      style={{ width: "70%" }}
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
                      size="small"
                      style={{ width: "70%" }}
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
                      size="small"
                      style={{ width: "70%" }}
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
                      size="small"
                      style={{ width: "70%" }}
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
                      size="small"
                      style={{ width: "70%" }}
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
                      size="small"
                      style={{ width: "70%" }}
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
            Lab
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
                      size="small"
                      style={{ width: "70%" }}
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
                      size="small"
                      style={{ width: "70%" }}
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
                      size="small"
                      style={{ width: "70%" }}
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
                      size="small"
                      style={{ width: "70%" }}
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
                      size="small"
                      style={{ width: "70%" }}
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
                      size="small"
                      style={{ width: "70%" }}
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
                      size="small"
                      style={{ width: "70%" }}
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
            İHU
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
                        size="small"
                        style={{ width: "70%" }}
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
                        size="small"
                        style={{ width: "70%" }}
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
                        size="small"
                        style={{ width: "70%" }}
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
            Final
          </Typography>
          <Container maxWidth="md" center>
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
                        size="small"
                        style={{ width: "70%" }}
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
                        size="small"
                        style={{ width: "70%" }}
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
                        size="small"
                        style={{ width: "70%" }}
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
