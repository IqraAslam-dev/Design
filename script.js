// Line Chart Configuration
const lineCtx = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Sales Data',
            data: [10, 20, 15, 25, 30],
            borderColor: 'DarkBlue',
            backgroundColor: 'Lime',
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            }
        }
    }
});

// Pie Chart Configuration
const pieCtx = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [{
            label: 'Dataset',
            data: [10, 20, 30, 15, 25],
            backgroundColor: [
                'DarkRed',
                'DeepPink',
                'OrangeRed',
                'rgba(75, 192, 192, 0.8)',
                'DarkMagenta'
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
});
