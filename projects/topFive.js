// rankings
var myArrayMen = [
  {
    ranking: "1",
    country: "USA",
    name: "Michael Phelps",
    born: "1985-06-30",
  },
  {
    ranking: "2",
    country: "USA",
    name: "Mark Spitz",
    born: "1950-02-10",
  },
  {
    ranking: "3",
    country: "Russia",
    name: "",
    born: "",
  },
  {
    ranking: "4",
    country: "",
    name: "",
    born: "",
  },
  {
    ranking: "5",
    country: "",
    name: "",
    born: "",
  },
];

var myArrayWomen = [
  {
    ranking: "1",
    country: "",
    name: "",
    born: "",
  },
  {
    ranking: "2",
    country: "",
    name: "",
    born: "",
  },
  {
    ranking: "3",
    country: "",
    name: "",
    born: "",
  },
  {
    ranking: "4",
    country: "",
    name: "",
    born: "",
  },
  {
    ranking: "5",
    country: "",
    name: "",
    born: "",
  },
];

buildTable(myArrayMen);

function buildTable(data) {
  var table = document.getElementById("myTable");

  for (var i = 0; i < data.length; i++) {
    var row = `<tr>
              <td class="cell_ranking">${data[i].ranking}</td>
              <td class="cell_country">${data[i].country}</td>
              <td class="name_centered cell_name">${data[i].name}</td>
              <td class="cell_class">${data[i].born}</td>`;

    table.innerHTML += row;
  }
}
