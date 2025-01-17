import { IMenuItem } from "./sidebar.types";

export function MenuItem({ item }: { item: IMenuItem }) {
  return (
    <>
      <a
        href={item.link}
        rel="noreferrer noopener"
        target="_blank"
        className="w-full"
      >
        <span className="flex items-center gap-x-4 hover:bg-zinc-500 p-4">
          <item.icon />
          {item.name}
        </span>
      </a>
    </>
  );
}
