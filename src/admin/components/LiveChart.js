import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LiveChart = (props) => {
  const [chartData, setChartData] = useState([]);
  const { showModal, targetCountry, closeModalHandler, sendRequest } = props;

  useEffect(() => {
    //initialize data
    const fetchChartData = async () => {
      try {
        const responseData = await sendRequest(
          `/dayone/country/${targetCountry.slug}/status/confirmed/live`
        );

        let temp = responseData.map((day, index) => {
          const data = {
            name: `Day ${index + 1}`,
            cases: day.Cases,
            pv: 0,
            amt: 0,
          };

          return data;
        });

        temp = temp.filter((day, index) => {
          if ((index + 1) % 15 === 0) return day;
          else return null;
        });

        setChartData(temp);
      } catch (err) {
        console.log("Inside LiveChart UseEffect", err);
      }
    };
    fetchChartData();
  }, [sendRequest, targetCountry]);

  return (
    <Modal show={showModal} onHide={closeModalHandler} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {targetCountry && (
            <React.Fragment>
              <p>
                {targetCountry.country}

                <img
                  className="ml-3"
                  src={`https://www.countryflags.io/${targetCountry.code}/shiny/64.png`}
                  alt={targetCountry.code}
                />
              </p>
            </React.Fragment>
          )}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {targetCountry && (
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <LineChart
                data={chartData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />

                <Line type="monotone" dataKey="cases" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModalHandler}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LiveChart;
