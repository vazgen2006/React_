import React from "react";

const menus = [
  "Оплата и доставка",
  "О нас",
  "Установка Кондиционеров",
  "Фото Наших Монтажей",
  "Наши Клиенты",
  "Наши Сертификаты",
  "Контакты",
];

const array = [
  {
    title: "asdfadfasd",
    svg: (
      <svg width="400" height="200">
        <defs>
          <filter
            id="MyFilter"
            filterUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="200"
            height="120"
          >
            <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
          </filter>
        </defs>
        <rect x="1" y="1" width="198" height="118" fill="#cccccc" />
        <g filter="url(#MyFilter)">
          <path
            fill="none"
            stroke="#D90000"
            stroke-width="10"
            d="M50,90 C0,90 0,30 50,30 L150,30 C200,30 200,90 150,90 z"
          />
          <text
            fill="#FFFFFF"
            stroke="black"
            font-size="45"
            font-family="Verdana"
            x="52"
            y="76"
          >
            SVG
          </text>
        </g>
        Sorry, your browser does not support inline SVG.
      </svg>
    ),
  },
];

function Header() {
  return (
    <header>
      <div className="upper_part">
        <img className="upper_part_img" src="/images/share.png" alt="gev"></img>
      </div>

      <div class="text">
        {menus.map((menu, i) => {
          return <span key={i}>{menu}</span>;
        })}
      </div>
      <div class="text">
        {array.map((item, i) => {
          return (
            <span key={i}>
              {item.title}
              {item.svg}
            </span>
          );
        })}
      </div>
      <div class="cold_summer">
        <img src="/images/Frame.png" alt="gev"></img>
        <span>
          <h2 className="number">+7 (495) 272 03 39</h2>
          <br></br>
          <p className="under_number_text">Заказать обратный звонок</p>
        </span>
        <button className="poisk">
          Ищите среди миллиона товаров...
          <img className="vektor" src="/images/poisk.png" alt="gev"></img>
        </button>
        <img className="sravnit" src="/images/sravnit.png" alt="gev"></img>
        <img className="izbrnniye" src="/images/izbrnniye.png" alt="gev"></img>
      </div>

      <div className="katalog_tavarov">
        <img src="/images/burgger.png" alt=""></img>
        <img className="img777" src="/images/777.png" alt="gev"></img>
        <h2>Бренди</h2>
        <button className="korzina">
          <img src="/images/korz.png" alt="gev"></img>
          <span className="korznia—span">Корзина пуста(0)</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
