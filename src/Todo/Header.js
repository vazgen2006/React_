import React from "react";  


function Header(){
    return (
        

        <header>
        <div className="upper_part">
            <img className="upper_part_img" src="/img/share.png" alt="gev"></img>
        </div>

        <div class="text">
            <span>Оплата и доставка</span>
            <span>О нас</span>
            <span>Установка Кондиционеров</span>
            <span>Фото Наших Монтажей</span>
            <span>Наши Клиенты</span>
            <span>Наши Сертификаты</span>
            <span>Контакты</span>
        </div>
        <div class="cold_summer">
            <img src="/img/Frame.png" alt="gev"></img>
            <span>
                <h2 className="number">+7 (495) 272 03 39</h2><br></br>
                <p className="under_number_text">Заказать обратный звонок</p>
            </span>
            <button className="poisk">
                Ищите среди миллиона товаров...
                <img className="vektor" src="/img/poisk.png" alt="gev"></img>
            </button>
            <img className="sravnit" src="/img/sravnit.png" alt="gev"></img>
            <img className="izbrnniye" src="/img/izbrnniye.png" alt="gev"></img>
        </div>
        <div className="katalog_tavarov">
            <img src="/img/burgger.png" alt=""></img>
            <img className="img777" src="img/777.png" alt="gev"></img>
            <h2>Бренди</h2>
            <button className="korzina">
                <img src="/img/korz.png" alt="gev"></img>
                <span className="korznia—span">Корзина пуста(0)</span>
            </button>
        </div>
    </header>
        
    )
}



export default Header 