// 匯入元件，元件必須宣告 name
import YunButton from "./main.vue";

YunButton.install = function (Vue) {
  // 為元件提供 install 安裝方法，供按需引入
  Vue.component(YunButton.name, YunButton);
};

export default YunButton;
