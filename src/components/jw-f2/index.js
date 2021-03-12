import F2 from '@antv/f2';

function wrapEvent(e) {
  if (!e) return;
  if (!e.preventDefault) {
    e.preventDefault = function() {};
  }
  return e;
}

Component({
  properties: {
    onRender: {
      type: Function,
      value: () => {}
    }
  },
  lifetimes: {
    ready() {
      const query = wx.createSelectorQuery().in(this);
      query.select('.__jw-f2-canvas')
      .fields({
        node: true,
        size: true
      })
      .exec(res => {
        const { node, width, height } = res[0];
        const context = node.getContext('2d');
        const pixelRatio = wx.getSystemInfoSync().pixelRatio;
        // 高清设置
        node.width = width * pixelRatio;
        node.height = height * pixelRatio;

        const config = { context, width, height, pixelRatio };
        const that = this;
        this.triggerEvent('onRender', {
          F2, config, that
        })
      });
    },
  },
  methods: {
    touchStart(e) {
      const canvasEl = this.canvasEl;
      if (!canvasEl) {
        return;
      }
      canvasEl.dispatchEvent('touchstart', wrapEvent(e));
    },
    touchMove(e) {
      const canvasEl = this.canvasEl;
      if (!canvasEl) {
        return;
      }
      canvasEl.dispatchEvent('touchmove', wrapEvent(e));
    },
    touchEnd(e) {
      const canvasEl = this.canvasEl;
      if (!canvasEl) {
        return;
      }
      canvasEl.dispatchEvent('touchend', wrapEvent(e));
    }
  }
})