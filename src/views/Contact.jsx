/* VISTA CONTACTO */
export const Contact = () => {
  /* Función para hacer un POST a la API mandando los datos para que luego se envíe el email */
  const onSubmit = (event) => {
    event.preventDefault();
    const form = document.getElementById('contact-form');
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    if (data.name === '' || data.email === '' || data.message === '') {
      alert('Por favor, complete todos los campos.');
      return;
    }

    fetch(import.meta.env.VITE_API_URL + '/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) {
        alert('¡Gracias por tu mensaje! 🎉');
        form.reset();
      } else {
        alert('¡Ups! Algo salió mal. Por favor, inténtalo de nuevo.');
      }
    });
  };

  return (
    <section className='contact' id='contact'>
      <h2 className='heading'>
        <i className='fas fa-headset'></i> Mantengámonos en <span>Contacto</span>
      </h2>

      <div
        className='container'
        data-sr-id='37'
        style={{
          visibility: 'visible',
          opacity: 1,
          transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
          transition:
            '0.2s linear, opacity 1s cubic-bezier(0.5, 0, 0, 1) 0.4s, transform 1s cubic-bezier(0.5, 0, 0, 1) 0.4s',
        }}
      >
        <div className='content'>
          <div className='image-box'>
            <img draggable='false' src='contact.png' alt='' />
          </div>
          <form id='contact-form' onSubmit={onSubmit}>
            <div
              className='form-group'
              data-sr-id='38'
              style={{
                visibility: 'visible',
                opacity: 1,
                transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
                transition:
                  '0.2s linear, opacity 1s cubic-bezier(0.5, 0, 0, 1) 0.4s, transform 1s cubic-bezier(0.5, 0, 0, 1) 0.4s',
              }}
            >
              <div className='field'>
                <input type='text' name='name' placeholder='Mariana V.' required='' />
                <i className='fas fa-user'></i>
              </div>
              <div className='field'>
                <input type='text' name='email' placeholder='mariana@mail.com' required='' />
                <i className='fas fa-envelope'></i>
              </div>
              <div className='message'>
                <textarea placeholder='Mensaje...' name='message' required=''></textarea>
                <i className='fas fa-comment-dots'></i>
              </div>
            </div>
            <div className='button-area'>
              <button type='submit'>
                Enviar <i className='fa fa-paper-plane'></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
