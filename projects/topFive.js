// tabs
function rankings(evt, sex) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(sex).style.display = "block";
  evt.currentTarget.className += " active";
}

// rankings
var myArrayMen = [
  {
    ranking: "1",
    country: "USA",
    name: "Michael Phelps",
    medals: "16",
  },
  {
    ranking: "2",
    country: "USA",
    name: "Mark Spitz",
    medals: "6",
  },
  {
    ranking: "3",
    country: "Russia",
    name: "Alexander Popov",
    medals: "5",
  },
  {
    ranking: "4",
    country: "Australia",
    name: "Ian Thorpe",
    medals: "5",
  },
  {
    ranking: "5",
    country: "USA",
    name: "Caeleb Dressel",
    medals: "3",
  },
];

var myArrayWomen = [
  {
    ranking: "1",
    country: "USA",
    name: "Katie Ledecky",
    medals: "7",
  },
  {
    ranking: "2",
    country: "Hungary",
    name: "Krisztina Egerszegi",
    medals: "7",
  },
  {
    ranking: "3",
    country: "Netherlands",
    name: "Inge de Bruijn",
    medals: "6",
  },
  {
    ranking: "4",
    country: "USA",
    name: "Nathalie Coughlin",
    medals: "5",
  },
  {
    ranking: "5",
    country: "USA",
    name: "Jenny Thompson",
    medals: "2",
  },
];

// buildTable(myArrayMen);

function buildTable(data) {
  var table = document.getElementById("myTable");

  table.innerHTML = "";

  for (var i = 0; i < data.length; i++) {
    var row = `<tr>
              <td class="cell_ranking">${data[i].ranking}</td>
              <td class="cell_country">${data[i].country}</td>
              <td class="name_centered cell_name">${data[i].name}</td>
              <td class="cell_class">${data[i].medals}</td>`;

    table.innerHTML += row;
  }
}

function buildTable2(data) {
  var table = document.getElementById("myTable2");

  table.innerHTML = "";

  for (var i = 0; i < data.length; i++) {
    var row = `<tr>
              <td class="cell_ranking">${data[i].ranking}</td>
              <td class="cell_country">${data[i].country}</td>
              <td class="name_centered cell_name">${data[i].name}</td>
              <td class="cell_class">${data[i].medals}</td>`;

    table.innerHTML += row;
  }
}

// click the "default" button, the "Men" button, after all code is read
document.getElementById("default").click();
