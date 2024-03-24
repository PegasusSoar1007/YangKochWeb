var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Production', 'Shipping', 'Marketing', 'Taxes and Fees'],
    datasets: [{
      label: 'Budget Allocation',
      data: [60, 10, 15, 15], // Allocation percentages
      backgroundColor: [
        'rgba(0, 123, 255, .3)', // Vibrant Blue
        'rgba(0, 200, 81, .3)', // Lively Green
        'rgba(142, 68, 173, .3)', // Rich Purple
        'rgba(255, 235, 59, .3)' // Bright Yellow
    ],
    borderColor: [
        'rgba(0, 123, 255, .3)', // Vibrant Blue
        'rgba(0, 200, 81, .3)', // Lively Green
        'rgba(142, 68, 173, .3)', // Rich Purple
        'rgba(255, 235, 59, .3)'
    ],
    
      borderWidth: 2,
      hoverOffset: 5
    }]
  },
  options: {
    responsive: true,
    layout: {
      padding: {
          top: 50 // Adds space between the top labels and the chart
      }
  },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
          font: {
            size: 14,
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
          }
        }
      },
      title: {
        display: true,
        text: 'Why $8,000 to Start?',
        font: {
          size: 18,
          family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        },
        padding: {
          top: 10,
          bottom: 30
        }
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function(context) {
            let label = context.label || '';
            if (label) {
              label += ': $';
            }
            if (context.parsed !== null) {
              let total = 8000; // Total budget amount
              let value = (context.parsed * total / 100).toFixed(2);
              label += value;
            }
            return label;
          }
        },
        padding: 16
      }
    }
  }
});
