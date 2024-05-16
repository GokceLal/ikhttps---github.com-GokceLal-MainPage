
document.addEventListener('DOMContentLoaded', () => {
    const applicationForm = document.getElementById('application-form');
    const membershipForm = document.getElementById('membership-form');
    const detailsForm = document.getElementById('details-form');
    const applicationList = document.getElementById('application-list');

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
        const planType = document.getElementById('planType').value;
        
        // Logic to handle membership plan creation
        createMembershipPlan(planType);
    });

    detailsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const details = document.getElementById('details').value;
        
        // Logic to handle company details update
        updateCompanyDetails(details);
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

    function createMembershipPlan(planType) {
        // Logic to handle membership plan creation
        console.log(`Creating ${planType} membership plan.`);
    }

    function updateCompanyDetails(details) {
        // Logic to handle company details update
        console.log(`Updating company details: ${details}`);
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
