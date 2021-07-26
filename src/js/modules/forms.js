import checkNumInputs from "./checkNumInputs";

const forms = (state) => {

    const form = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');
    const message = {
        loading: 'loading',
        success: 'success',
        failture: 'failture'
    };

    /*const phoneInputs = document.querySelectorAll('input[name="user_phone"]');
    phoneInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });*/
    checkNumInputs('input[name="user_phone"]');

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        const res = await fetch(url, {
            method: 'POST',
            body: data
        });
        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(input => input.value='');
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);
            
            const formData = new FormData(item);
            if (item.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            postData('assets/server.php', formData)
                .then(res => {
                    document.querySelector('.status').textContent = message.success;
                    console.log(res);
                })
                .catch(() => document.querySelector('.status').textContent = message.failture)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => statusMessage.remove(), 5000);
                });
        });
    });

};

export default forms;