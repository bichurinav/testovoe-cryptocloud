import '../scss/styles.scss';

import { Dropdown } from 'bootstrap';

(function dropdownCurrency() {
    const dropDownMenus = document.querySelectorAll('.dropdown-menu');

    dropDownMenus.forEach((el) => {
        const currentCurrencyButton = el.previousElementSibling;
        const input = currentCurrencyButton.previousElementSibling;
        const currencyCurrent = currentCurrencyButton.querySelector('.currency');
        const currencyCurrentIcon = currentCurrencyButton.querySelector('.currency-icon');
        const currencyLinks = el.querySelectorAll('.dropdown-item');

        currencyLinks.forEach((item) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const currencyLink = item.querySelector('.currency');
                const iconCurrencyLink = item.querySelector('.currency-icon');
                let temp = currencyCurrent.textContent;
                let tempIconSrc = iconCurrencyLink.src;
                
                if (el.getAttribute('name') === 'currency') {
                    const isRUB = currencyLink.textContent === 'RUB' ? true : false;
                    input.setAttribute('placeholder', `~${isRUB ? '12000' : '180'} ${currencyLink.textContent}`);
                } else {
                    input.setAttribute('placeholder', `~0.010665 ${currencyLink.textContent}`);
                }
                
                el.setAttribute('value', currencyLink.textContent);
                currencyCurrent.textContent = currencyLink.textContent;
                currencyLink.textContent = temp;
                iconCurrencyLink.setAttribute('src', currencyCurrentIcon.src);
                currencyCurrentIcon.setAttribute('src', tempIconSrc);
            })
        })
    })
})()