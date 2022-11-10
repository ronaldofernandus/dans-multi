const axios = require("axios").default;

const { URL } = require("url");

class jobsController {
 
  static async getJobsByWord(req, res) {
    try {
      console.log("testing");
      let frontUrl = new URL(
        `${req.protocol}://${req.get("host")}${req.originalUrl}`
      );
      console.log(frontUrl);
      var backUrl = new URL(
        "http://dev3.dansmultipro.co.id/api/recruitment/positions.json"
      );
      backUrl.search = frontUrl.search;
      console.log(backUrl);
      let data = await axios({
        method: "GET",
        url: backUrl.href,
        timeout: 120000,
      });
      res.status(200).json(data.data);
    } catch (error) {
      // console.log(error);
      res.status(500).json(error);
    }
  }

  static async getPageJobs(req, res) {
    try {
      const page = +req.query.page || 1;
      const perPage = +req.query.perPage || 5;
      let getPageJobs = await axios({
        method: "GET",
        url: "http://dev3.dansmultipro.co.id/api/recruitment/positions.json" + "?page=" + page,
      });
      const url = URL + "?" + page;

      console.log(url);
      res.status(200).json(getPageJobs.data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getPositionById(req, res) {
    try {
      const id = req.params.id;
      let getPositionById = await axios({
        method: "GET",
        url: "http://dev3.dansmultipro.co.id/api/recruitment/" + `/positions/${id}`,
      });
      // const url = URL1 + `positions/${id}`;
      // console.log(url);
      res.status(200).json(getPositionById.data);
      // res.status(200).json("test");
    } catch (error) {
      console.log(error);
      // res.status(500).json(error);
    }
  }
}

module.exports = jobsController;
