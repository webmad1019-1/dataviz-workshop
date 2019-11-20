function requestDataModels() {
  return Array(4)
    .fill()
    .map(() => {
      return axios.get("http://localhost:3000/barchart");
    });
}

let charts = [];

Promise.all(requestDataModels()).then(dataModels => {
  dataModels.forEach((dataModel, idx) => {
    var ctx = document.getElementById(`canvas${idx + 1}`).getContext("2d");
    let chart = new Chart(ctx, {
      type: "bar",
      data: dataModel.data,
      options: {
        responsive: true,
        legend: {
          position: "top"
        },
        title: {
          display: true,
          text: `Chart.js Bar Chart ${idx + 1}`
        }
      }
    });
    charts.push(chart);
  });

  dragula(
    [
      document.getElementById("left-lovehandles"),
      document.getElementById("right-lovehandles")
    ],
    {
      moves: function(el, container, handle) {
        return handle.classList.contains("handle");
      }
    }
  );
});

document.getElementById("refresh").addEventListener("click", function() {
  Promise.all(requestDataModels()).then(dataModels => {
    charts.forEach((chart, idx) => {
      let data = dataModels[idx].data;

      chart.data.datasets = data.datasets;
      chart.data.labels = data.labels;
      chart.update();
    });
  });
});
