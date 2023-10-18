# DOM-Makeup
DOM Makeup Review

// This is a repository for DOM Makeup, regarding the following problem.

This .js object:

```
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
```

should create the following DOM Node output on an HTML:

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
