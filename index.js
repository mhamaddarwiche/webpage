fetch('https://data-mccg.onrender.com/data')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('inventoryTable');
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.age}</td>
                <td>${item.email}</td>
               
            `;
            tableBody.appendChild(row);
        });
    })