// // Line Chart
// const lineCtx = document.getElementById('lineChart').getContext('2d');
// new Chart(lineCtx, {
//     type: 'line',
//     data: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June'],
//         datasets: [{
//             label: 'Monthly Sales',
//             data: [12, 19, 3, 5, 2, 3],
//             borderColor: 'rgba(75, 192, 192, 1)',
//             backgroundColor: 'rgba(75, 192, 192, 0.2)',
//             borderWidth: 2,
//             tension: 0.4
//         }]
//     },
//     options: {
//         responsive: true,
//         plugins: {
//             legend: {
//                 display: true,
//                 position: 'top',
//             }
//         }
//     }
// });

// // Pie Chart
// const pieCtx = document.getElementById('pieChart').getContext('2d');
// new Chart(pieCtx, {
//     type: 'pie',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
//         datasets: [{
//             label: 'Category Distribution',
//             data: [12, 19, 3, 5, 2],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.8)',
//                 'rgba(54, 162, 235, 0.8)',
//                 'rgba(255, 206, 86, 0.8)',
//                 'rgba(75, 192, 192, 0.8)',
//                 'rgba(153, 102, 255, 0.8)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         responsive: true,
//         plugins: {
//             legend: {
//                 display: true,
//                 position: 'bottom',
//             }
//         }
//     }
// });

// Line Chart Configuration
// const ctx = document.getElementById('lineChart').getContext('2d');

// const lineChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June'],
//         datasets: [{
//             label: 'Monthly Sales',
//             data: [10, 20, 15, 25, 30, 40],
//             borderColor: 'rgba(54, 162, 235, 1)',
//             backgroundColor: 'rgba(54, 162, 235, 0.2)',
//             borderWidth: 2,
//             pointBackgroundColor: 'rgba(54, 162, 235, 1)',
//             pointBorderColor: '#fff',
//             tension: 0.4
//         }]
//     },
//     options: {
//         responsive: true,
//         plugins: {
//             legend: {
//                 display: true,
//                 position: 'top'
//             }
//         },
//         scales: {
//             x: {
//                 title: {
//                     display: true,
//                     text: 'Months',
//                     font: {
//                         size: 14
//                     }
//                 }
//             },
//             y: {
//                 title: {
//                     display: true,
//                     text: 'Sales',
//                     font: {
//                         size: 14
//                     }
//                 },
//                 beginAtZero: true
//             }
//         }
//     }
// });
// Line Chart Configuration
// const lineCtx = document.getElementById('lineChart').getContext('2d');
// const lineChart = new Chart(lineCtx, {
//     type: 'line',
//     data: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [{
//             label: 'Sales Trend',
//             data: [10, 20, 15, 25, 30, 40, 50],
//             borderColor: '#4bc0c0', // Smooth turquoise
//             backgroundColor: 'rgba(75, 192, 192, 0.2)',
//             borderWidth: 4,
//             pointBackgroundColor: '#4bc0c0',
//             pointRadius: 6,
//             pointHoverRadius: 8,
//             tension: 0.4 // Smooth curve for the line
//         }]
//     },
//     options: {
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: 'top',
//                 labels: {
//                     font: {
//                         size: 14
//                     }
//                 }
//             }
//         },
//         scales: {
//             x: {
//                 title: {
//                     display: true,
//                     text: 'Months',
//                     font: {
//                         size: 14,
//                         weight: 'bold'
//                     }
//                 }
//             },
//             y: {
//                 title: {
//                     display: true,
//                     text: 'Sales (in units)',
//                     font: {
//                         size: 14,
//                         weight: 'bold'
//                     }
//                 },
//                 beginAtZero: true
//             }
//         }
//     }
// });

// // Pie Chart Configuration
// const pieCtx = document.getElementById('pieChart').getContext('2d');
// const pieChart = new Chart(pieCtx, {
//     type: 'pie',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
//         datasets: [{
//             label: 'Category Distribution',
//             data: [15, 25, 35, 10, 15],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.8)',  // Red
//                 'rgba(54, 162, 235, 0.8)',  // Blue
//                 'rgba(255, 206, 86, 0.8)',  // Yellow
//                 'rgba(75, 192, 192, 0.8)',  // Green
//                 'rgba(153, 102, 255, 0.8)'  // Purple
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)'
//             ],
//             borderWidth: 2
//         }]
//     },
//     options: {
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: 'bottom',
//                 labels: {
//                     font: {
//                         size: 14
//                     }
//                 }
//             },
//             tooltip: {
//                 backgroundColor: 'rgba(0, 0, 0, 0.8)',
//                 titleColor: 'white',
//                 bodyColor: 'white'
//             }
//         }
//     }
// });
const ctx1 = document.getElementById('lineChart1').getContext('2d');
new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Sales',
            data: [10, 20, 15, 25, 30],
            borderColor: 'blue',
            fill: false
        }]
    },
    options: {
        responsive: true
    }
});
