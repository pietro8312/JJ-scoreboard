let form = document.querySelector('form')

let range = document.getElementById('tempo')

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const comp1 = document.getElementById('comp1').value.trim()
  const comp2 = document.getElementById('comp2').value.trim()
  let tempo = range.value

  console.log('Submitting form — comp1:', comp1, 'comp2:', comp2, 'tempo:', tempo)

  // Simple validation: don't redirect if names are empty
  if (!comp1 || !comp2) {
    // show inline error once
    if (!document.querySelector('.form-error')) {
      const err = document.createElement('div')
      err.className = 'form-error'
      err.textContent = 'Por favor preencha os nomes dos dois competidores.'
      err.style.color = '#c0392b'
      err.style.marginBottom = '12px'
      err.style.fontWeight = '600'
      form.prepend(err)
    }
    return
  }

  localStorage.setItem('comp1', comp1)
  localStorage.setItem('comp2', comp2)
  localStorage.setItem('tempo', tempo)

  // Quick verification in console before navigating
  console.log('Saved to localStorage:', {
    comp1: localStorage.getItem('comp1'),
    comp2: localStorage.getItem('comp2'),
    tempo: localStorage.getItem('tempo')
  })

  window.location.href = 'main.html'

})

document.querySelectorAll('input[type="range"]').forEach(input => {
  input.addEventListener('input', (e) => {
    const value = e.target.value;

      let a = document.getElementById('tempo');
      let span = document.querySelector(`label i`)
      span.textContent = `${a.value} minutos`
    });
});