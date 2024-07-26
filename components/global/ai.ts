import { genText } from "@/app/api/ai/route";
import { Editor } from "@tiptap/react";

class AI {
  editor: Editor;
  constructor(editor: Editor) {
    this.editor = editor;
  }

  async test() {
    const prompt = "Say Hello World.";
    const { from, to } = this.editor.state.selection;
    const context = this.editor.state.doc.textBetween(from, to, " ");
    const res = await genText({ context, prompt });
    this.editor.chain().focus().insertContent(res).run();
  }
  tone() {}
  grammar() {}
  extend() {}
  shorten() {}
  simplify() {}
  summarize() {}
  complete() {}
}

export default AI;
