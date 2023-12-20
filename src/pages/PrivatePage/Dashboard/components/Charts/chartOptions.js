export const caloriesOptions = {
  responsive: true,
  plugins: {
    legend: false,
  },
  scales: {
    x: {
      grid: {
        display: true,
        color: 'rgba(41, 41, 40, 1)',
      },
    },
    y: {
      min: 0,
      max: 3000,
      ticks: {
        stepSize: 1000,
        callback: (value) => (value === 0 ? value : value / 1000 + 'k'),
      },
      grid: {
        display: true,
        color: 'rgba(41, 41, 40, 1)',
      },
      onClick: function (e) {
        // Дії при кліці на анотацію
      },
    },
  },
  maintainAspectRatio: false,
};

export const waterOptions = {
  responsive: true,
  plugins: {
    legend: false,
  },
  scales: {
    x: {
      grid: {
        display: true,
        color: 'rgba(41, 41, 40, 1)',
      },
    },
    y: {
      min: 0,
      max: 3000,
      ticks: {
        stepSize: 1000,
        callback: (value) => (value === 0 ? value : value / 1000 + 'L'),
      },
      grid: {
        display: true,
        color: 'rgba(41, 41, 40, 1)',
      },
      onClick: function (e) {
        // Дії при кліці на анотацію
      },
    },
  },
  maintainAspectRatio: false,
};
  
const randomWeightData = () => {
  return Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));
};

export const weightOptions = {
  plugins: {
    legend: false,
    annotation: {
      annotations: Array.from({ length: 30 }, (_, i) => ({
        type: 'text',
        position: 'top',
        content: 'randomWeightData()', // backend
        x: i + 1,
        y: 0,
        font: {
          size: 10,
        },
      })),
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
    },
  },
  maintainAspectRatio: false,
};