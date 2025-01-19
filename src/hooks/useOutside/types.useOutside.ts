export interface IUseOutside {
  isOpen: boolean; // Состояние, которое указывает на открытость сайдбара
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>; // Функция для обновления состояния
}
