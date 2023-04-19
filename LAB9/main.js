function ScatterPlot() {
    var margins = {
      "left": 40,
      "right": 30,
      "top": 30,
      "bottom": 30
    };
  
    var width = 500 - margins.left - margins.right;
    var height = 500 - margins.top - margins.bottom;
  

    var svg = d3.select("#scatterplot")
      .attr("width", width + margins.left + margins.right)
      .attr("height", height + margins.top + margins.bottom);
  
    var plotArea = svg.append("g")
      .attr("transform", "translate(" + margins.left + "," + margins.top + ")");
  
    var points = d3.range(100).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height
    }));

    var xScale = d3.scaleLinear()
      .domain([0, width])
      .range([0, width]);
  
    var xAxis = d3.axisBottom(xScale);

    plotArea.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    var yScale = d3.scaleLinear()
      .domain([0, height])
      .range([height, 0]);
  
    var yAxis = d3.axisLeft(yScale);
  
    plotArea.append("g")
      .call(yAxis);
  
    plotArea.selectAll("circle")
      .data(points)
      .enter()
      .append("circle")
      .attr("cx", function(d) {
        return xScale(d.x);
      })
      .attr("cy", function(d) {
        return yScale(d.y);
      })
      .attr("r", 3)
      .style("fill", "orange");
  
    svg.append("text")
      .attr("x", margins.left + width / 2)
      .attr("y", margins.top / 2)
      .attr("text-anchor", "middle")
      .style("font-family", "Helvetica")
      .style("font-size", 20)
      .text("Scatter Plot");
 }

 
 function piechart (){ 


  d3.csv('titanic.csv').then(function(data){
    console.log(data);
    var grouped_data= d3.group (data, d=> parseInt (d.Age/10));

    console.log(grouped_data);

    var svg = d3.select("#piechart");

  
    let g = svg.append("g")
        .attr("transform", "translate(250,300)")
        .style("font-family", "Helvetica")
        .style("font-size", 14)

    var pie = d3.pie()
                .sort (null)
                .value(function(d){return d[1].length});
    

    var arc = d3.arc()
              .innerRadius(0)
              .outerRadius(200);


    var arcs = g.selectAll("arc")
              .data(pie(grouped_data))
              .enter()
              .append("g");
    

    arcs.append("path")
      .attr("fill", (d, i)=>{
          let value=d.data;
          return d3.schemeSet3[i];
      })
      .attr("d", arc);

      var title = g.append("text")
      .attr("x", 0)
      .attr("y", -250)
      .attr("text-anchor", "middle")
      .style("font-family", "Helvetica")
      .style("font-size", 16)
      .text("Age Distribution of Titanic Passengers");


      arcs.append("text")
      .attr("transform", function(d) {
        var pos = arc.centroid(d);
        pos[0] = pos[0] * 2.4; 
        pos[1] = pos[1] * 2.2; 
        return "translate(" + pos + ")";
 
    })  
    .text(function(d) { return d.data[0]*10 + "-" + (d.data[0]+1)*10; })
  });


         
};

function load() {

ScatterPlot();

piechart();

}







