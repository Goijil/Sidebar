import { Menu } from "./Menu";
import { useOutside } from "../../hooks/useOutside/useOutside";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { m, spring } from "framer-motion";
import { useAtom } from "jotai";
import { isOpenAtom } from "../../jotai/stor";

export function Sidebar() {
  const [isOpen, setIsOpen] = useAtom<boolean>(isOpenAtom);

  const toggleSidebar = (): void => {
    setIsOpen(!isOpen);
  };

  const { ref } = useOutside({ isOpen, setIsOpen });

  const mouseEvent = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation(); // Останавливаем всплытие клика
    toggleSidebar();
  };
  return (
    <>
      <m.aside
        ref={ref}
        className="fixed text-white text-lg mt-4 ml-4 w-52 bg-zinc-600 shadow-lg rounded-md "
        animate={{ width: isOpen ? 208 : 56 }}
        transition={{ type: spring, stiffness: 180, damping: 18 }}
      >
        <button
          className="absolute w-12 h-12 -right-12 flex justify-center items-center opacity-50 hover:opacity-100 duration-300"
          onClick={mouseEvent}
        >
          {isOpen ? <PanelLeftOpen /> : <PanelLeftClose />}
        </button>
        <Menu />
      </m.aside>
    </>
  );
}
