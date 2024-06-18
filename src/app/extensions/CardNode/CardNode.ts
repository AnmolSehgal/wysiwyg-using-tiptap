import { Node, mergeAttributes } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import CardNodeView from "./CardNode.view";

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
  name: "cardNode",
  group: "block",
  content: "imageNode captionNode",
  gapCursor: false,
  atom: true,
  parseHTML() {
    return [
      {
        tag: "cardNode",
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
  addNodeView() {
    return ReactNodeViewRenderer(CardNodeView);
  },
});

export default CardNode;
