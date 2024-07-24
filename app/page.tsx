"use client";

import Editor from "@/components/global/editor";
import Settings from "@/components/global/settings";

export default function Home() {
  return (
    <div>
      <div id="page-menu" className="w-screen p-3 flex justify-end">
        <Settings />
      </div>
      <div id="page-editor" className="w-1/2 h-screen mx-auto">
        <h1 className="flex justify-center pt-10 text-2xl font-medium">
          Rich Text Editor
        </h1>
        <div className="w-full h-full my-10">
          <Editor />
        </div>
      </div>
    </div>
  );
}
