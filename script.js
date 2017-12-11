// Our labels along the x-axis
var years = [1999,2000,2001,2002,2003,2004,2005,2006,2007,2008, 2009,2010,2011,2012,2013,2014,2015];
// For drawing the lines

var whites = [13644,14585,16367,19949,22245,24201,26186,29970,30755,31448,31749,33145,35510,35497,37359,39820,43917];		
var blacks = [3030,2977,3099,3404,3466,3577,4019,4722,4126,3589,3588,3502,3766,3842,4282,4730,5505];
var americanIndian = [155,143,179,214,275,332,344,376,363,413,456,439,483,516,509,580,593];		
var asianorPasificislander = [137,130,154,189,213,229,260,311,288,285,331,334,419,416,456,487,577];		
var hispanic = [1965,1700,1731,2137,2358,2257,2596,2871,2723,2761,2811,2788,3152,3272,3616,3790,4387];		


var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      { 
        data: whites,
        label: "Whites",
        borderColor: "#3e95cd",
        fill: false
      },
      { 
        data: blacks,
        label: "Blacks",
        borderColor: "#8e5ea2",
        fill: false
      },
      { 
        data: americanIndian,
        label: "American Indian",
        borderColor: "#3cba9f",
        fill: false
      },
      { 
        data: asianorPasificislander,
        label: "Asian or Pacific Islander",
        borderColor: "#e8c3b9",
        fill: false
      },
      { 
        data: hispanic,
        label: "Hispanic",
        borderColor: "#c45850",
        fill: false
      }
    ]
  }
});