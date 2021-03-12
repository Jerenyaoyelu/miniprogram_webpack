Component({
  properties: {
    data: {
      type: Object,
      value: {}
    }
  },
  lifetimes: {

  },
  methods: {
    renderChart(e) {
      const {F2, config, that} = e.detail;
      if(!F2 || !config || !that) return;
      const chart = new F2.Chart(config);
      chart.source(this.properties.data, {
        date: {
          range: [0, 1],
          type: 'timeCat',
          mask: 'MM-DD'
        },
        value: {
          max: 300,
          tickCount: 4
        }
      });
      chart.area().position('date*value').color('city').adjust('stack');
      chart.line().position('date*value').color('city').adjust('stack');
      chart.render();
      that.chart = chart;
      that.canvasEl = chart.get('el');
    }
  }
})