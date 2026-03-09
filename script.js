// Intersection Observer for scroll reveal animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Copy phone number functionality
function copyPhone() {
    console.log('Botão copy clicado');
    const phone = "(21) 97287-1582";
    navigator.clipboard.writeText(phone).then(() => {
        console.log('Copiado com sucesso');
        // Tenta encontrar o botão de várias formas para garantir
        const btn = document.querySelector('.contact-actions .btn.secondary') ||
            document.querySelector('button[onclick="copyPhone()"]');

        if (btn) {
            const originalText = btn.innerText;
            btn.innerText = "Copiado!";
            btn.style.borderColor = "var(--accent-primary)";

            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.borderColor = "var(--glass-border)";
            }, 2000);
        } else {
            console.error('Botão não encontrado para atualizar texto');
        }
    }).catch(err => {
        console.error('Erro ao copiar para clipboard: ', err);
        alert('Houve um erro ao copiar o telefone.');
    });
}
