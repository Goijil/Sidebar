import { Menu } from "./Menu";

export function Sidebar() {
  return (
    <>
      <aside className="fixed text-white text-lg mt-4 ml-4 w-52 bg-zinc-600 shadow-lg rounded-md">
        <Menu />
      </aside>
    </>
  );
}
