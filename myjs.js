var imageArray = [
    "http://cdn-media-2.lifehack.org/wp-content/files/2014/12/xmass-tree.jpg",
   "https://moviewriternyu.files.wordpress.com/2014/01/snowman-wallpaper.jpg",
   "http://www.loisdonovan.com/blog/wp-content/uploads/2013/11/Beautiful-Christmas-Tree-Decorations-Photos1.jpg",
    "http://i.huffpost.com/gen/2339018/images/o-SANTA-CLAUS-LIST-facebook.jpg",
    "http://coverlayout.com/facebook/covers/merry_christmas_gold/merry_christmas_gold.jpg",
    "https://static.pexels.com/photos/17795/christmas-xmas-christmas-tree-decoration.jpg",
    "http://www.planwallpaper.com/static/images/04d8762c-e9ff-48b4-800b-25850e9c6e80_37gzwyg.jpg",
   
    ]; 
    var currentIndex = 0; 


function renderImage(){
    
    if (currentIndex < 0) {
        currentIndex = imageArray.length - 1; 
    
    
    } else if (currentIndex >= imageArray.length) {
        currentIndex = 0; 
        
    }


    $('#thePhoto').attr('src', imageArray[currentIndex]);
}
renderImage(); 

function forwardImage(){
    currentIndex++;
    renderImage(); 
}


function backImage(){
    currentIndex--;
    renderImage(); 
}


$('#forwardButton').on('click', forwardImage);
$('#backButton').on('click',backImage);

var name = prompt ("What's your name?");
var outputString =   "   Happy Holidays, " + name + "!    "; 

$('h1').html(outputString);

google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['"Favorite Christmas Song"', 'How Much I want one '],
          ['"Silent Night" ',     5],
            ['"12 Days of Christmas"', 4],
          ['"Jingle Bells"',  4],
          ['"Santa Is Coming to Town" ', 6],
          ['"Frosty the Snowman" ',    7]
        ]);
        var chartWidth = $('body').width() * 0.5;
        var options = {
          title: 'Favorite Christmas Song',
            backgroundColor:'#C0C0C0',
            width: chartWidth,
            colors:['#EECA50']
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
  