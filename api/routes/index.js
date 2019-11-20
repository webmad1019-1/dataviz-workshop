const express = require("express");
const router = express.Router();

function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

/* GET home page */
router.get("/barchart", (req, res, next) => {
  res.json({
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Dataset 1",
        backgroundColor: `rgba(255, 0, 0, .5)`,
        borderColor: "red",
        borderWidth: 1,
        data: [
          randomFloat(-100, 100),
          randomFloat(-100, 100),
          randomFloat(-100, 100),
          randomFloat(-100, 100),
          randomFloat(-100, 100),
          randomFloat(-100, 100),
          randomFloat(-100, 100)
        ]
      },
      {
        label: "Dataset 2",
        backgroundColor: `rgba(0, 0, 255, .5)`,
        borderColor: "blue",
        borderWidth: 1,
        data: [
          randomFloat(-100, 100),
          randomFloat(-100, 100),
          randomFloat(-100, 100),
          randomFloat(-100, 100),
          randomFloat(-100, 100),
          randomFloat(-100, 100),
          randomFloat(-100, 100)
        ]
      }
    ]
  });
});

module.exports = router;
