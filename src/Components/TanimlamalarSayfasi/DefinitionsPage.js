document.addEventListener('DOMContentLoaded', () => {
    // Example data
    let definitions = [
        { name: "Yıllık İzin", description: "Yıllık olarak verilen izin." },
        { name: "Babalık İzni", description: "Babaların doğum sonrası aldığı izin." },
        { name: "Annelik İzni", description: "Annelerin doğum sonrası aldığı izin." },
        { name: "Evlilik İzni", description: "Evlilik durumunda verilen izin." }
    ];

    const definitionsTable = document.getElementById('definitions').getElementsByTagName('tbody')[0];

    // Render definitions
    function renderDefinitions() {
        definitionsTable.innerHTML = '';
        definitions.forEach((def, index) => {
            let row = definitionsTable.insertRow();
            row.insertCell(0).textContent = def.name;
            row.insertCell(1).textContent = def.description;

            let actionsCell = row.insertCell(2);
            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'Sil';
            deleteButton.addEventListener('click', () => handleDelete(index));
            actionsCell.appendChild(deleteButton);

            let updateButton = document.createElement('button');
            updateButton.textContent = 'Güncelle';
            updateButton.addEventListener('click', () => showUpdateForm(index));
            actionsCell.appendChild(updateButton);
        });
    }

    renderDefinitions();

    // Handle new definition submission
    document.getElementById('addDefinitionForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('addDefinitionName').value;
        const description = document.getElementById('addDefinitionDescription').value;
        
        definitions.push({ name, description });
        renderDefinitions();

        document.getElementById('addDefinitionForm').reset();
        document.getElementById('addForm').style.display = 'none';
        alert('Yeni tanım eklendi.');
    });

    // Handle delete
    function handleDelete(index) {
        definitions.splice(index, 1);
        renderDefinitions();
    }

    // Show update form
    function showUpdateForm(index) {
        const selectedDefinition = definitions[index];
        document.getElementById('updateDefinitionName').value = selectedDefinition.name;
        document.getElementById('updateDefinitionDescription').value = selectedDefinition.description;
        document.getElementById('updateForm').style.display = 'block';
        document.getElementById('updateDefinitionForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const newName = document.getElementById('updateDefinitionName').value;
            const newDescription = document.getElementById('updateDefinitionDescription').value;
            definitions[index] = { name: newName, description: newDescription };
            renderDefinitions();
            document.getElementById('updateForm').style.display = 'none';
            document.getElementById('updateDefinitionForm').reset();
            alert('Tanım başarıyla güncellendi.');
        });
    }

    // İptal etme işlemi
    window.cancelUpdate = function() {
        document.getElementById('updateForm').style.display = 'none';
        document.getElementById('updateDefinitionForm').reset();
    };

    // Show add form
    window.showAddForm = function() {
        document.getElementById('addForm').style.display = 'block';
    };

    // İptal etme işlemi
    window.cancelAdd = function() {
        document.getElementById('addForm').style.display = 'none';
        document.getElementById('addDefinitionForm').reset();
    };
});
