// this holds the chart type and is able to randomly be of one type
// also is capable ok making requests to our own API
class ChartModel {
  constructor() {
    switch (this._randomInt(1, 3)) {
      case 1:
        this.type = "bar";
        break;
      case 2:
        this.type = "radar";
        break;
      case 3:
        this.type = "doughnut";
        break;
    }
  }

  request() {
    return axios.get(`http://localhost:3000/${this.type}`);
  }

  _randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

function requestChartDataModels() {
  return Array(4)
    .fill()
    .map(() => {
      return new ChartModel();
    });
}

let charts = [];
let chartDataModels = requestChartDataModels();

Promise.all(
  chartDataModels.map(chartModel => {
    return chartModel.request();
  })
).then(dataModels => {
  dataModels.forEach((dataModel, idx) => {
    var ctx = document.getElementById(`canvas${idx + 1}`).getContext("2d");
    Configs.radar.title = `Radar ${idx + 1}`;

    let chart = new Chart(ctx, {
      type: chartDataModels[idx].type,
      data: dataModel.data,
      options: Configs[chartDataModels[idx].type]
    });
    charts.push(chart);
  });

  // configuring the drag and drop
  dragula(
    [
      document.getElementById("left-handles"),
      document.getElementById("right-handles")
    ],
    {
      moves: function(el, container, handle) {
        return handle.classList.contains("handle");
      }
    }
  );
});

// refresh button handler
document.getElementById("refresh").addEventListener("click", function() {
  Promise.all(
    chartDataModels.map(chartModel => {
      return chartModel.request();
    })
  ).then(dataModels => {
    charts.forEach((chart, idx) => {
      let data = dataModels[idx].data;

      chart.data.datasets = data.datasets;
      chart.data.labels = data.labels;
      chart.update();
    });
  });
});
