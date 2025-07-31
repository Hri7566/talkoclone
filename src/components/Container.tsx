import type React from "react";

export function Container(props: React.PropsWithChildren) {
  return <div className="flex w-[100%] m-3 p-5 rounded-xl container bg-black/30">
    <div>
      {props.children}
    </div>
  </div>;
}
