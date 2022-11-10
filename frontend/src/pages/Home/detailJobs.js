import React, { useState, useEffect } from "react";
import "../../index.css";

import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import parse from "html-react-parser";
import { getListAllJobs, getDetailJobsById } from "../../Axios/homeAxios";

const DetailJobs = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const { getDetailJobsResult, getDetailJobsLoading, getDetailJobsError } =
    useSelector((state) => state.homeReducers);

  useEffect(() => {
    dispatch(getDetailJobsById(id));
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col p-0 pl-3 pl-lg-0">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <Link to="/" className="breadcrumb-item" aria-current="page">
                  Back
                </Link>
              </ol>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 pl-lg-0">
            <div className="card card-details">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item" aria-current="page">
                    {getDetailJobsResult
                      ? getDetailJobsResult.type
                      : "tipe kosong"}
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {getDetailJobsResult
                      ? getDetailJobsResult.location
                      : "Lokasi kosong"}
                  </li>
                </ol>
              </nav>
              <h1>
                {getDetailJobsResult
                  ? getDetailJobsResult.title
                  : "title kosong"}
              </h1>
              <hr></hr>
              <div className="gallery">
                <p>
                  {parse(
                    ` ${
                      getDetailJobsResult
                        ? getDetailJobsResult.description
                        : "Company kosong"
                    }`
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title">
                  {" "}
                  {getDetailJobsResult
                    ? getDetailJobsResult.company
                    : "Company kosong"}
                </h5>
                <hr></hr>
                <img src="https://via.placeholder.com/150" alt="company logo" />

                <p>
                  {getDetailJobsResult
                    ? getDetailJobsResult.company_url
                    : "url kosong"}
                </p>
              </div>
            </div>
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-body">
                <h5 class="card-title">How to Apply</h5>
                <p class="card-text">
                  {parse(
                    `${
                      getDetailJobsResult
                        ? getDetailJobsResult.how_to_apply
                        : "Kosong"
                    }`
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailJobs;
