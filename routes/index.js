const express = require("express");
const router = express.Router();

function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function randomScalingFactor() {
  return randomFloat(-100, 100);
}

function randomScalingFactorDoughnut() {
  return randomFloat(0, 100);
}

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/bar", (req, res, next) => {
  res.json({
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Set 1",
        backgroundColor: `rgba(255, 0, 0, .5)`,
        borderColor: "red",
        borderWidth: 1,
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor()
        ]
      },
      {
        label: "Set 2",
        backgroundColor: `rgba(0, 0, 255, .5)`,
        borderColor: "blue",
        borderWidth: 1,
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor()
        ]
      }
    ]
  });
});

router.get("/radar", (req, res, next) => {
  res.json({
    labels: [
      ["Eating", "Dinner"],
      ["Drinking", "Water"],
      "Sleeping",
      ["Designing", "Graphics"],
      "Coding",
      "Cycling",
      "Running"
    ],
    datasets: [
      {
        label: "Set 1",
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        borderColor: "rgba(255, 0, 0)",
        pointBackgroundColor: "rgba(255, 0, 0)",
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor()
        ]
      },
      {
        label: "Set 2",
        backgroundColor: "rgba(0, 0, 255, 0.5)",
        borderColor: "rgba(255, 0,0 , 0.5)",
        pointBackgroundColor: "rgba(255, 0, 0, 0.5)",
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor()
        ]
      }
    ]
  });
});

router.get("/doughnut", (req, res, next) => {
  res.json({
    datasets: [
      {
        data: [
          randomScalingFactorDoughnut(),
          randomScalingFactorDoughnut(),
          randomScalingFactorDoughnut(),
          randomScalingFactorDoughnut(),
          randomScalingFactorDoughnut()
        ],
        backgroundColor: ["red", "orange", "yellow", "green", "blue"],
        label: "Set 1"
      }
    ],
    labels: ["Red", "Orange", "Yellow", "Green", "Blue"]
  });
});

module.exports = router;
