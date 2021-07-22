const modals = () => {

    function bindModal(triggerSelector, modalSelector, closeSelector) {
        
        const   triggers = document.querySelectorAll(triggerSelector),
                modal = document.querySelector(modalSelector),
                close = document.querySelector(closeSelector);

        triggers.forEach(element => {
            element.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
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
    
    showModalByTime('.popup', 3000);

};

export default modals;