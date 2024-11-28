const myObserver = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const elements = document.querySelectorAll('.hidden');

elements.forEach( (element) => myObserver.observe(element));

document.querySelector('.botao').addEventListener('click', () => {
    const target = document.querySelector('.infos');
    target.scrollIntoView({ behavior: 'smooth' }); 
  });