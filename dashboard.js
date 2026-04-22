// Chart initialization
const ctx = document.getElementById("salesChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Sales",
        data: [120, 190, 300, 250, 220, 400, 380],
        borderColor: "#38D9A9",
        backgroundColor: "#ebfbee",
        tension: 0.3,
        fill: true,
        pointRadius: 4
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false, // keep chart responsive
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

  const toggle = document.querySelector(".filter-toggle");
  const panel = document.querySelector(".filter-panel");

  toggle.addEventListener("click", () => {
    panel.hidden = !panel.hidden;
  });