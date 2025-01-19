// import { useAtomValue } from "jotai";
import { IMenuItem } from "./types.data.sidebar";
// import { isOpenAtom } from "../../jotai/stor";
// import { m } from "framer-motion";
import { PrintDelText } from "../UI/motionUi/PrintDelText";

export function MenuItem({ item }: { item: IMenuItem }) {
  // const isOpen = useAtomValue(isOpenAtom);

  return (
    <>
      <a
        href={item.link}
        rel="noreferrer noopener"
        target="_blank"
        className="w-full"
      >
        <span className="flex items-center p-4 hover:bg-zinc-500 hover:rounded-md overflow-hidden">
          <item.icon className="shrink-0 w-6 h-6 mr-4" />
          <PrintDelText text={item.name} key={1} />
        </span>
      </a>
    </>
  );
}
