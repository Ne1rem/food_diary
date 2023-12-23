export const caloriesOptions = {
  responsive: true,
  plugins: {
    legend: false,
    tooltip: {
      callbacks: {
        label: (context) => {
          const label = context.dataset.label || '';
          const value = context.parsed.y;
          return `${label}: ${value} ${TooltipUnit(label)}`;
        },
      },
    },
  },
  scales: {
    x: {
      type: 'linear',
      position: 'bottom',
      min: 1,
      max: 30,
      ticks: {
        stepSize: 1,
      },
      grid: {
        display: true,
        color: 'rgba(41, 41, 40, 1)',
        borderWidth: 0.5,
      },
    },
    y: {
      type: 'linear',
      position: 'left',
      min: 0,
      max: 3000,
      ticks: {
        stepSize: 1000,
        callback: (value) => (value === 0 ? value : value / 1000 + 'k'),
      },
      grid: {
        display: true,
        color: 'rgba(41, 41, 40, 1)',
        borderWidth: 0.5,
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
    tooltip: {
      callbacks: {
        label: (context) => {
          const label = context.dataset.label || '';
          const value = context.parsed.y;
          return `${label}: ${value} ${TooltipUnit(label)}`;
        },
      },
    },
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

// Функція для отримання одиниць вимірювання для вспливаючої анотації
function TooltipUnit(label) {
  if (label === 'Calories') {
    return 'calories';
  } else if (label === 'Water') {
    return 'milliliters';
  }
  return '';
}
