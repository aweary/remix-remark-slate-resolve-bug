import { useRouteData } from "@remix-run/react";

import { createEditor } from "slate";
import { Slate, withReact } from "slate-react";
import { EditablePlugins } from "@udecode/slate-plugins";
import { useMemo, useState } from "react";

import type { Node } from "slate";

export function meta() {
 return {
  title: "Remix Starter",
  description: "Welcome to remix!",
 };
}

export default function Index() {
 let data = useRouteData();
 const [value, setValue] = useState<Node[]>([]);

 const editor = useMemo(() => withReact(createEditor()), []);

 return (
  <div>
   <Slate
    editor={editor}
    value={value}
    onChange={(newValue) => setValue(newValue)}
   >
    <EditablePlugins plugins={[]} placeholder="Enter some text..." />
   </Slate>
  </div>
 );
}
