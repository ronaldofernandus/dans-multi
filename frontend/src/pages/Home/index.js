import React, { useState, useEffect } from "react";
import "../../index.css";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import {
  getListAllJobs,
  getDetailJobsById,
  getPageJobs,
} from "../../Axios/homeAxios";
import ReactPaginate from "react-paginate";
const Home = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [postPerPage, setPostPerPage] = useState(3);

  const indexOfLastEmployee = currentPage * postPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - postPerPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const {
    getListJobsResult,
    getListJobsLoading,
    getListJobsError,
    getPageResult,
    getPageLoading,
    getPageError,
  } = useSelector((state) => state.homeReducers);

  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(getListJobsResult.length / postPerPage); i++) {
    pageNumber.push(i);
  }

  useEffect(() => {
    dispatch(getListAllJobs());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPageJobs());
  }, [dispatch]);

  return (
    <>
      <div className="container-fluid">
        <div className="container-fluid">
          <div className="row">
            <div className="row">
              <div className="col-3">
                <input
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  className=" search form-control me-1"
                  type="text"
                  placeholder="Search by Title,Location,or Type"
                  aria-label="Search"
                />
              </div>
            </div>
            <div
              className="card"
              style={{
                position: "absolute",
                height: "200px",
                width: "1500px",
                left: "auto",
                top: "150px",
                boxShadow: " 0px 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "12px",
              }}
            >
              <div className="row">
                <div className="col-3">
                  <h1
                    className="todo-title"
                    style={{
                      position: "absolute",
                      height: "54px",
                      width: "430px",
                      left: "55px",
                      top: "12px",
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "36px",
                      lineHeight: "54px",
                      /* identical to box height */

                      color: "#111111",
                    }}
                  >
                    {" "}
                    Job List
                  </h1>
                </div>
              </div>
                <div className="row">
                <div className="card card-details">
                  <h1>Job List</h1>
                  <hr></hr>
                  {getListJobsResult ? (
                    getListJobsResult
                      .filter((job) => {
                        if (search === "") {
                          return job;
                        } else if (
                          job.location
                            .toLowerCase()
                            .includes(search.toLowerCase())
                        ) {
                          return job;
                        } else if (
                          job.company
                            .toLowerCase()
                            .includes(search.toLowerCase())
                        ) {
                          return job;
                        } else if (
                          job.title.toLowerCase().includes(search.toLowerCase())
                        ) {
                          return job;
                        } else if (
                          job.type.toLowerCase().includes(search.toLowerCase())
                        ) {
                          return job;
                        }
                      })

                      .slice(indexOfFirstEmployee, indexOfLastEmployee)
                      // Math.ceil(getListJobsResult.length / postPerPage)

                      .map((job) => {
                        // console.log(getListJobsResult);
                        return (
                          <>
                            <div className="jobs">
                              <div className="row-first my-0 py-0 d-flex">
                                <Link
                                  onClick={() =>
                                    dispatch(getDetailJobsById(job))
                                  }
                                  to={`/positions/detail/${job.id}`}
                                  className="d-flex ms-1 me-auto my-0 py-0"
                                  style={{
                                    textDecoration: "none",
                                    color: "black",
                                  }}
                                >
                                  {job.title}
                                </Link>
                                <p className="d-flex ms-auto me-1 my-0 py-0">
                                  {job.location}
                                </p>
                              </div>
                              <div className="row-second my-0 py-0 d-flex">
                                <p className="d-flex ms-1 me-0 my-0 py-0">
                                  {job.company}-
                                </p>
                                <p className="d-flex ms-1  my-0 py-0">
                                  {job.type}
                                </p>
                                <p className="d-flex ms-auto me-1 my-0 py-0">
                                  {job.created_at}
                                </p>
                              </div>
                            </div>
                            <hr></hr>
                          </>
                        );
                      })
                  ) : getListJobsLoading ? (
                    <p>Loading...</p>
                  ) : (
                    <p>{getListJobsError ? getListJobsError : "Data Kosong"}</p>
                  )}
                </div>
              </div>

              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  {pageNumber.map((page) => {
                    return (
                      <>
                        <li className="page-item" key={page}>
                          <button
                            onClick={() => paginate(page)}
                            className="page-link"
                            href=""
                          >
                            {page}
                          </button>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </nav>
            </div>

            <svg
              width="830"
              height="120"
              viewBox="0 0 830 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="0.5" x2="830" y2="0.5" stroke="#E5E5E5" />
            </svg>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
