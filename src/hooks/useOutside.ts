import { useEffect, useRef, useState } from "react";

export const useOutside = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); // Состояние
  const ref = useRef(null); // Ссылка на элемент

  const toggleSidebar = () => setIsCollapsed((prev) => !prev);

  // Обработчик кликов вне области
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsCollapsed(false); // Закрываем меню
    }
  };

  // Добавляем и удаляем обработчик событий
  useEffect(() => {
    if (isCollapsed) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCollapsed]);

  // Возвращаем необходимые значения и методы
  return { ref, isCollapsed, toggleSidebar };
};
