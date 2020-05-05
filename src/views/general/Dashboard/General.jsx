import React from 'react';
import {

  Row, Col, Table,
} from 'reactstrap';

import {

} from 'components';

import { Line, Bar, Scatter, HorizontalBar } from 'react-chartjs-2';

//import styles from 'jvectormap/jquery-jvectormap.css'
//import { VectorMap } from 'react-jvectormap';


import {
  dashboardAllProductsChart2,
  dashboardAllProductsChart3,
  playlistCharts,
  playlistCharts1,
  playlistCharts2,
  playlistCharts3,
  playlistCharts5,
  playlistCharts6,
  playlistCharts7,
  playlistCharts8,
  playlistCharts9,
  playlistCharts10,
} from 'variables/university/dashboard-charts.jsx';
var IMGDIR = process.env.REACT_APP_IMGDIR;


class General extends React.Component {


  render() {



    const data32 = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [
        {
          label: 'Visitors',
          backgroundColor: 'rgba(255, 138, 101,1)',
          borderColor: 'rgba(255, 138, 101,0.8)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255, 138, 101,0.8)',
          hoverBorderColor: 'rgba(255, 138, 101,1)',
          data: [165, 259, 170, 181, 256, 155, 170]
        }
      ]
    };


    const options32 = {
      legend: {
        display: false,
      },
      scales: {
        xAxes: [{
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          },
          ticks: {
            display: false
          },

        }],
        yAxes: [{
          categoryPercentage: 0.6,
          barPercentage: 0.5,
          maxBarThickness: 8,
          gridLines: {
            color: "rgba(0, 0, 0, 0.07)",
          },
          ticks: {
            display: true
          }
        }]
      },
      maintainAspectRatio: false
    };


    const data4 = {
      labels: ['Scatter'],
      datasets: [
        {
          label: 'Users New / Visitors',
          fill: true,
          backgroundColor: 'rgba(255, 138, 101,0.4)',
          pointBorderColor: 'rgba(255, 138, 101,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 2,
          pointHoverRadius: 8,
          pointHoverBackgroundColor: 'rgba255, 138, 101,1)',
          pointHoverBorderColor: 'rgba(255, 138, 101,1)',
          pointHoverBorderWidth: 4,
          pointRadius: 6,
          pointHitRadius: 5,
          data: [
            { x: 165, y: 275 },
            { x: 159, y: 349 },
            { x: 280, y: 290 },
            { x: 181, y: 329 },
            { x: 156, y: 236 },
            { x: 255, y: 225 },
            { x: 240, y: 278 },
            { x: 275, y: 455 },
            { x: 149, y: 439 },
            { x: 160, y: 240 },
            { x: 171, y: 359 },
            { x: 186, y: 436 },
            { x: 235, y: 355 },
            { x: 250, y: 268 },
            { x: 255, y: 245 },
            { x: 169, y: 359 },
            { x: 270, y: 440 },
            { x: 151, y: 359 },
            { x: 246, y: 366 },
          ]
        }
      ]
    };

    const options4 = {
      legend: {
        display: false,
      },
      scales: {
        xAxes: [{
          display: 1,
          gridLines: {
            color: "rgba(0, 0, 0, 0.01)",
          },
          ticks: {
            display: false
          },

        }],
        yAxes: [{
          categoryPercentage: 0.8,
          barPercentage: 0.6,
          maxBarThickness: 12,
          display: 1,
          gridLines: {
            color: "rgba(0, 0, 0, 0.01)",
          },
          ticks: {
            display: true
          }
        }]
      },
      maintainAspectRatio: false
    };


    return (
      <div>
        <div className="content">
          <Row>
            <Col xs={12} md={12}>

              <div className="page-title">
                <div className="float-left">
                  <h1 className="title">Inicio</h1>
                </div>
              </div>




              <div className="row margin-0">



                <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                  <div className="db_box iconbox">
                    <div className="widdata">
                      <i className='widicon i-notebook icon-lg icon-accent'></i>
                      <h3 className="widtitle">Evidencias</h3>
                      <p className="widtag">5 / 10 => 50%</p>
                    </div>
                  </div>
                </div>


                <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                  <div className="db_box iconbox">
                    <div className="widdata">
                      <i className='widicon i-docs icon-lg icon-accent'></i>
                      <h3 className="widtitle">Observador</h3>
                      <p className="widtag">12 sin revisar</p>
                    </div>
                  </div>
                </div>


                <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                  <div className="db_box iconbox">
                    <div className="widdata">
                      <i className='widicon i-user icon-lg icon-accent'></i>
                      <h3 className="widtitle">Horario</h3>
                      <p className="widtag">31% increase</p>
                    </div>
                  </div>
                </div>


                <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                  <div className="db_box iconbox">
                    <div className="widdata">
                      <i className='widicon i-wallet icon-lg icon-accent'></i>
                      <h3 className="widtitle">Billetera</h3>
                      <p className="widtag">Disp $100.000</p>
                    </div>
                  </div>
                </div>


                <div className="col-xl-2 d-xl-block d-lg-none d-md-none d-sm-block col-sm-4 col-6">
                  <div className="db_box iconbox">
                    <div className="widdata">
                      <i className='widicon i-share icon-lg icon-accent'></i>
                      <h3 className="widtitle">Compartir</h3>
                      <p className="widtag">30%</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="col-lg-12 col-xl-12 col-md-12 col-12">
                <section className="box ">
                  <header className="panel_header">
                    <h2 className="title float-left">Nuestra Comunidad</h2>

                  </header>
                  <div className="content-body">
                    <div className="row">
                      <div className="col-12">
                        <Table hover responsive>
                          <thead>
                            <tr>
                              <th>Nombre</th>
                              <th>Perfil</th>
                              <th>Email</th>
                              <th>Integrante</th>
                              <th>Puntaje</th>
                              <th>Tipo</th>
                              <th>Estado</th>
                            </tr>
                          </thead>
                          <tbody>

                            <tr>
                              <td className="user-inline-img">
                                <img src={IMGDIR + "/images/profile/avatar-4.jpg"} alt="user avatar" className="avatar-image img-inline" />
                                                Tim May
                                                </td>
                              <td>$145,666</td>
                              <td>33412</td>
                              <td><span className="badge">Approved</span></td>
                              <td><span className="playlist_song1">
                                <div className="chart-area" style={{ height: 40 + 'px', width: 80 + 'px' }}>
                                  <Bar data={playlistCharts5.data} options={playlistCharts5.options} />
                                </div>
                              </span></td>
                              <td>Premium</td>
                              <td>11 April 2019</td>
                            </tr>
                            <tr>
                              <td className="user-inline-img">
                                <img src={IMGDIR + "/images/profile/avatar-6.jpg"} alt="user avatar" className="avatar-image img-inline" />
                                                Simon Morrison
                                                </td>
                              <td>$345,666</td>
                              <td>32332</td>
                              <td><span className="badge">Pending</span></td>
                              <td><span className="playlist_song1">
                                <div className="chart-area" style={{ height: 40 + 'px', width: 80 + 'px' }}>
                                  <Bar data={playlistCharts6.data} options={playlistCharts6.options} />
                                </div>
                              </span></td>
                              <td>Standard</td>
                              <td>21 April 2019</td>
                            </tr>
                            <tr>
                              <td className="user-inline-img">
                                <img src={IMGDIR + "/images/profile/avatar-3.jpg"} alt="user avatar" className="avatar-image img-inline" />
                                                Amanda Oliver
                                                </td>
                              <td>$245,132</td>
                              <td>76533</td>
                              <td><span className="badge">Approved</span></td>
                              <td><span className="playlist_song1">
                                <div className="chart-area" style={{ height: 40 + 'px', width: 80 + 'px' }}>
                                  <Bar data={playlistCharts7.data} options={playlistCharts7.options} />
                                </div>
                              </span></td>
                              <td>Standard</td>
                              <td>15 April 2019</td>
                            </tr>
                            <tr>
                              <td className="user-inline-img">
                                <img src={IMGDIR + "/images/profile/avatar-2.jpg"} alt="user avatar" className="avatar-image img-inline" />
                                                Anna Rees
                                                </td>
                              <td>$312,444</td>
                              <td>75646</td>
                              <td><span className="badge">Pending</span></td>
                              <td><span className="playlist_song1">
                                <div className="chart-area" style={{ height: 40 + 'px', width: 80 + 'px' }}>
                                  <Bar data={playlistCharts8.data} options={playlistCharts8.options} />
                                </div>
                              </span></td>
                              <td>Premium</td>
                              <td>12 April 2019</td>
                            </tr>
                            <tr>
                              <td className="user-inline-img">
                                <img src={IMGDIR + "/images/profile/avatar-1.jpg"} alt="user avatar" className="avatar-image img-inline" />
                                                Caroline Quinn
                                                </td>
                              <td>$532,232</td>
                              <td>64333</td>
                              <td><span className="badge">Approved</span></td>
                              <td><span className="playlist_song1">
                                <div className="chart-area" style={{ height: 40 + 'px', width: 80 + 'px' }}>
                                  <Bar data={playlistCharts9.data} options={playlistCharts9.options} />
                                </div>
                              </span></td>
                              <td>Standard</td>
                              <td>22 April 2019</td>
                            </tr>
                            <tr>
                              <td className="user-inline-img">
                                <img src={IMGDIR + "/images/profile/avatar-9.jpg"} alt="user avatar" className="avatar-image img-inline" />
                                                Peter Lee
                                                </td>
                              <td>$133,533</td>
                              <td>54567</td>
                              <td><span className="badge">Approved</span></td>
                              <td><span className="playlist_song1">
                                <div className="chart-area" style={{ height: 40 + 'px', width: 80 + 'px' }}>
                                  <Bar data={playlistCharts10.data} options={playlistCharts10.options} />
                                </div>
                              </span></td>
                              <td>Premium</td>
                              <td>04 May 2019</td>
                            </tr>

                          </tbody>
                        </Table>

                      </div>

                    </div>
                  </div>
                </section>
              </div>




            </Col>

          </Row>
        </div>
      </div>
    );
  }
}

export default General;