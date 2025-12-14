document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initialize AOS (Animate On Scroll) Library
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true,      
            mirror: false,   
            duration: 800,   
            offset: 100,     
        });
    }

    // 2. FAQ Accordion Logic
    const faqButtons = document.querySelectorAll('.faq-toggle');
    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.parentElement;
            const content = button.nextElementSibling;
            
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem && item.classList.contains('active')) {
                    item.classList.remove('active');
                    item.querySelector('.faq-content').style.maxHeight = null;
                }
            });

            faqItem.classList.toggle('active');
            
            if (faqItem.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        });
    });

    // 3. Dynamic FPS Counter & Bar Movement Logic
    const fpsBeforeElement = document.getElementById('fps-before');
    const fpsAfterElement = document.getElementById('fps-after');
    const barBefore = document.getElementById('bar-before'); 
    const barAfter = document.getElementById('bar-after');

    if (fpsBeforeElement && fpsAfterElement) {
        function updateFPS() {
            // Generate random fluctuation
            const fluctuationBefore = (Math.random() * 3) - 1.5;
            const fluctuationAfter = (Math.random() * 5) - 2.5;

            // Base FPS values
            let currentBefore = 120.0 + fluctuationBefore;
            let currentAfter = 240.0 + fluctuationAfter;

            // Clamp values
            currentBefore = Math.max(115, Math.min(125, currentBefore));
            currentAfter = Math.max(230, Math.min(250, currentAfter));

            // Update text
            fpsBeforeElement.textContent = currentBefore.toFixed(1) + " FPS";
            fpsAfterElement.textContent = currentAfter.toFixed(1) + " FPS";

            // Update Bar Widths
            if(barBefore) {
                const widthBefore = (currentBefore / 2.6) + "%";
                barBefore.style.width = widthBefore;
            }
            if(barAfter) {
                const widthAfter = (currentAfter / 2.6) + "%";
                barAfter.style.width = widthAfter;
            }
        }

        // Update every 200ms
        setInterval(updateFPS, 200);
    }
});