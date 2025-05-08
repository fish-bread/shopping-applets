"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const goods = common_vendor.ref(true);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: goods.value === true
      }, goods.value === true ? {
        b: common_assets._imports_0$1,
        c: common_assets._imports_0$1,
        d: common_assets._imports_0$1,
        e: common_assets._imports_0$1
      } : {
        f: common_assets._imports_0$1
      }, {
        g: common_assets._imports_0$1,
        h: common_assets._imports_0$1,
        i: common_assets._imports_0$1,
        j: common_assets._imports_0$1,
        k: common_assets._imports_0$1,
        l: common_assets._imports_0$1,
        m: common_assets._imports_0$1,
        n: common_assets._imports_0$1,
        o: common_assets._imports_0$1,
        p: common_assets._imports_0$1,
        q: common_assets._imports_0$1,
        r: common_assets._imports_2$2,
        s: common_assets._imports_2,
        t: common_assets._imports_3$2,
        v: common_assets._imports_5
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1b3f9cc6"]]);
wx.createPage(MiniProgramPage);
