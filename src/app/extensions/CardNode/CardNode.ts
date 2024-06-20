import { Node, mergeAttributes } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import CardNodeView from "./CardNode.view";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    CardNode: {
      /**
       * create a card node
       */
      createCardNode: () => ReturnType;
    };
  }
}

const CardNode = Node.create({
  name: "cardNode",
  group: "block",
  content: "imageNode captionNode",
  isolating: true,
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
      createCardNode:
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
