var raceData = [
    
    {grandprix:'Bahrain', date:'2023-03-05',winner:'Max Verstappen',laps:'57',car:'Red Bull Racing Honda RBPT',secondplace:'Sergio Perez',thirdplace:'Fernado Alonso'},
    {grandprix:'Saudi Arabia', date:'2023-03-19',winner:'Sergio Perez',laps:'50',car:'Red Bull Racing Honda RBPT',secondplace:'Max Verstappen',thirdplace:'Fernado Alonso'},
    {grandprix:'Australian', date:'2023-04-02',winner:'Max Verstappen',laps:'58',car:'Red Bull Racing Honda RBPT',secondplace:'Lewis Hamilton',thirdplace:'Fernado Alonso'},
    {grandprix:'Azerbaijan', date:'2023-04-30',winner:'Sergio Perez',laps:'51',car:'Red Bull Racing Honda RBPT',secondplace:'Max Verstappen',thirdplace:'Charles Leclerc'},
    {grandprix:'Miami', date:'2023-05-07',winner:'Max Verstappen',laps:'57',car:'Red Bull Racing Honda RBPT',secondplace:'Sergio Perez',thirdplace:'Fernado Alonso'},
    {grandprix:'Emilia Romagna', date:'Cancelled',winner:'',laps:'',car:'',secondplace:'',thirdplace:''},
    {grandprix:'Monaco', date:'2023-05-28',winner:'Max Verstappen',laps:'78',car:'Red Bull Racing Honda RBPT',secondplace:'Fernado Alonso',thirdplace:'Esteban Ocon'},
    {grandprix:'Spanish', date:'2023-06-04',winner:'Max Verstappen',laps:'66',car:'Red Bull Racing Honda RBPT',secondplace:'Lewis Hamilton',thirdplace:'George Russell'},
    {grandprix:'Canadian', date:'2023-06-18',winner:'Max Verstappen',laps:'70',car:'Red Bull Racing Honda RBPT',secondplace:'Fernando Alonso',thirdplace:'Lewis Hamilton'},
    {grandprix:'Austria', date:'2023-07-02',winner:'Max Verstappen',laps:'71',car:'Red Bull Racing Honda RBPT',secondplace:'Charles Leclerc',thirdplace:'Sergio Perez'},
    {grandprix:'British', date:'2023-07-09',winner:'Max Verstappen',laps:'52',car:'Red Bull Racing Honda RBPT',secondplace:'Lando Norris',thirdplace:'Lewis Hamilton'},
    {grandprix:'Hungarian', date:'2023-07-23',winner:'Max Verstappen',laps:'70',car:'Red Bull Racing Honda RBPT',secondplace:'Lando Norris',thirdplace:'Sergio Perez'},
    {grandprix:'Belgian', date:'2023-07-30',winner:'Max Verstappen',laps:'44',car:'Red Bull Racing Honda RBPT',secondplace:'Sergio Perez',thirdplace:'Charles Leclerc'},
    {grandprix:'Dutch', date:'2023-08-27',winner:'Max Verstappen',laps:'72',car:'Red Bull Racing Honda RBPT',secondplace:'Fernando Alonso',thirdplace:'Pierre Gasly'},
    {grandprix:'Italian', date:'2023-09-03',winner:'Max Verstappen',laps:'53',car:'Red Bull Racing Honda RBPT',secondplace:'Sergio Perez',thirdplace:'Carlos Sainz'},
    {grandprix:'Singapore', date:'2023-09-17',winner:'Carlos Sainz',laps:'61',car:'Ferrari',secondplace:'Lando Norris',thirdplace:'Lewis Hamilton'},
    {grandprix:'Japanese', date:'2023-09-24',winner:'Max Verstappen',laps:'53',car:'Red Bull Racing Honda RBPT',secondplace:'Lando Norris',thirdplace:'Oscar Piastri'},
    {grandprix:'Qatar', date:'2023-10-08',winner:'Max Verstappen',laps:'57',car:'Red Bull Racing Honda RBPT',secondplace:'Oscar Piastri',thirdplace:'Lando Norris'},
    {grandprix:'United States', date:'2023-10-22',winner:'Max Verstappen',laps:'56',car:'Red Bull Racing Honda RBPT',secondplace:'Lando Norris',thirdplace:'Carlos Sainz'},
    {grandprix:'Mexican', date:'2023-10-29',winner:'Max Verstappen',laps:'71',car:'Red Bull Racing Honda RBPT',secondplace:'Lewis Hamilton',thirdplace:'Charles Leclerc'},
    {grandprix:'Brazilian', date:'2023-11-05',winner:'Max Verstappen',laps:'71',car:'Red Bull Racing Honda RBPT',secondplace:'Lando Norris',thirdplace:'Fernando Alonso'},
    {grandprix:'Las Vegas', date:'2023-11-19',winner:'Max Verstappen',laps:'50',car:'Red Bull Racing Honda RBPT',secondplace:'Charles Leclerc',thirdplace:'Sergio Perez'},
    {grandprix:'Abu Dhabi', date:'2023-11-26',winner:'Max Verstappen',laps:'58',car:'Red Bull Racing Honda RBPT',secondplace:'Charles Leclerc',thirdplace:'George Russell'},





];

buildTable(raceData);

function buildTable(data){
    var tbody = document.createElement('tbody');
    var table = document.querySelector('.table');

    for (var i =0; i < data.length; i++){
        var row = `<tr class='info'>
            <td>${data[i].grandprix}</td>
            <td>${data[i].date}</td>
            <td>${data[i].winner}</td>
            <td>${data[i].laps}</td>
            <td>${data[i].car}</td>
            <td>${data[i].secondplace}</td>
            <td>${data[i].thirdplace}</td>
        </tr>`

        tbody.innerHTML += row;
    }
    table.appendChild(tbody);
}