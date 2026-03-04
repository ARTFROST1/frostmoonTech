// =========================================
// НЕЙРОСЕТИ НА ПРАКТИКЕ — Скрипты презентации
// =========================================

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initProgressBar();
    initSlideAnimations();
    initMobileMenu();
});

// =========================================
// Навигация между слайдами
// =========================================

let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function initNavigation() {
    // Обновляем счётчик
    document.getElementById('total-slides').textContent = totalSlides;
    
    // Устанавливаем ID для каждого слайда
    slides.forEach((slide, index) => {
        slide.dataset.index = index;
    });
    
    // Слушаем скролл
    window.addEventListener('scroll', handleScroll);
    
    // Клавиатурная навигация
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            navigateSlide(1);
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            navigateSlide(-1);
        }
    });
    
    // Активные ссылки в навигации
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

function navigateSlide(direction) {
    const newIndex = currentSlideIndex + direction;
    
    if (newIndex >= 0 && newIndex < totalSlides) {
        slides[newIndex].scrollIntoView({ behavior: 'smooth' });
    }
}

function handleScroll() {
    // Находим текущий видимый слайд
    let mostVisibleSlide = 0;
    let maxVisibility = 0;
    
    slides.forEach((slide, index) => {
        const rect = slide.getBoundingClientRect();
        const visibility = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
        
        if (visibility > maxVisibility) {
            maxVisibility = visibility;
            mostVisibleSlide = index;
        }
    });
    
    if (mostVisibleSlide !== currentSlideIndex) {
        currentSlideIndex = mostVisibleSlide;
        updateSlideCounter();
        updateActiveNavLink();
    }
    
    updateProgressBar();
}

function updateSlideCounter() {
    document.getElementById('current-slide').textContent = currentSlideIndex + 1;
    
    // Обновляем состояние кнопок
    const prevBtn = document.querySelector('.nav-prev');
    const nextBtn = document.querySelector('.nav-next');
    
    prevBtn.disabled = currentSlideIndex === 0;
    nextBtn.disabled = currentSlideIndex === totalSlides - 1;
}

function updateActiveNavLink() {
    const currentSlide = slides[currentSlideIndex];
    const section = currentSlide.closest('.section');
    
    if (section) {
        const sectionId = section.id;
        
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + sectionId) {
                link.classList.add('active');
            }
        });
    }
}

// =========================================
// Прогресс-бар
// =========================================

function initProgressBar() {
    updateProgressBar();
}

function updateProgressBar() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    
    document.querySelector('.progress-fill').style.width = progress + '%';
}

// =========================================
// Анимации слайдов
// =========================================

function initSlideAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Анимируем дочерние элементы с задержкой
                animateChildren(entry.target);
            }
        });
    }, observerOptions);
    
    slides.forEach(slide => {
        observer.observe(slide);
    });
}

function animateChildren(slide) {
    // Stagger анимация для списков
    const staggerItems = slide.querySelectorAll('.stagger-list > li, .ai-cards-grid > *, .categories-grid > *, .scenarios-grid > *');
    
    staggerItems.forEach((item, index) => {
        item.style.animationDelay = (index * 0.1) + 's';
    });
    
    // Анимация карточек
    const cards = slide.querySelectorAll('.ai-card, .category-card, .project-card, .gpt-card, .scenario-card, .vpn-card');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// =========================================
// Мобильное меню
// =========================================

function initMobileMenu() {
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.background = 'white';
            navLinks.style.flexDirection = 'column';
            navLinks.style.padding = '1rem';
            navLinks.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        });
    }
}

// =========================================
// Свайп для мобильных устройств
// =========================================

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Свайп влево — следующий слайд
            navigateSlide(1);
        } else {
            // Свайп вправо — предыдущий слайд
            navigateSlide(-1);
        }
    }
}

// =========================================
// Копирование промптов
// =========================================

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('copy-btn')) {
        const code = e.target.closest('.code-block').querySelector('code');
        
        if (code) {
            navigator.clipboard.writeText(code.textContent).then(() => {
                const originalText = e.target.textContent;
                e.target.textContent = '✓ Скопировано';
                e.target.style.background = '#22C55E';
                
                setTimeout(() => {
                    e.target.textContent = originalText;
                    e.target.style.background = '';
                }, 2000);
            });
        }
    }
});

// =========================================
// Плавное появление при первой загрузке
// =========================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Показываем первый слайд
    if (slides.length > 0) {
        slides[0].classList.add('visible');
    }
});

// =========================================
// Глобальные функции для onclick
// =========================================

window.navigateSlide = navigateSlide;

// =========================================
// Функции копирования
// =========================================

function copyPrompt(promptId) {
    const promptElements = {
        'analysis': `Проанализируй [тема/данные] по следующим критериям:
1. [критерий 1]
2. [критерий 2]
3. [критерий 3]

Формат ответа: структурированный список с выводами по каждому пункту.`,
        'ideas': `Сгенерируй 10 идей для [цель/проект].

Контекст: [описание ситуации]
Ограничения: [что учитывать]
Критерии хорошей идеи: [параметры оценки]

Для каждой идеи укажи: название, краткое описание, потенциал реализации (1-10).`,
        'text': `Напиши [тип текста] на тему "[тема]".

Целевая аудитория: [описание]
Тон: [формальный/разговорный/другой]
Объём: [количество слов/абзацев]
Обязательно включи: [ключевые моменты]
Избегай: [что не включать]`,
        'learning': `Объясни [концепция/тема] простым языком.

Мой текущий уровень: [начинающий/средний/продвинутый]
Контекст применения: [зачем мне это нужно]
Предпочтительный формат: [примеры, аналогии, пошаговое объяснение]

После объяснения задай мне 3 вопроса для проверки понимания.`
    };
    
    const text = promptElements[promptId] || '';
    copyToClipboard(text, event.target);
}

function copyTemplate(templateId) {
    const templates = {
        'chatgpt': `# Кто ты для меня
Ты — мой персональный AI-ассистент с экспертизой в [область]. Ты понимаешь контекст моей работы и помогаешь решать задачи эффективно.

# Как отвечать
- Структурированно, с чёткими заголовками
- Практично — сразу применимые советы
- Кратко, но полно — без воды
- С примерами, где это помогает понять

# Что я делаю
[Опиши свою роль, проекты, задачи]

# Чего избегать
- Очевидных банальностей
- Слишком длинных ответов без запроса
- Повторения моих слов`,
        'claude': `<role>
Ты — [роль], специализирующийся на [область]. Обладаешь глубокой экспертизой в [конкретные навыки].
</role>

<style>
- Структурируй ответы с заголовками
- Приводи конкретные примеры
- Объясняй логику рассуждений
- Предлагай альтернативы
</style>

<context>
[Опиши свой контекст, проекты, цели]
</context>

<preferences>
- Формат: [структурированный/разговорный]
- Детализация: [краткая/подробная]
- Язык: русский
</preferences>`
    };
    
    const text = templates[templateId] || '';
    copyToClipboard(text, event.target);
}

function copyToClipboard(text, button) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.textContent;
        button.textContent = '✓ Скопировано!';
        button.classList.add('copied');
        
        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Ошибка копирования:', err);
        button.textContent = 'Ошибка';
        setTimeout(() => {
            button.textContent = originalText;
        }, 2000);
    });
}

window.copyPrompt = copyPrompt;
window.copyTemplate = copyTemplate;
