import MaxButton from "../components/MaxButton/main.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "MaxButton",
  component: MaxButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    onClick: { action: "click" },
    onMouseEnter: { action: "mouseEnter" },
    onMouseleave: { action: "mouseleave" },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MaxButton },
  template:
    '<max-button  @mouseenter="onMouseEnter" @mouseleave="onMouseleave" @click="onClick" v-bind="$props" />',
});

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Normal.args = {
  content: "Button",
};
