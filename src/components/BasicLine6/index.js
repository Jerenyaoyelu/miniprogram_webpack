Component({
  properties: {
    chartData: {
      type: Object,
      value: {}
    }
  },
  data: {
    chartId: '__jw-basic-line-6'
  },
  methods: {
    renderChart(e) {
      const {F2, config, that} = e.detail;
      if(!F2 || !config || !that) return;
      const chart = new F2.Chart(config);
      chart.source(this.properties.chartData, {
        release: {
          min: 1990,
          max: 2010
        }
      });
      chart.tooltip({
        showCrosshairs: true,
        showItemMarker: false,
        background: {
          radius: 2,
          fill: '#1890FF',
          padding: [ 3, 5 ]
        },
        nameStyle: {
          fill: '#fff'
        },
        onShow: function onShow(ev) {
          const items = ev.items;
          items[0].name = items[0].title;
        }
      });
      chart.line().position('release*count');
      chart.point().position('release*count').style({
        lineWidth: 1,
        stroke: '#fff'
      });
      chart.interaction('pan');
      // 定义进度条
      chart.scrollBar({
        mode: 'x',
        xStyle: {
          offsetY: -5
        }
      });
  
      // 绘制 tag
      chart.guide().tag({
        position: [ 1969, 1344 ],
        withPoint: false,
        content: '1,344',
        limitInPlot: true,
        offsetX: 5,
        direct: 'cr'
      });
      chart.render();
      that.chart = chart;
      that.canvasEl = chart.get('el');
    }
  }
})