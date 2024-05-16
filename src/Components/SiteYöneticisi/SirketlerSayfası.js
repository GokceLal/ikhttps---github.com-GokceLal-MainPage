document.addEventListener('DOMContentLoaded', () => {
    const applicationForm = document.getElementById('application-form');
    const membershipForm = document.getElementById('membership-form');
    const detailsForm = document.getElementById('details-form');
    const applicationList = document.getElementById('application-list');
    const showPlansButton = document.getElementById('show-plans-button');
    const plansTableContainer = document.getElementById('plans-table-container');
    const planTypeSelect = document.getElementById('planType');
    const membershipCompanyNameInput = document.getElementById('membershipCompanyName');

    applicationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const companyName = document.getElementById('companyName').value;
        const email = document.getElementById('email').value;
        const status = document.getElementById('status').value;
        
        // Logic to handle application submission and update the application list
        addApplication(companyName, email, status);
    });

    membershipForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const planType = planTypeSelect.value;
        const membershipCompanyName = membershipCompanyNameInput.value;
        
        // Logic to handle membership plan creation
        createMembershipPlan(planType, membershipCompanyName);
    });

    detailsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const details = document.getElementById('details').value;
        
        // Logic to handle company details update
        updateCompanyDetails(details);
    });

    showPlansButton.addEventListener('click', () => {
        showPlans();
    });

    function addApplication(companyName, email, status) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${companyName}</td>
            <td>${email}</td>
            <td>${status}</td>
            <td>
                <button onclick="approveApplication('${email}')">Approve</button>
                <button onclick="rejectApplication('${email}')">Reject</button>
            </td>
        `;
        applicationList.appendChild(row);
    }

    function createMembershipPlan(planType, membershipCompanyName) {
        // Logic to handle membership plan creation
        console.log(`Creating ${planType} membership plan for company ${membershipCompanyName}.`);
        // Tabloya ekleme
        const plansTableBody = document.getElementById('plans-table-body');
        const newRow = plansTableBody.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        cell1.textContent = membershipCompanyName;
        cell2.textContent = planType;
    }

    function updateCompanyDetails(details) {
        // Logic to handle company details update
        console.log(`Updating company details: ${details}`);
    }

    function showPlans() {
        const plansTable = document.createElement('table');
        plansTable.innerHTML = `
            <thead>
                <tr>
                    <th>Şirket Adı</th>
                    <th>Plan Tipi</th>
                </tr>
            </thead>
            <tbody id="plans-table-body"></tbody>
        `;
        plansTableContainer.innerHTML = ''; // Önceki tabloyu temizle
        plansTableContainer.appendChild(plansTable);
    }

    window.approveApplication = (email) => {
        // Logic to handle application approval
        console.log(`Approving application for ${email}`);
    };

    window.rejectApplication = (email) => {
        // Logic to handle application rejection
        console.log(`Rejecting application for ${email}`);
    };
});
