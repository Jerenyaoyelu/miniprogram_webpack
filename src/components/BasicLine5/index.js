Component({
  properties: {
    chartData: {
      type: Object,
      value: {}
    }
  },
  chart: null,
  data: {
    chartId: '__jw-basic-line-5',
    domNode: null
  },
  observers: {
    'chartData': function(chartData) {
      if(chartData.length&&this.data.domNode) {
        this.chart.changeData(chartData);
      }
    }
  },
  methods: {
    initChart(e) {
      this.setData({
        domNode: e
      }, this.renderChart);
    },
    renderChart() {
      const {detail:{ F2, config, that}} = this.data.domNode;
      if(!F2 || !config || !that) return;
      this.chart = new F2.Chart(config);
      this.chart.source(this.properties.chartData);
      this.chart.axis('x', {
        grid: function grid(text) {
          if (text === 0) {
            return {
              lineDash: null
            };
          }
        }
      });
      this.chart.axis('y', {
        grid: function grid(text) {
          if (text === 0) {
            return {
              lineDash: null
            };
          }
        }
      });
      this.chart.tooltip(false);
      this.chart.interaction('pan', {
        limitRange: {
          x: {
            min: -100,
            max: 100
          }
        }
      });
      // 小程序不支持pinch交互
      // this.chart.interaction('pinch', {
      //   maxScale: 5,
      //   minScale: 1
      // });
      
      this.chart.line().position('x*y').shape('smooth');
      this.chart.render();
      that.chart = this.chart;
      that.canvasEl = this.chart.get('el');
    }
  }
})