const modal = $.modal({
  title: 'Felix modal',
  closable: true,
  content: `
  <h4>Modal is working</h4>
  <p>lorem</p>
  `,
  width: '400px',
  footerButtons: [
    {
      text: 'Ok',
      type: 'primary',
      handler() {
        console.log('Primery btn clicked');
        modal.close();
      },
    },
    {
      text: 'Cancel',
      type: 'danger',
      handler() {
        console.log('Danger btn clicked');
        modal.close();
      },
    },
  ],
});
