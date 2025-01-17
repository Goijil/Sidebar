import { MenuItem } from "./MenuItem";
import { MENU } from "./sidebar.data";

export function Menu() {
  return (
    <>
      <div className="flex flex-col">
        {MENU.map((item) => (
          <MenuItem item={item} key={item.link} />
        ))}
      </div>
    </>
  );
}
