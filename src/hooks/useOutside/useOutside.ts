import { useEffect, useRef } from "react";
import { IUseOutside } from "./types.useOutside"; // Импорт интерфейса

export const useOutside = ({ isOpen, setIsOpen }: IUseOutside) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false); // Закрываем меню
      }
    };

    if (isOpen) {
      // Если сайдбар открыт, добавляем обработчик события
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Убираем обработчик при размонтировании или изменении isOpen
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return { ref };
};
