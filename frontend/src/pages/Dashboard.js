import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Grid, IconButton, Tab } from "@mui/material";
import { TabList, TabPanel, TabContext } from "@mui/lab";
import { Card } from "@mui/material";
import { CardContent, CardHeader } from "@mui/material";
import "react-chatbot-kit/build/main.css";
import "./Dashboard.css";
import Switch from "react-switch";
import {
  Dialog,
  DialogContentText,
  DialogTitle,
  DialogActions,
  DialogContent,
  Button,
} from "@mui/material";
import axios from "axios";
import * as HiIcons from "react-icons/hi";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as GiIcons from "react-icons/gi";
import Header from "../Components/Navbar";
const Dashboard = () => {
  const [value, setValue] = useState("1");
  const [bond1, setBond1] = useState(true);
  const [bond2, setBond2] = useState(true);
  const [bond3, setBond3] = useState(true);
  const [bond4, setBond4] = useState(true);
  const [flag, setFlag] = useState(false);
  const [dialog, setDialog] = useState(false);
  const [status, setStatus] = useState("Not Redeemed");
  let bonds = { 123: "bond1", 512: "bond2", 232: "bond3", 517: "bond4" };
  let bondSearch = ["123", "512", "232", "517"];

  const handleChange = (e, value) => {
    console.log(value);
    setValue(value);
  };

  const handleSearchChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(value);
    //   if(value in bonds)
    //   {
    //     console.log(bonds[value])
    //   }
    const ans = [];
    Object.entries(bonds).map(([key, value1]) => {
      if (key.includes(value)) {
        console.log("key", key);
        ans.push(value1);
      }
    });
    console.log(ans);

    if (ans.indexOf("bond1") == -1) {
      setBond1(false);
    } else {
      setBond1(true);
    }
    if (ans.indexOf("bond2") == -1) {
      setBond2(false);
    } else {
      setBond2(true);
    }
    if (ans.indexOf("bond3") == -1) {
      setBond3(false);
    } else {
      setBond3(true);
    }
    if (ans.indexOf("bond4") == -1) {
      setBond4(false);
    } else {
      setBond4(true);
    }
  };

  //   useEffect(()=>{
  //     // axios.get('http://localhost:8080/bondList')
  //     // .then(res => {
  //     //   console.log(res.data)
  //     // }).catch(e => {
  //     //     console.log(e);
  //     // });
  //     const response =  fetch('http://localhost:8080/bondList', {mode:'cors'}).catch(e => {
  //             console.log(e);
  //          });;
  //    })
  return (
    <>
      <Header />

      <div className="searchBox">
        <div className="magnify">
          <AiIcons.AiOutlineSearch />
        </div>
        <input
          type="text"
          name="searchPhrase"
          placeholder="Search Bonds"
          onChange={handleSearchChange}
        />
      </div>

      <Box className="box">
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              aria-label="Tabs example"
              onChange={handleChange}
              className="tabList"
            >
              <Tab label="Corporate Bonds" value="1" />
              <Tab label="Soverign Gold bonds" value="2" />
              <Tab label="Government bonds" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <h2>
              <div className="cp">Corporate Bonds</div>
            </h2>
            <br></br>
            <Grid container spacing={2}>
              <Grid item>
                {bond1 && (
                  <Card
                    sx={{ maxWidth: 10000 }}
                    onClick={() => setDialog(true)}
                    className="card"
                  >
                    <CardHeader
                      title="HDFC Bond 123"
                      action={
                        <IconButton aria-label="settings">
                          <BsIcons.BsFlag />
                        </IconButton>
                      }
                    />
                    <CardContent>
                      <table>
                        <tbody>
                          <tr>
                            <th>Issuer</th>
                            <th>Maturity date</th>
                            <th>Face Value</th>
                            <th>Status</th>
                          </tr>
                          <tr>
                            <td>HDFC</td>
                            <td>07-Jul-2032</td>
                            <td>1,000</td>
                            <td>{status}</td>
                          </tr>
                        </tbody>
                      </table>
                    </CardContent>
                  </Card>
                )}
              </Grid>
              <Grid item>
                {bond2 && (
                  <Card
                    sx={{ maxWidth: 10000 }}
                    onClick={() => setDialog(true)}
                    className="card"
                  >
                    <CardHeader
                      title="Axis Bond 512"
                      action={
                        <IconButton aria-label="settings">
                          <BsIcons.BsFlag />
                        </IconButton>
                      }
                    />
                    <CardContent>
                      <table>
                        <tbody>
                          <tr>
                            <th>Issuer</th>
                            <th>Maturity date</th>
                            <th>Face Value</th>
                            <th>Status</th>
                          </tr>
                          <tr>
                            <td>Axis Bank</td>
                            <td>17-Mar-2030</td>
                            <td>8,000</td>
                            <td>{status}</td>
                          </tr>
                        </tbody>
                      </table>
                    </CardContent>
                  </Card>
                )}
              </Grid>
              <Grid item>
                {bond3 && (
                  <Card
                    sx={{ maxWidth: 10000 }}
                    onClick={() => setDialog(true)}
                    className="card"
                  >
                    <CardHeader
                      title="ICICI Bond 232"
                      action={
                        <IconButton aria-label="settings">
                          {flag ? <BsIcons.BsFlagFill /> : <BsIcons.BsFlag />}
                        </IconButton>
                      }
                    />
                    <CardContent>
                      <table>
                        <tbody>
                          <tr>
                            <th>Issuer</th>
                            <th>Maturity date</th>
                            <th>Face Value</th>
                            <th>Status</th>
                          </tr>
                          <tr>
                            <td>ICICI</td>
                            <td>10-Aug-2022</td>
                            <td>1,00,000</td>
                            <td>{status}</td>
                          </tr>
                        </tbody>
                      </table>
                    </CardContent>
                  </Card>
                )}
              </Grid>
              <Grid item>
                {bond4 && (
                  <Card
                    sx={{ maxWidth: 10000 }}
                    onClick={() => setDialog(true)}
                    className="card"
                  >
                    <CardHeader
                      title="Kotak Bond 517"
                      action={
                        <IconButton aria-label="settings">
                          <BsIcons.BsFlag />
                        </IconButton>
                      }
                    />
                    <CardContent>
                    <table>
                      <tbody>
                        <tr>
                          <th>Issuer</th>
                          <th>Maturity date</th>
                          <th>Face Value</th>
                          <th>Status</th>
                        </tr>
                        <tr>
                          <td>Kotak</td>
                          <td>04-Jan-2040</td>
                          <td>34,000</td>
                          <td>{status}</td>
                        </tr>
                      </tbody>
                    </table>
                    </CardContent>
                  </Card>
                )}
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value="2">
          <h2>Soverign Gold bonds</h2>
            <br></br>
            <Grid container spacing={2}>
              <Grid item>
                <Card
                  sx={{ maxWidth: 10000 }}
                  onClick={() => setDialog(true)}
                  className="card"
                >
                  <CardHeader
                    title="2021-22, Series III"
                    action={
                        <IconButton aria-label="settings">
                          <BsIcons.BsFlag />
                        </IconButton>
                      }
                  />
                  <CardContent>
                    <table>
                      <tbody>
                        <tr>
                          <th>Issuer</th>
                          <th>Maturity date</th>
                          <th>Face Value</th>
                          <th>Status</th>
                        </tr>
                        <tr>
                          <td>RBI</td>
                          <td>03-Nov-2025</td>
                          <td>4786</td>
                          <td>{status}</td>
                        </tr>
                      </tbody>
                    </table>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item>
                <Card
                  sx={{ maxWidth: 10000 }}
                  onClick={() => setDialog(true)}
                  className="card"
                >
                  <CardHeader title="SGBJUNE29A" 
                  action={
                    <IconButton aria-label="settings">
                      <BsIcons.BsFlag />
                    </IconButton>
                  }/>
                  <CardContent>
                    <table>
                      <tbody>
                        <tr>
                          <th>Issuer</th>
                          <th>Maturity date</th>
                          <th>Face Value</th>
                          <th>Status</th>
                        </tr>
                        <tr>
                          <td>RBI</td>
                          <td>20-Oct-2032</td>
                          <td>1,489</td>
                          <td>{status}</td>
                        </tr>
                      </tbody>
                    </table>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value="3">
            <h2>Government bonds</h2>
            <br></br>
            <Grid container spacing={2}>
              <Grid item>
                <Card
                  sx={{ maxWidth: 10000 }}
                  onClick={() => setDialog(true)}
                  className="card"
                >
                  <CardHeader
                    title="7.80% GS 2021"
                    action={
                        <IconButton aria-label="settings">
                          <BsIcons.BsFlag />
                        </IconButton>
                      }
                  />
                  <CardContent>
                    <table>
                      <tbody>
                        <tr>
                          <th>Issuer</th>
                          <th>Maturity date</th>
                          <th>Face Value</th>
                          <th>Status</th>
                        </tr>
                        <tr>
                          <td>Government of India</td>
                          <td>03-Nov-2022</td>
                          <td>100</td>
                          <td>{status}</td>
                        </tr>
                      </tbody>
                    </table>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item>
                <Card
                  sx={{ maxWidth: 10000 }}
                  onClick={() => setDialog(true)}
                  className="card"
                >
                  <CardHeader title="6.17% GS 2021"
                  action={
                    <IconButton aria-label="settings">
                      <BsIcons.BsFlag />
                    </IconButton>
                  } />
                  <CardContent>
                    <table>
                      <tbody>
                        <tr>
                          <th>Issuer</th>
                          <th>Maturity date</th>
                          <th>Face Value</th>
                          <th>Status</th>
                        </tr>
                        <tr>
                          <td>Government of India</td>
                          <td>20-Oct-2022</td>
                          <td>100</td>
                          <td>{status}</td>
                        </tr>
                      </tbody>
                    </table>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>
        </TabContext>
      </Box>

      <Dialog open={dialog} fullWidth>
        <DialogTitle>
          <div className="cardTitle">
            <GiIcons.GiMoneyStack />
            <h4>Idea123</h4>
            <span className="flag">
              <button onClick={() => setFlag(!flag)}>
                {flag ? <BsIcons.BsFlagFill /> : <BsIcons.BsFlag />}
              </button>
            </span>{" "}
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div className="ideaCard">
              <div className="cardproblemStatement">
                {" "}
                <p>Bond ISIN</p>
              </div>
              <div className="cardproblemStatement">
                {" "}
                <div className="blueBoxtitle"> CUSIP </div>
                <br></br>
              </div>
              <div className="cardproblemStatement">
                {" "}
                <div className="blueBoxtitle"> Isuer: HDFC Credilla </div>
              </div>
              <div className="cardproblemStatement">
                {" "}
                <p>Maturity Date : 07-July-2032</p>
              </div>
              <div className="cardproblemStatement">
                {" "}
                <p> Coupon : </p>
              </div>
              <div className="cardproblemStatement">
                <p>Type: Corporate Bonds</p>
              </div>
              <div className="cardproblemStatement">
                <p>Face Value: 1,00,000</p>
              </div>
              <div className="cardproblemStatement">
                <p>
                  Status :
                  <select
                    value={status}
                    onChange={(event) => setStatus(event.target.value)}
                  >
                    <option value="Not Redeemed">Not Redeemed</option>
                    <option value="Redeemed">Redeemed</option>
                  </select>
                </p>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Dashboard;
