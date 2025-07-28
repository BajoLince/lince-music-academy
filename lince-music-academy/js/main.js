document.addEventListener('DOMContentLoaded', () => {
    console.log('Lince Music Academy Website Initialized');

    // --- Welcome Tour Logic ---
    // This function checks if it's the user's first visit and launches the tour.
    function startWelcomeTour() {
        const isFirstVisit = !localStorage.getItem('hasVisitedLinceAcademy');
        
        if (isFirstVisit) {
            alert("¡Bienvenido a Lince Music Academy! \n\nEste es un tour interactivo (simulado).\n\n1. Explora nuestros cursos.\n2. Haz el test de nivel.\n3. Revisa tu progreso en el Perfil.");
            localStorage.setItem('hasVisitedLinceAcademy', 'true');
        }
    }
    
    // --- Smooth Scrolling for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- AI Chatbot Logic (Placeholder) ---
    // This would be integrated with a service like Dialogflow or a custom model.
    function initializeAIChatbot() {
        console.log('AI Chatbot functionality will be implemented here.');
    }

    // --- Real-time Audio Feedback (Placeholder) ---
    // This requires Web Audio API for microphone access and a note detection library.
    function initializeAudioFeedback() {
        console.log('Real-time audio analysis functionality will be implemented here.');
    }

    // --- Initialize all scripts ---
    startWelcomeTour();
    initializeAIChatbot();
    initializeAudioFeedback();
});