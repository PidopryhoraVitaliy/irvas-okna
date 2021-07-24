const modals = () => {

    function bindModal(triggerSelector, modalSelector, closeSelector) {
        
        const   triggers = document.querySelectorAll(triggerSelector),
                modal = document.querySelector(modalSelector),
                close = document.querySelector(closeSelector),
                windows = document.querySelectorAll('[data-modal]');

        triggers.forEach(element => {
            element.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                //windows.forEach(item => item.style.display = 'none');
                openModal();
            });
        });

        close.addEventListener('click', () => {
            closeModal();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        const openModal = () => {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            //document.body.classList.add('modal-open');
        };
        const closeModal = () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            //document.body.classList.remove('modal-open');
        };

    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    
    showModalByTime('.popup', 300000);

};

export default modals;