import type React from "react";

export function Container(props: React.PropsWithChildren & { className: string }) {
  return <div className={"flex w-[100%] m-3 p-5 rounded-xl container bg-black/30 border border-white/10 shadow-xl" + props.className}>
    <div>
      {props.children}
    </div>
  </div>;
}
