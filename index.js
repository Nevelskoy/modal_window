const dolls = [
  {
    id: 1,
    title: 'Семицветик',
    price: 200,
    img:
      'https://knitting-life.ru/forum/uploads/monthly_2017_04/889.jpg.9e03510e8816ba8b5a51ad8b301cd137.jpg',
  },
  {
    id: 2,
    title: 'Наденька',
    price: 300,
    img:
      'https://knitting-life.ru/forum/uploads/monthly_2021_03/1297.jpg.f442a51df02de425c817a9256c45c677.jpg',
  },
  {
    id: 3,
    title: 'Мышки',
    price: 400,
    img:
      'https://knitting-life.ru/forum/uploads/monthly_2019_11/1237.jpg.4d4d0a5eef87c597f5801c141aa0158a.jpg',
  },
];

const toHTML = (doll) => `
<div class="col">
  <div class="card">
            <img
              src="${doll.img}" class="card-img-top" style="height: 300px;" alt="${doll.title}">
            <div class="card-body">
              <h5 class="card-title">${doll.title}</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary" data-btn="price" data-id="${doll.id}">Посмотреть цену</a>
              <a href="#" class="btn btn-danger">Удалить</a>
            </div>
          </div>
        </div>
`;

function render() {
  const html = dolls.map(toHTML).join('');
  document.querySelector('#dolls').innerHTML = html;
}

render();

const priceModal = $.modal({
  title: 'Цена на товар',
  closable: true,
  width: '400px',
  footerButtons: [
    {
      text: 'Закрыть',
      type: 'primary',
      handler() {
        priceModal.close();
      },
    },
  ],
});

document.addEventListener('click', (event) => {
  const btnType = event.target.dataset.btn;
  const id = +event.target.dataset.id;

  if (btnType === 'price') {
    const doll = dolls.find((f) => f.id === id);

    priceModal.setContent(`
    <p>Цена на ${doll.title}: <strong>${doll.price}$</strong></p>`);

    priceModal.open();

    console.log(id, doll);
  }
});
