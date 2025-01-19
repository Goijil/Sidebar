import { MenuItem } from "./MenuItem";
import { MENU } from "./data.sidebar";

export function Menu() {
  return (
    <>
      <div className="flex flex-col overflow-hidden whitespace-nowrap">
        {MENU.map((item) => (
          <MenuItem item={item} key={item.link} />
        ))}
      </div>
    </>
  );
}
