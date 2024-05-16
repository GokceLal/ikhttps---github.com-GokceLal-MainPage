function generateChart() {
    const companyCount = document.getElementById('companyCount').value;
    const managerCount = document.getElementById('managerCount').value;
    const employeeCount = document.getElementById('employeeCount').value;

    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Şirket Sayısı', 'Kayıtlı Şirket Yöneticisi Sayısı', 'Kayıtlı Personel Sayısı'],
            datasets: [{
                label: 'Bilgiler',
                data: [companyCount, managerCount, employeeCount],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(75, 192, 192, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
