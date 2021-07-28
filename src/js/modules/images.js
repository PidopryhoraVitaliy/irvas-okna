const images = () => {
    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImage = document.createElement('img');

    imgPopup.classList.add('popup');
    imgPopup.appendChild(bigImage);
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';
    
    workSection.appendChild(imgPopup);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target,
              body = document.querySelector('body');
        if (!target) {
            return;
        }
        body.style.overflow = '';
        imgPopup.style.display = 'none';
        if (target.classList.contains('preview')) {
            body.style.overflow = 'hidden';
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.style.maxWidth = '90%';
            bigImage.style.maxHeight = '90%';
            bigImage.setAttribute('src', path);
        }
    });

};

export default images;