import { useAtomValue } from "jotai";
import { isOpenAtom } from "../../../jotai/stor";
import { m } from "framer-motion";

export function PrintDelText({ text }: { text: string }) {
  const isOpen = useAtomValue(isOpenAtom);

  const maxI = (text: string, i: number, totalDuration: number): number => {
    // totalDuration Общее время выполнения анимации
    const interval = totalDuration / text.length; // Интервал между буквами
    return i * interval;
  };

  return (
    <>
      {isOpen ? (
        // Анимация появления текста
        <>
          {text.split("").map((letter, index) => (
            <m.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: maxI(text, index, 0.33), // Равномерная задержка
                // duration: 0.3, // Длительность анимации каждой буквы
                ease: "easeOut",
              }}
            >
              {letter}
            </m.span>
          ))}
        </>
      ) : (
        // Анимация исчезновения текста
        <>
          {text.split("").map((letter, index) => (
            <m.span
              key={index}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{
                delay: maxI(text, text.length - 1 - index, 0.33), // Равномерная задержка
                // duration: 0.3,
                ease: "easeOut",
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
