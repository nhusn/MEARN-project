import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Dashboard.css'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
      <Row style={{ margin: "auto" }}>
        <Col lg={2}></Col>
        <Col lg={8} className='service-history'>
          <div className='serv-history-group'>
            <div className='serv-history-title'>
              <h5>Service History</h5>
            </div>
            <table id='service-history-table'>
              <tr>
                <th className='ps-2'>#</th>
                <th className='ps-2'>Date</th>
                <th className='ps-2'>Title</th>
                <th className='ps-2'>Vehicle</th>
                <th className='ps-2'>Amount</th>
                <th className='ps-'>View</th>
              </tr>
              <tr>
                <td>1</td>
                <td>21/08/2023</td>
                <td>Clutch Replacement</td>
                <td>Swift Desire</td>
                <td>12000</td>
                <td><Link style={{textDecoration:"none",color:"white"}} to={'/view/:id'}><i class="fa-solid fa-eye ps-"></i></Link></td>
              </tr>
            </table>
          </div>
        </Col>
        <Col lg={2}></Col>

      </Row>
    </div>
  )
}

export default Dashboard