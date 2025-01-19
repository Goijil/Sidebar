import { useAtomValue } from "jotai";
import { isOpenAtom } from "../../../jotai/stor";
import { m } from "framer-motion";

export function PrintDelText({ text }: { text: string }) {
  const isOpen = useAtomValue(isOpenAtom);

  return (
    <>
      {isOpen ? (
        // Когда меню открыто: анимация появления текста
        <>
          {text.split("").map((letter, index) => (
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
          {text.split("").map((letter, index) => (
            <m.span
              key={index}
              initial={{ opacity: 1 }} // Начальное состояние: буква четкая и видимая
              animate={{ opacity: 0 }} // Конечное состояние: буква размыта и исчезает
              transition={{
                delay: (text.length - 1 - index) * 0.02, // Задержка между буквами в обратном порядке
                duration: 0.15, // Длительность анимации каждой буквы
                ease: "linear", // Плавность анимации
              }}
            >
              {letter}
            </m.span>
          ))}
        </>
      )}
    </>
  );
}
