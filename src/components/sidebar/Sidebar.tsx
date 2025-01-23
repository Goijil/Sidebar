import { Menu } from "./Menu";
import { useOutside } from "../../hooks/useOutside/useOutside";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { m, spring } from "framer-motion";
import { useAtom } from "jotai";
import { isOpenAtom } from "../../jotai/stor";
import { Profile } from "../profile/Profile";
import { PROFILE } from "../profile/data.profile";

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

  const m_aside = {
    type: spring,
    stiffness: 160,
    damping: 25,
    mass: 2,
    // ...(!isOpen && { delay: 0.2 }),
    // when: "beforeChildren",
    // delay: 0.3,
    ease: "easeOut",
    // bounce: 0.4,
  };
  return (
    <>
      <m.aside
        ref={ref}
        className="fixed text-white text-lg mt-4 ml-4 w-52 bg-zinc-600 shadow-lg rounded-md "
        animate={{ width: isOpen ? 208 : 56 }}
        drag
        // dragTransition={{ power: 0.1, timeConstant: 900 }}
        transition={m_aside}
      >
        <button
          className="absolute w-12 h-12 -right-12 flex justify-center items-center opacity-50 hover:opacity-100 duration-300"
          onClick={mouseEvent}
        >
          {isOpen ? <PanelLeftOpen /> : <PanelLeftClose />}
        </button>
        <div>
          {PROFILE.map((item) => (
            <Profile
              email={item.email}
              img={item.img}
              login={item.login}
              key={item.email}
            />
          ))}
          <Menu />
        </div>
      </m.aside>
    </>
  );
}