import React, { useState } from "react";

import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

import formatDate from "../../helpers/DateFormatter";

import LiveChart from "./LiveChart";

const Summary = (props) => {
  const [targetCountry, setTargetCountry] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const columns = [
    {
      name: "Country",
      selector: "country",
      sortable: true,
    },
    {
      name: "Code",
      selector: "code",
      sortable: true,
    },
    {
      name: "NewConfirmed",
      selector: "newConfirmed",
      sortable: true,
    },
    {
      name: "TotalConfirmed",
      selector: "totalConfirmed",
      sortable: true,
    },
    {
      name: "NewDeaths",
      selector: "newDeaths",
      sortable: true,
    },
    {
      name: "TotalDeaths",
      selector: "totalDeaths",
      sortable: true,
    },
    {
      name: "NewRecovered",
      selector: "newRecovered",
      sortable: true,
    },
    {
      name: "TotalRecovered",
      selector: "totalRecovered",
      sortable: true,
    },
    {
      name: "Action",
      selector: "action",
      cell: (row) => (
        <div>
          <button
            type="button"
            className="btn btn-outline-info"
            data-toggle="modal"
            data-target="#exampleModalCenter"
            onClick={() => {
              setTargetCountry(row);
              setShowModal(true);
            }}
          >
            Chart
          </button>
        </div>
      ),
    },
  ];

  const data = props.countries.map((item) => {
    const data = {
      id: item.CountryCode,
      country: item.Country,
      code: item.CountryCode,
      slug: item.Slug,
      newConfirmed: item.NewConfirmed,
      totalConfirmed: item.TotalConfirmed,
      newDeaths: item.NewDeaths,
      totalDeaths: item.TotalDeaths,
      newRecovered: item.NewRecovered,
      totalRecovered: item.TotalRecovered,
      date: formatDate(item.Date),
    };
    return data;
  });

  const tableData = {
    columns,
    data,
  };

  return (
    <React.Fragment>
      {showModal && (
        <LiveChart
          showModal={true}
          targetCountry={targetCountry}
          closeModalHandler={closeModalHandler}
          sendRequest={props.sendRequest}
        />
      )}

      <h2>Covid19</h2>
      <div className="table-responsive">
        <DataTableExtensions {...tableData} exportHeaders print={false}>
          <DataTable
            title="Summary"
            defaultSortField="id"
            striped
            pagination
            pointerOnHover
            highlightOnHover
          />
        </DataTableExtensions>
      </div>
    </React.Fragment>
  );
};

export default Summary;
