import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
    const   windowForm = document.querySelectorAll('.balcon_icons_img'),
            windowWidth = document.querySelectorAll('#width'),
            windowHeight = document.querySelectorAll('#height'),
            windowType = document.querySelectorAll('#view_type'),
            windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionToElems (event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch(item.nodeName) {
                    case 'SPAN':
                        state[prop] = i;
                        break;
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
                            state[prop] = (i === 0) ? 'cold' : 'warm';
                            elem.forEach((box, j) => {
                                if (i !== j) {
                                    box.checked = false;
                                }
                            });
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT':
                        state[prop] = item.value;
                        break;
                }
                console.log(state);
            });
        });
    }

    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');

};

export default changeModalState;