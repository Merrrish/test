import NavSearch from './NavSearch';
import LinksDropdown from './LinksDropdown';
import DarkMode from './DarkMode';
import NavButtons from './NavButtons';
import Logo from './Logo';

function Navbar() {
  return (
    <nav className='border-b'>
      <div className='container flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-3 py-4'>

        {/* Верхний ряд: Логотип */}
        <div className="flex justify-between w-full sm:w-auto">
          <Logo />
        </div>

        {/* Средний ряд: Поиск и кнопки навигации (в колонку на мобильных) */}
        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-2">
          <NavSearch />
          <NavButtons />
        </div>

        {/* Нижний ряд: Темная тема и меню (центрируется на мобильных) */}
        <div className='flex gap-4 items-center w-full sm:w-auto justify-center sm:justify-start'>
          <DarkMode />
          <LinksDropdown />
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
