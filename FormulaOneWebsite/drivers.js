
const numberOfTables = 3;

// Data for tables, including titles
const tableData = [
    // Max Verstappen
    {
        title: "Max Verstappen's Stats Last Five Years",
        data: [
            ["Year", "Points", "Drivers Championship Won"],
            ["2018","249","No"],
            ["2019","278","No"],
            ["2020","214","No"],
            ["2021", "395.5", "Yes"],
            ["2022","454","Yes"]
            
        ]
    },
    // Lewis Hamilton
    {
        title: "Lewis Hamilton's Stats Last Five Years",
        data: [
            ["Year", "Points", "Drivers Championship Won"],
            ["2018", "408", "Yes"],
            ["2019","413","Yes"],
            ["2020","347","Yes"],
            ["2021","387.5","No"],
            ["2022","240","No"]
        ]
    },
    // Sergio Perez
    {
        title: "Sergio Perez's Stats Last Five Years",
        data: [
            ["Year", "Points", "Drivers Championship Won"],
            ["2018","62","No"],
            ["2019", "52", "No"],
            ["2020","125","No"],
            ["2021","195","No"],
            ["2022","305","No"]
        ]
    },
    // Charles Leclerc
    {
        title: "Charles Leclerc's Stats Last Five Years",
        data: [
            ["Year", "Points", "Drivers Championship Won"],
            ["2018","39","No"],
            ["2019", "264", "No"],
            ["2020","98","No"],
            ["2021","169","No"],
            ["2022","308","No"]
        ]
    },
    //Carlos Sainz
    {
        title: "Carlos Sainz's Stats Last Five Years",
        data: [
            ["Year", "Points", "Drivers Championship Won"],
            ["2018","53","No"],
            ["2019", "96", "No"],
            ["2020","105","No"],
            ["2021","171.5","No"],
            ["2022","246","No"]
        ]
    },
    // George Russell
    {
        title: "George Russell's Stats Last Five Years",
        data: [
            ["Year", "Points", "Drivers Championship Won"],
            ["2018","N/A","No"],
            ["2019", "0", "No"],
            ["2020","3","No"],
            ["2021","16","No"],
            ["2022","275","No"]
        ]
    },
    // Pierre Gasly
    {
        title: "Pierre Gasly's Stats Last Five Years",
        data: [
            ["Year", "Points", "Drivers Championship Won"],
            ["2018","29","No"],
            ["2019", "95", "No"],
            ["2020","75","No"],
            ["2021","111","No"],
            ["2022","23","No"]
        ]
    },
    // Esteban Ocon
    {
        title: "Esteban Ocon's Stats Last Five Years",
        data: [
            ["Year", "Points", "Drivers Championship Won"],
            ["2018","49","No"],
            ["2019", "N/A", "No"],
            ["2020","62","No"],
            ["2021","74","No"],
            ["2022","92","No"]
        ]
    },
    // Lando Norris
    {
        title: "Lando Norris's Stats Last Five Years",
        data: [
            ["Year", "Points", "Drivers Championship Won"],
            ["2018","N/A","No"],
            ["2019", "49", "No"],
            ["2020","97","No"],
            ["2021","172","No"],
            ["2022","122","No"]
        ]
    },
    // Oscar Piastri
    {
        title: "Oscar Piastri's Stats Last Five Years",
        data: [
            ["Year", "Points", "Drivers Championship Won"],
            ["2018","N/A","No"],
            ["2019", "N/A", "No"],
            ["2020","N/A","No"],
            ["2021","N/A","No"],
            ["2022","N/A","No"]
        ]
    },
    // Zhou Guanyu
    {
        title: "Zhou Guanyu's Stats Last Five Years",
        data: [
            ["Year", "Points", "Drivers Championship Won"],
            ["2018","N/A","No"],
            ["2019", "N/A", "No"],
            ["2020","N/A","No"],
            ["2021","N/A","No"],
            ["2022","6","No"]
        ]
    },
    // Valtteri Bottas
    {
        title: "Valtteri Bottas's Stats Last Five Years",
        data: [
            ["Year", "Points", "Drivers Championship Won"],
            ["2018","253","No"],
            ["2019", "326", "No"],
            ["2020","223","No"],
            ["2021","241","No"],
            ["2022","49","No"]
        ]
    },
    // Fernando Alonso
    {
        title: "Fernando Alonso's Stats Last Five Years",
        data: [
            ["Year", "Points", "Drivers Championship Won"],
            ["2018","50","No"],
            ["2019", "N/A", "No"],
            ["2020","N/A","No"],
            ["2021","83","No"],
            ["2022","81","No"]
        ]
    },
    // Lance Stroll
    {
        title: "Lance Stroll's Stats Last Five Years",
        data: [
            ["Year", "Points", "Drivers Championship Won"],
            ["2018","6","No"],
            ["2019", "21", "No"],
            ["2020","75","No"],
            ["2021","34","No"],
            ["2022","18","No"]
        ]
    },
    // Kevin Magnussen
    {
        title: "Kevin Magnussen's Stats Last Five Years",
        data: [
            ["Year", "Points", "Drivers Championship Won"],
            ["2018","56","No"],
            ["2019", "20", "No"],
            ["2020","1","No"],
            ["2021","N/A","No"],
            ["2022","25","No"]
        ]
    },
    // Nico Hulkenberg
    {
        title: "Nico Hulkenberg's Stats Last Five Years",
        data: [
            ["Year", "Points", "Drivers Championship Won"],
            ["2018","69","No"],
            ["2019", "37", "No"],
            ["2020","10","No"],
            ["2021","N/A","No"],
            ["2022","0","No"]
        ]
    },
    // Yuki Tsunoda
    {
        title: "Yuki Tsunoda's Stats Last Five Years",
        data: [
            ["Year", "Points", "Drivers Championship Won"],
            ["2018","N/A","No"],
            ["2019", "N/A", "No"],
            ["2020","N/A","No"],
            ["2021","32","No"],
            ["2022","12","No"]
        ]
    },
    // Nyck De Vries
    {
        title: "Nyck De Vries's Stats Last Five Years",
        data: [
            ["Year", "Points", "Drivers Championship Won"],
            ["2018","N/A","No"],
            ["2019", "N/A", "No"],
            ["2020","N/A","No"],
            ["2021","N/A","No"],
            ["2022","2","No"]
        ]
    },
    // Logan Sargeant 
    {
        title: "Logan Sargeant's Stats Last Five Years",
        data: [
            ["Year", "Points", "Drivers Championship Won"],
            ["2018","N/A","No"],
            ["2019", "N/A", "No"],
            ["2020","N/A","No"],
            ["2021","N/A","No"],
            ["2022","N/A","No"]
        ]
    },
    // Alex Albon
    {
        title: "Alex Albon's Stats Last Five Years",
        data: [
            ["Year", "Points", "Drivers Championship Won"],
            ["2018","N/A","No"],
            ["2019", "92", "No"],
            ["2020","105","No"],
            ["2021","N/A","No"],
            ["2022","4","No"]
        ]
    },
];


const tableContainer = document.getElementById("table-container");


function createTableWithHeader(tableInfo) {
    
    const header = document.createElement('h2');
    header.classList.add('table-title');
    header.textContent = tableInfo.title;
    tableContainer.appendChild(header);

    // Create the table element
    const table = document.createElement("table");
    table.classList.add('table1');
    table.style.border = "1px solid white";
    table.style.margin = "20px";
    table.style.borderCollapse = "collapse";
    
    tableInfo.data.forEach((row, rowIndex) => {
        const tr = document.createElement("tr");
        if (rowIndex === 0) {
            tr.classList.add('max');
        }
        
        row.forEach(cellData => {
            const cell = rowIndex === 0 ? document.createElement("th") : document.createElement("td");
            cell.textContent = cellData;
            cell.style.border = "1px solid red";
            cell.style.padding = "8px";
            tr.appendChild(cell);
        });
        
        table.appendChild(tr);
    });
    
    // Append the table to the container
    tableContainer.appendChild(table);
}

// Create and append tables with headers
tableData.forEach(tableInfo => {
    createTableWithHeader(tableInfo);
});
