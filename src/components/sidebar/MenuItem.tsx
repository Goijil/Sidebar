import { useAtomValue } from "jotai";
import { IMenuItem } from "./types.sidebar.data";
import { isOpenAtom } from "../../jotai/stor";
import { m } from "framer-motion";

export function MenuItem({ item }: { item: IMenuItem }) {
  const isOpen = useAtomValue(isOpenAtom);

  return (
    <>
      <a
        href={item.link}
        rel="noreferrer noopener"
        target="_blank"
        className="w-full"
      >
        <span className="flex items-center p-4 hover:bg-zinc-500 hover:rounded-md">
          <item.icon className="shrink-0 w-6 h-6 mr-4" />
          {isOpen ? (
            // Когда меню открыто: анимация появления текста
            <>
              {item.name.split("").map((letter, index) => (
                <m.span
                  key={index}
                  initial={{ opacity: 0 }} // Начальное состояние: буква размыта и прозрачна
                  animate={{ opacity: 1 }} // Конечное состояние: буква четкая и видимая
                  transition={{
                    delay: index * 0.03, // Задержка между буквами, чтобы появлялись поочередно
                    duration: 0.15, // Длительность анимации каждой буквы
                    ease: "linear", // Плавность анимации
                  }}
                >
                  {letter}
                </m.span>
              ))}
            </>
          ) : (
            // Когда меню закрыто: анимация исчезновения текста
            <>
              {item.name.split("").map((letter, index) => (
                <m.span
                  key={index}
                  initial={{ opacity: 1 }} // Начальное состояние: буква четкая и видимая
                  animate={{ opacity: 0 }} // Конечное состояние: буква размыта и исчезает
                  transition={{
                    delay: (item.name.length - 1 - index) * 0.02, // Задержка между буквами в обратном порядке
                    duration: 0.15, // Длительность анимации каждой буквы
                    ease: "linear", // Плавность анимации
                  }}
                >
                  {letter}
                </m.span>
              ))}
            </>
          )}
        </span>
      </a>
    </>
  );
}
