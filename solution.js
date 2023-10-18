/*
and should return a DOM node with the following structure:

<div class='district-sales'>
    <h1>Darcy</h1>
    <h3>Total quota is: 750</h3>
    <h3>ATX Sales Team</h3>
    <ul>
        <li>Alice</li>
        <li>Bob</li>
        <li>Charlie</li>
    </ul>
</div>

*/ 

function htmlFromManager(obj) {
    // create div with class name 'district-sales'
    const div = document.createElement('div');
    div.className = 'district-sales';

    // create h1 header
    const h1 = document.createElement('h1');
    h1.textContent = obj.name;
    div.appendChild(h1);

    // create h3 header
    const total = document.createElement('h3');
    let sumQuota = 0;

    // Calculate the total quota
    for (let i = 0; i < obj.salesTeam.length; i++) {
        sumQuota += parseInt(obj.salesTeam[i].quota);
    }
    total.textContent = `Total quota is: ${sumQuota}`;
    div.appendChild(total);
    
    const atxSalesTeam = document.createElement('h3');
    atxSalesTeam.textContent = `ATX Sales Team`
    div.appendChild(atxSalesTeam);

    const ul = document.createElement('ul');
    for (let i = 0; i < obj.salesTeam.length; i++){
        let li = document.createElement('li')
        li.textContent = obj.salesTeam[i].name;
        ul.appendChild(li);
    }
    div.appendChild(ul) 

    // Append the div to the document body
    document.body.appendChild(div);
}

const obj = {
    name: 'Darcy',
    salesTeam: [
        { name: 'Alice', quota: '500' },
        { name: 'Bob', quota: '240' },
        { name: 'Charlie', quota: '10' },
    ],
    district: {
        name: 'ATX',
        offices: 10,
        remote: true
    }
}

htmlFromManager(obj);