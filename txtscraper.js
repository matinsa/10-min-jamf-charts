    $.get("flatfiledb/mojave.txt", function(mojave) {
    $.get("flatfiledb/highsierra.txt", function(highsierra) {
    $.get("flatfiledb/sierra.txt", function(sierra) {
    $.get("flatfiledb/eol.txt", function(eol) {
new Chart(document.getElementById("bar-chart"), {
type: 'bar',
    data: {
  labels: ["Mojave", "High Sierra", "Sierra", "EoL"],
  datasets: [
    {
      backgroundColor: ["red", "blue","green","purple"],
      data: [mojave,highsierra,sierra,eol]
    }
  ]
},
options: {
legend: { display: false },
  title: {
    display: true,
          }
}
});
});
});
});
});