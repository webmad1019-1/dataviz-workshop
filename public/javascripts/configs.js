let configs = (Configs = {
  barchart: {
    responsive: true,
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: `Bar Chart`
    }
  },
  doughnut: {
    responsive: true,
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Chart.js Doughnut Chart"
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  },
  radar: {
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Chart.js Radar Chart"
    },
    scale: {
      ticks: {
        beginAtZero: true
      }
    }
  }
});
