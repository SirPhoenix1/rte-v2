import FontFamily from "@tiptap/extension-font-family";

const FontFamilyPlugin = FontFamily.extend({
  name: "fontFamily",

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontFamily: {
            default: null,
            parseHTML: (element) =>
              element.style.fontFamily?.replace(/['"]+/g, ""),
            renderHTML: (attributes) => {
              if (!attributes.fontFamily) {
                return {};
              }

              return {
                class: `${attributes.fontFamily}`,
              };
            },
          },
        },
      },
    ];
  },
});

export default FontFamilyPlugin;
