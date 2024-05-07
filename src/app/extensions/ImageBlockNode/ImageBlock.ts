import { Node, mergeAttributes } from "@tiptap/core";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    CardNode: {
      /**
       * create a card node
       */
      createImageNode: () => ReturnType;
    };
  }
}

const CardNode = Node.create({
  name: "imageBlockNode",
  group: "block",
  content: "imageNode captionNode",
  gapCursor: false,
  atom: true,
  parseHTML() {
    return [
      {
        tag: "imageBlockNode",
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["div", mergeAttributes(HTMLAttributes), 0];
  },
  addCommands() {
    return {
      createImageNode:
        () =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            content: [{ type: "imageNode" }, { type: "captionNode" }],
          });
        },
    };
  },
});

export default CardNode;
