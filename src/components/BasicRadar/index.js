import _ from 'lodash';

Component({
  properties: {
    chartData: {
      type: Object,
      value: {}
    }
  },
  data: {
    chartId: '__jw-basic-radar'
  },
  methods: {
    renderChart(e) {
      const {F2, config, that} = e.detail;
      if(!F2 || !config || !that) return;
      const chart = new F2.Chart(config);
      chart.coord('polar');
      chart.source(this.properties.chartData, {
        score: {
          min: 0,
          max: 120,
          nice: false,
          tickCount: 4
        }
      });
      chart.tooltip({
        custom: true, // 自定义 tooltip 内容框
        onChange: function onChange(obj) {
          const legend = chart.get('legendController').legends.top[0];
          const tooltipItems = obj.items;
          const legendItems = legend.items;
          const map = {};
          legendItems.forEach(function(item) {
            map[item.name] = _.clone(item);
          });
          tooltipItems.forEach(function(item) {
            const name = item.name;
            const value = item.value;
            if (map[name]) {
              map[name].value = value;
            }
          });
          legend.setItems(_.values(map));
        },
        onHide: function onHide() {
          const legend = chart.get('legendController').legends.top[0];
          legend.setItems(chart.getLegendItems().country);
        }
      });
      chart.axis('score', {
        label: function label(text, index, total) {
          if (index === total - 1) {
            return null;
          }
          return {
            top: true
          };
        },
        grid: {
          lineDash: null,
          type: 'arc' // 弧线网格
        }
      });
      chart.axis('item', {
        grid: {
          lineDash: null
        }
      });
      chart.line().position('item*score').color('user');
      chart.point().position('item*score').color('user')
        .style({
          stroke: '#fff',
          lineWidth: 1
        });
      chart.render();
      that.chart = chart;
      that.canvasEl = chart.get('el');
    }
  }
})