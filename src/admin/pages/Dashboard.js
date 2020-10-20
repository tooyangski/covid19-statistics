import React, { useState, useEffect } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";

import LoadingSpinner from "../../shared/pages/LoadingSpinner";
import ErrorNotification from "../../shared/pages/ErrorNotification";

import Summary from "../components/Summary";

const Dashboard = (props) => {
  const [loadedCountries, setCountries] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    //initialize data
    const fetchSummary = async () => {
      try {
        const responseData = await sendRequest(`/summary`);
        setCountries(responseData.Countries);
      } catch (err) {}
    };
    fetchSummary();
  }, [sendRequest]);

  return (
    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group mr-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Share
            </button>
          </div>
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary dropdown-toggle"
          >
            <span data-feather="calendar"></span>
            This week
          </button>
        </div>
      </div>

      {error && (
        <ErrorNotification onClose={clearError}>{error}</ErrorNotification>
      )}

      {isLoading && <LoadingSpinner />}

      <Summary countries={loadedCountries} sendRequest={sendRequest}></Summary>
    </main>
  );
};

export default Dashboard;
