import React from 'react';

const Navigation: React.FC = () => {
  return (
    <>
      <nav className="top-nav">
        <ul>
          <li><a href="/">Главная</a></li>
          <li><a href="/deals">Сделки</a></li>
          <li><a href="/trials">Испытания</a></li>
          <li><a href="/marketplace">Маркетплейс</a></li>
          <li><a href="/wiki">Вики</a></li>
          <li><a href="#">Бот</a></li>
        </ul>
      </nav>
      <div className="side-panel">
        <ul>
          <li>Профиль</li>
          <li>Run</li>
          <li>
            СДЕЛКЕ
            <ul>
              <li>error - ОШИБКА: 0</li>
              <li>started - ЗАПУЩЕН: 0</li>
              <li>stopped - ОСТАНОВЛЕН: 0</li>
              <li>Создать бота</li>
              <li>МЕСЯЦ 20.02.2024-20.03.2024</li>
              <li>USDT: 0</li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

  
export default Navigation;
