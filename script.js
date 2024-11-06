const img = document.querySelector('img');
const ssid = document.querySelector('.ssid');
const senha = document.querySelector('.senha');
const button = document.querySelector('button');

function update() {
    const wifi = `WIFI:T:WPA;S:${ssid.value};P:${senha.value};;`;
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=164x164&data=${wifi}`;
};

ssid.addEventListener(
    'keyup',
    update,
);

senha.addEventListener(
    'keyup',
    update,
);

button.addEventListener(
    'click',
    () => {
        window.print();
    },
);