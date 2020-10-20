import React, { useState, useEffect } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { useHttpClient } from "../../shared/hooks/http-hook";

import LoadingSpinner from "../../shared/pages/LoadingSpinner";
import ErrorNotification from "../../shared/pages/ErrorNotification";

const Dashboard = (props) => {
  const [loadedCountries, setCountries] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    //initialize data
    const fetchSummary = async () => {
      try {
        const responseData = await sendRequest(`/summary`);
        const countries = responseData.Countries;

        let temp = countries.map((item) => {
          const data = {
            name: `${item.Country}`,
            cases: item.TotalConfirmed,
            pv: 0,
            amt: 0,
          };

          return data;
        });

        let count = Math.ceil(temp.length / 25);
        let arrayTemp = [];

        for (let y = 0; y <= 20; y++) {
          let start = 0;
          let end = count - 1;

          let chunk = temp.splice(start, end);
          start = start + count;
          end = end + count;

          arrayTemp.push(chunk);
        }

        setCountries(arrayTemp);
      } catch (err) {}
    };
    fetchSummary();
  }, [sendRequest]);

  return (
    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Charts</h1>
      </div>

      {error && (
        <ErrorNotification onClose={clearError}>{error}</ErrorNotification>
      )}

      {isLoading && <LoadingSpinner />}

      <h2>Number of cases per country</h2>
      {loadedCountries.map((set) => {
        return (
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <BarChart
                data={set}
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
                <Bar dataKey="cases" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        );
      })}
    </main>
  );
};

export default Dashboard;
