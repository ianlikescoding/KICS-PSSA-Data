import bb, {pie, bar} from "billboard.js"

export function generatePieGraph(allCharts, bindTo) {
    let matchIndex = allCharts.findIndex(( el ) => el?.bindTo == bindTo);
    if (matchIndex >= 0) {
        console.log("destroy");
        allCharts[matchIndex].chart.destroy();
        allCharts.splice(matchIndex, 1);
    }
    
    var graph = bb.generate({
        data: {
            columns: [
            ["data1", 30],
            ["data2", 120]
            ],
            type: pie(), 
        },
        bindto: bindTo
        });

    allCharts.push({bindTo: bindTo, chart: graph})
}

export function generateBarChart(allCharts, bindTo) {
    console.log("allCharts: ", allCharts)
    let matchIndex = allCharts.findIndex(( el ) => el?.bindTo == bindTo);
    if (matchIndex >= 0) {
        console.log("destroy");
        allCharts[matchIndex].chart.destroy();
        allCharts.splice(matchIndex, 1);
    }

    var chart = bb.generate({
        data: {
          columns: [
          ["data1", 30, 200, 100, 400, 150, 250],
          ["data2", 130, 100, 140, 200, 150, 50]
          ],
          type: bar(), // for ESM specify as: bar()
        },
        bar: {
          width: {
            ratio: 0.5
          }
        },
        bindto: bindTo
      });

      allCharts.push({bindTo: bindTo, chart: chart});
      return chart;
}