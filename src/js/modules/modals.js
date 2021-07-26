const modals = (state) => {

    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        
        const   triggers = document.querySelectorAll(triggerSelector),
                modal = document.querySelector(modalSelector),
                close = document.querySelector(closeSelector),
                windows = document.querySelectorAll('[data-modal]');

        triggers.forEach(element => {
            element.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                // validate
                if (e.target.classList.contains('popup_calc_button')) {
                    if (!state.width || state.width.length === 0) {
                        console.log('state.width: ', 0);
                        return;
                    }
                }

                closeAllModalWindows();
                openModal();

            });
        });

        close.addEventListener('click', () => {
            closeAllModalWindows();
            closeModal();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                closeAllModalWindows();
                closeModal();
            }
        });

        const closeAllModalWindows = () => {
            windows.forEach(item => item.style.display = 'none');
        };

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
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    
    showModalByTime('.popup', 300000);

};

export default modals;