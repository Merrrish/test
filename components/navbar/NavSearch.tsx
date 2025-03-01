'use client';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

const NavSearch = () => {
  const [cityFilter, setCityFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [bedsFilter, setBedsFilter] = useState(0);

  const [showCityPopup, setShowCityPopup] = useState(false);
  const [showDatePopup, setShowDatePopup] = useState(false);
  const [showBedsPopup, setShowBedsPopup] = useState(false);

  // Обработчики кликов
  const handleCityClick = () => {
    setShowCityPopup(!showCityPopup);
  };

  const handleDateClick = () => {
    setShowDatePopup(!showDatePopup);
  };

  const handleBedsClick = () => {
    setShowBedsPopup(!showBedsPopup);
  };

  // Предотвращаем закрытие окна при клике внутри
  const handlePopupClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCityFilter(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateFilter(e.target.value);
  };

  const handleBedsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBedsFilter(Number(e.target.value));
  };

  return (
    <div
      className="
        border border-gray-300 dark:border-gray-600
        w-full md:w-auto
        py-1
        rounded-full
        shadow-sm hover:shadow-md
        transition cursor-pointer
        bg-white dark:bg-gray-900
      "
    >
      <div className="flex flex-row items-center justify-between">
        {/* Фильтр для города */}
        <div className="relative text-xs font-semibold px-4 text-gray-700 dark:text-gray-200" onClick={handleCityClick}>
          Camino Towns / Cities
          {showCityPopup && (
            <div
              className="absolute top-full left-0 mt-6 w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg p-2"
              onClick={handlePopupClick} // Предотвращаем закрытие при клике внутри модального окна
            >
              <input
                type="text"
                placeholder="Search by city"
                value={cityFilter}
                onChange={handleCityChange}
                className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600"
              />
            </div>
          )}
        </div>

        {/* Фильтр для даты */}
        <div className="relative hidden sm:block text-xs font-semibold px-4 border-x border-gray-300 dark:border-gray-600 flex-1 text-center text-gray-700 dark:text-gray-200" onClick={handleDateClick}>
          Select Date
          {showDatePopup && (
            <div
              className="absolute top-full left-0 mt-6 w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg p-2"
              onClick={handlePopupClick} // Предотвращаем закрытие при клике внутри модального окна
            >
              <input
                type="date"
                value={dateFilter}
                onChange={handleDateChange}
                className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600"
              />
            </div>
          )}
        </div>

        {/* Фильтр для кроватей */}
        <div className="relative text-xs pl-4 pr-2 text-gray-600 dark:text-gray-300 flex flex-row items-center gap-2" onClick={handleBedsClick}>
          <div className="hidden sm:block">Beds</div>
          {showBedsPopup && (
            <div
              className="absolute top-full left-0 mt-4 w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg p-2"
              onClick={handlePopupClick} // Предотвращаем закрытие при клике внутри модального окна
            >
              <input
                type="number"
                min="0"
                value={bedsFilter}
                onChange={handleBedsChange}
                placeholder="Number of beds"
                className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600"
              />
            </div>
          )}
          <div className="p-2 bg-blue-500 rounded-full text-white">
            <BiSearch size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavSearch;
