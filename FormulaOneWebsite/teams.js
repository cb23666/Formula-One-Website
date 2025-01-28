// const numberOfTables = 3;


const tableData = [
    // Redbull
    {
        title: "Redbull's Stats Last Five Years",
        data: [
            ["Year", "Points", "Constructors Championship Won"],
            ["2018","419","No"],
            ["2019","417","No"],
            ["2020","319","No"],
            ["2021", "585.5", "No"],
            ["2022","759","Yes"]
            
        ]
    },
    {
        title: "Mercedes's Stats Last Five Years",
        data: [
            ["Year", "Points", "Constructors Championship Won"],
            ["2018","655","Yes"],
            ["2019","739","Yes"],
            ["2020","573","Yes"],
            ["2021", "613.5", "Yes"],
            ["2022","515","No"]
            
        ]
    },
    {
        title: "McLaren's Stats Last Five Years",
        data: [
            ["Year", "Points", "Constructors Championship Won"],
            ["2018","62","No"],
            ["2019","145","No"],
            ["2020","202","No"],
            ["2021", "275", "No"],
            ["2022","159","No"]
            
        ]
    },
    {
        title: "Ferrari's Stats Last Five Years",
        data: [
            ["Year", "Points", "Constructors Championship Won"],
            ["2018","571","No"],
            ["2019","504","No"],
            ["2020","131","No"],
            ["2021", "323.5", "No"],
            ["2022","554","No"]
            
        ]
    },
    {
        title: "Aston Martin's Stats Last Five Years",
        data: [
            ["Year", "Points", "Constructors Championship Won"],
            ["2018","111","No"],
            ["2019","73","No"],
            ["2020","195","No"],
            ["2021", "77", "No"],
            ["2022","55","No"]
            
        ]
    },{
        title: "Racing Bulls's Stats Last Five Years",
        data: [
            ["Year", "Points", "Constructors Championship Won"],
            ["2018","33","No"],
            ["2019","85","No"],
            ["2020","107","No"],
            ["2021", "142", "No"],
            ["2022","35","No"]
            
        ]
    },{
        title: "Haas Stats Last Five Years",
        data: [
            ["Year", "Points", "Constructors Championship Won"],
            ["2018","93","No"],
            ["2019","28","No"],
            ["2020","3","No"],
            ["2021", "0", "No"],
            ["2022","37","No"]
            
        ]
    },{
        title: "Williams Stats Last Five Years",
        data: [
            ["Year", "Points", "Constructors Championship Won"],
            ["2018","7","No"],
            ["2019","1","No"],
            ["2020","0","No"],
            ["2021", "23", "No"],
            ["2022","8","No"]
            
        ]
    },{
        title: "Alpine's Stats Last Five Years",
        data: [
            ["Year", "Points", "Constructors Championship Won"],
            ["2018","122","No"],
            ["2019","91","No"],
            ["2020","181","No"],
            ["2021", "155", "No"],
            ["2022","173","No"]
            
        ]
    },{
        title: "Sauber's Stats Last Five Years",
        data: [
            ["Year", "Points", "Constructors Championship Won"],
            ["2018","48","No"],
            ["2019","57","No"],
            ["2020","8","No"],
            ["2021", "13", "No"],
            ["2022","55","No"]
            
        ]
    },
]
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
