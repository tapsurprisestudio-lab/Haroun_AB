/* ========================================
   HARON — Ultra Premium Creator Website
   script.js
   ======================================== */

// ========================================
// STATE MANAGEMENT
// ========================================
const state = {
    currentLang: localStorage.getItem('haron_lang') || 'en',
    currentPage: 'home',
    selectedRating: 0,
    chatStep: 'menu',
    collabAnswers: {}
};

// ========================================
// DOM ELEMENTS
// ========================================
const elements = {
    splash: document.getElementById('splash'),
    app: document.getElementById('app'),
    enterBtn: document.getElementById('enterBtn'),
    navbar: document.getElementById('navbar'),
    burger: document.getElementById('burger'),
    mobileMenu: document.getElementById('mobileMenu'),
    mobileOverlay: document.getElementById('mobileOverlay'),
    navLinks: document.querySelectorAll('.nav-link, .mobile-nav-link'),
    pages: document.querySelectorAll('.page'),
    langBtns: document.querySelectorAll('.lang-btn'),
    starsInput: document.getElementById('starsInput'),
    submitReview: document.getElementById('submitReview'),
    reviewsList: document.getElementById('reviewsList'),
    reviewFilterBtns: document.querySelectorAll('.filter-btn'),
    chatbotToggle: document.getElementById('chatbotToggle'),
    chatbotPanel: document.getElementById('chatbotPanel'),
    chatbotClose: document.getElementById('chatbotClose'),
    chatbotMessages: document.getElementById('chatbotMessages'),
    chatbotInput: document.getElementById('chatbotInput'),
    chatbotSend: document.getElementById('chatbotSend'),
    quickActions: document.querySelectorAll('.quick-btn'),
    contactName: document.getElementById('contactName'),
    contactTopic: document.getElementById('contactTopic'),
    contactMessage: document.getElementById('contactMessage'),
    copyMessage: document.getElementById('copyMessage'),
    openWhatsApp: document.getElementById('openWhatsApp'),
    openInstagram: document.getElementById('openInstagram')
};

// ========================================
// TRANSLATIONS
// ========================================
const translations = {
    // Navigation
    nav: {
        home: { en: 'Home', ar: 'الرئيسية', de: 'Startseite' },
        story: { en: 'Story', ar: 'القصة', de: 'Geschichte' },
        connect: { en: 'Connect', ar: 'تواصل', de: 'Kontakt' },
        reviews: { en: 'Reviews', ar: 'آراء', de: 'Bewertungen' },
        contact: { en: 'Contact', ar: 'اتصال', de: 'Nachricht' }
    },
    // Hero
    hero: {
        name: { en: 'Haron Abdel Aal', ar: 'هارون عبد العال', de: 'Haron Abdel Aal' },
        subtitle: { 
            en: 'From Syria 🇸🇾 to Germany 🇩🇪 — sharing life daily', 
            ar: 'من سوريا 🇸🇾 إلى ألمانيا 🇩🇪 — أشارك الحياة يومياً',
            de: 'Von Syrien 🇸🇾 nach Deutschland 🇩🇪 — ich teile mein Leben täglich'
        },
        stat1: { en: 'Lives & Content', ar: 'المباشرات والمحتوى', de: 'Lives & Content' },
        stat2: { en: 'Motivation', ar: 'التحفيز والإيجابية', de: 'Motivation' },
        stat3: { en: 'Community', ar: 'المجتمع', de: 'Community' },
        btnStory: { en: 'Read My Story', ar: 'اقرأ قصتي', de: 'Meine Geschichte lesen' },
        btnConnect: { en: 'Connect', ar: 'تواصل معي', de: 'Verbinden' }
    },
    // Story
    story: {
        title: { en: 'My Journey', ar: 'رحلتي', de: 'Meine Reise' },
        timeline: { en: 'Timeline', ar: 'الجدول الزمني', de: 'Zeitleiste' }
    },
    // Connect
    connect: {
        title: { en: 'Connect with me', ar: 'تواصل معي', de: 'Kontakt' }
    },
    // Reviews
    reviews: {
        title: { en: 'Reviews', ar: 'آراء الزوار', de: 'Bewertungen' },
        disclaimer: { en: 'These reviews are from website visitors.', ar: 'هذه الآراء من زوار الموقع.', de: 'Diese Bewertungen stammen von Besuchern.' },
        namePlaceholder: { en: 'Your name (optional)', ar: 'اسمك (اختياري)', de: 'Ihr Name (optional)' },
        ratingLabel: { en: 'Your Rating:', ar: 'تقييمك:', de: 'Ihre Bewertung:' },
        commentPlaceholder: { en: 'Share your experience...', ar: 'شارك تجربتك...', de: 'Teilen Sie Ihre Erfahrung...' },
        submit: { en: 'Submit Review', ar: 'إرسال الرأي', de: 'Bewertung absenden' },
        filterAll: { en: 'All', ar: 'الكل', de: 'Alle' },
        filter5: { en: '5 Stars', ar: '5 نجوم', de: '5 Sterne' },
        filter4: { en: '4+ Stars', ar: "4+ نجوم", de: '4+ Sterne' },
        noReviews: { en: 'No reviews yet. Be the first to leave one!', ar: 'لا توجد آراء بعد. كن أول من يضيف رأيه!', de: 'Noch keine Bewertungen. Sei der Erste!' }
    },
    // Contact
    contact: {
        title: { en: 'Get in Touch', ar: 'تواصل معي', de: 'Kontakt' },
        builder: { en: 'Message Builder', ar: 'منشيء الرسالة', data: 'Nachricht-Builder' },
        nameLabel: { en: 'Your Name', ar: 'اسمك', de: 'Ihr Name' },
        namePlaceholder: { en: 'Enter your name', ar: 'أدخل اسمك', de: 'Geben Sie Ihren Namen ein' },
        topicLabel: { en: 'Topic', ar: 'الموضوع', de: 'Thema' },
        topicCollab: { en: 'Collaboration / Partnership', ar: 'تعاون / شراكة', de: 'Zusammenarbeit' },
        topicQuestion: { en: 'Question', ar: 'سؤال', de: 'Frage' },
        topicSupport: { en: 'Support', ar: 'دعم', de: 'Unterstützung' },
        topicOther: { en: 'Other', ar: 'أخرى', de: 'Sonstiges' },
        messageLabel: { en: 'Message', ar: 'الرسالة', de: 'Nachricht' },
        messagePlaceholder: { en: 'Write your message...', ar: 'اكتب رسالتك...', de: 'Schreiben Sie Ihre Nachricht...' },
        copyBtn: { en: 'Copy Message', ar: 'نسخ الرسالة', de: 'Nachricht kopieren' },
        waBtn: { en: 'Open WhatsApp', ar: 'فتح واتساب', de: 'WhatsApp öffnen' },
        igBtn: { en: 'Open Instagram DM', ar: 'فتح رسالة إنستغرام', data: 'Instagram DM öffnen' },
        directTitle: { en: 'Direct Contact', ar: 'الاتصال المباشر', de: 'Direkter Kontakt' },
        email: { en: 'Email', ar: 'البريد الإلكتروني', de: 'E-Mail' },
        phone: { en: 'Phone / WhatsApp', ar: 'الهاتف / واتساب', de: 'Telefon / WhatsApp' },
        responseNote: { en: 'I typically respond within 24-48 hours. For urgent matters, please use WhatsApp.', ar: 'أستجيب عادةً خلال 24-48 ساعة. للمسائل العاجلة، يرجى استخدام واتساب.', de: 'Ich antworte normalerweise innerhalb von 24-48 Stunden. Bei dringenden Angelegenheiten bitte WhatsApp nutzen.' }
    },
    // Chatbot
    chatbot: {
        title: { en: "Haron's Assistant", ar: 'مساعد هارون', de: 'Harons Assistent' },
        status: { en: 'Online', ar: 'متصل', de: 'Online' },
        greeting: { en: 'Hi ✨ I\'m Haron\'s smart assistant. Choose:', ar: 'مرحباً ✨ أنا مساعد هارون الذكي. اختر ما تريد:', de: 'Hallo ✨ Ich bin Harons smarter Assistent. Wähle:' },
        whoBtn: { en: 'Who is Haron?', ar: 'من هو هارون؟', de: 'Wer ist Haron?' },
        contentBtn: { en: 'Daily content', ar: 'محتواه اليومي', de: 'Täglicher Content' },
        collabBtn: { en: 'Collaboration', ar: 'تعاون/شراكة', de: 'Zusammenarbeit' },
        linksBtn: { en: 'Social links', ar: 'روابط التواصل', de: 'Social Links' },
        reviewBtn: { en: 'Leave a review', ar: 'أضف رأيك', de: 'Bewertung schreiben' },
        inputPlaceholder: { en: 'Type a message...', ar: 'اكتب رسالة...', de: 'Nachricht eingeben...' },
        whoAnswer: { 
            en: "Haron is a daily content creator born in 2000 in Syria, now living in Germany. He shares his life journey, positivity, and motivation with his community every day. His journey from Syria to Germany is truly inspiring!",
            ar: 'هارون هو منشئ محتوى يومي من مواليد عام 2000 في سوريا، يعيش الآن في ألمانيا. يشارك رحلته жизниيية والإيجابية والتحفيز مع مجتمعه كل يوم. رحلته من سوريا إلى ألمانيا ملهمة حقاً!',
            de: 'Haron ist ein täglicher Content-Ersteller, geboren 2000 in Syrien, jetzt in Deutschland lebend. Er teilt seine Lebensreise, Positivität und Motivation täglich mit seiner Community. Seine Reise von Syrien nach Deutschland ist wirklich inspirierend!'
        },
        contentAnswer: {
            en: "Haron shares daily content across Instagram and TikTok! You'll find lifestyle vlogs, motivational posts, and real glimpses into his life in Germany. Follow him to stay inspired! 📱",
            ar: 'شارك هارون محتوى يومي على إنستغرام وتيك توك! ستجد فيديوهات عن نمط الحياة ومنشورات تحفيزية ولمحات حقيقية عن حياته في Germany. تابعه للبقاء ملهماً! 📱',
            de: 'Haron teilt täglichen Content auf Instagram und TikTok! Du findest Lifestyle-Vlogs, motivierende Beiträge und echte Einblicke in sein Leben in Deutschland. Folgen Sie ihm, um inspiriert zu bleiben! 📱'
        },
        collabPrompt: {
            en: "Great! For collaboration, please tell me: 1) Which platform? (Instagram/TikTok/Other) 2) What's your idea? 3) Any budget range?",
            ar: 'رائع! للتعاون، أخبرني: 1) أي منصة؟ (إنستغرام/تيكتوك/أخرى) 2) ما فكرتك؟ 3) أي ميزانية؟',
            de: 'Großartig! Für Zusammenarbeit, bitte sagen Sie mir: 1) Welche Plattform? (Instagram/TikTok/Andere) 2) Was ist Ihre Idee? 3) Irgendein Budgetrahmen?'
        },
        collabThanks: {
            en: "Thanks! I've noted your interest. You can directly reach out via Instagram or WhatsApp to discuss further!",
            ar: 'شكراً! لقد记ت اهتمامك. يمكنك التواصل مباشرة عبر إنستغرام أو واتساب لمزيد من المناقشة!',
            de: 'Danke! Ich habe Ihr Interesse notiert. Sie können direkt über Instagram oder WhatsApp kontaktieren!'
        },
        linksAnswer: {
            en: "You can connect with Haron on:",
            ar: 'يمكنك التواصل مع هارون على:',
            de: 'Sie können sich mit Haron verbinden auf:'
        },
        reviewPrompt: {
            en: "That's great! Click 'Leave a review' to share your experience. You'll be redirected to the Reviews page.",
            ar: 'هذا رائع! انقر على "أضف رأيك" لمشاركة تجربتك. ستتم إعادة توجيهك إلى صفحة الآراء.',
            de: 'Das ist großartig! Klicken Sie auf "Bewertung schreiben", um Ihre Erfahrung zu teilen. Sie werden zur Bewertungsseite weitergeleitet.'
        },
        storyPrompt: {
            en: "Read Haron's inspiring story on the Story page!",
            ar: 'اقرأ قصة هارون الملهمة على صفحة القصة!',
            de: 'Lesen Sie Harons inspirierende Geschichte auf der Geschichtsseite!'
        },
        backToMenu: { en: '← Back to menu', ar: '← العودة للقائمة', de: '← Zurück zum Menü' },
        noUnderstand: { en: "I didn't quite get that. Try clicking one of the buttons above!", ar: 'لم أفهم ذلك تماماً. حاول النقر على أحد الأزرار أعلاه!', de: 'Ich habe das nicht ganz verstanden. Versuchen Sie, auf eine der Schaltflächen oben zu klicken!' }
    },
    // Splash
    splash: {
        title: { en: 'Welcome to my world', ar: 'مرحباً بك في عالمي', de: 'Willkommen in meiner Welt' },
        enter: { en: 'Enter', ar: 'دخول', de: 'Eintreten' },
        skip: { en: 'or click anywhere to skip', ar: 'أو انقر في أي مكان للتخطي', de: 'oder klicken Sie irgendwo zum Überspringen' }
    }
};

// ========================================
// INITIALIZATION
// ========================================
function init() {
    // Check if splash should show
    const splashSeen = sessionStorage.getItem('haron_splash_seen');
    
    if (splashSeen) {
        hideSplash();
    } else {
        setupSplash();
    }
    
    // Setup language
    setLanguage(state.currentLang);
    
    // Setup router
    setupRouter();
    
    // Setup mobile menu
    setupMobileMenu();
    
    // Setup reviews
    setupReviews();
    
    // Setup chatbot
    setupChatbot();
    
    // Setup contact
    setupContact();
    
    // Handle hash on load
    handleHashChange();
}

// ========================================
// SPLASH SCREEN
// ========================================
function setupSplash() {
    elements.enterBtn.addEventListener('click', enterSite);
    elements.splash.addEventListener('click', (e) => {
        if (e.target !== elements.enterBtn) {
            enterSite();
        }
    });
}

function enterSite() {
    sessionStorage.setItem('haron_splash_seen', 'true');
    hideSplash();
}

function hideSplash() {
    elements.splash.classList.add('hidden');
    elements.app.classList.add('visible');
}

// ========================================
// LANGUAGE SYSTEM
// ========================================
function setLanguage(lang) {
    state.currentLang = lang;
    localStorage.setItem('haron_lang', lang);
    
    // Update direction
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update lang buttons
    elements.langBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Update all translatable elements
    updateTranslations();
}

function updateTranslations() {
    const lang = state.currentLang;
    
    // Update data-en, data-ar, data-de elements
    document.querySelectorAll('[data-en]').forEach(el => {
        if (el.dataset[lang]) {
            el.textContent = el.dataset[lang];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-placeholder-en]').forEach(el => {
        const key = `placeholder-${lang}`;
        if (el.dataset[key]) {
            el.placeholder = el.dataset[key];
        }
    });
    
    // Update select options
    document.querySelectorAll('select option[data-en]').forEach(el => {
        if (el.dataset[lang]) {
            el.textContent = el.dataset[lang];
        }
    });
    
    // Update navbar links
    elements.navLinks.forEach(link => {
        const key = link.dataset.en;
        if (key && translations.nav[key.toLowerCase()]) {
            link.textContent = translations.nav[key.toLowerCase()][lang];
        }
    });
}

// ========================================
// ROUTER
// ========================================
function setupRouter() {
    window.addEventListener('hashchange', handleHashChange);
    
    // Nav link clicks
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            // Close mobile menu
            elements.mobileMenu.classList.remove('active');
            elements.mobileOverlay.classList.remove('active');
            elements.burger.classList.remove('active');
        });
    });
}

function handleHashChange() {
    let hash = window.location.hash.slice(1) || 'home';
    
    // Validate hash
    const validPages = ['home', 'story', 'connect', 'reviews', 'contact'];
    if (!validPages.includes(hash)) {
        hash = 'home';
    }
    
    // Update state
    state.currentPage = hash;
    
    // Update pages
    elements.pages.forEach(page => {
        const pageName = page.dataset.page;
        page.classList.toggle('active', pageName === hash);
    });
    
    // Update nav links
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        const linkHash = link.getAttribute('href').slice(1);
        link.classList.toggle('active', linkHash === hash);
    });
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// ========================================
// MOBILE MENU
// ========================================
function setupMobileMenu() {
    elements.burger.addEventListener('click', () => {
        elements.burger.classList.toggle('active');
        elements.mobileMenu.classList.toggle('active');
        elements.mobileOverlay.classList.toggle('active');
    });
    
    elements.mobileOverlay.addEventListener('click', () => {
        elements.burger.classList.remove('active');
        elements.mobileMenu.classList.remove('active');
        elements.mobileOverlay.classList.remove('active');
    });
    
    // Language switcher in navbar
    elements.langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });
}

// ========================================
// REVIEWS SYSTEM
// ========================================
function setupReviews() {
    // Star rating
    const stars = elements.starsInput.querySelectorAll('.star');
    stars.forEach(star => {
        star.addEventListener('click', () => {
            state.selectedRating = parseInt(star.dataset.value);
            updateStars();
        });
        
        star.addEventListener('mouseenter', () => {
            const value = parseInt(star.dataset.value);
            highlightStars(value);
        });
    });
    
    elements.starsInput.addEventListener('mouseleave', () => {
        updateStars();
    });
    
    // Submit
    elements.submitReview.addEventListener('click', submitReview);
    
    // Filters
    elements.reviewFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            elements.reviewFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderReviews(btn.dataset.filter);
        });
    });
    
    // Initial render
    renderReviews('all');
}

function updateStars() {
    const stars = elements.starsInput.querySelectorAll('.star');
    stars.forEach(star => {
        const value = parseInt(star.dataset.value);
        star.classList.toggle('active', value <= state.selectedRating);
    });
}

function highlightStars(count) {
    const stars = elements.starsInput.querySelectorAll('.star');
    stars.forEach(star => {
        const value = parseInt(star.dataset.value);
        star.classList.toggle('active', value <= count);
    });
}

function submitReview() {
    const name = document.getElementById('reviewName').value.trim() || 'Anonymous';
    const lang = document.getElementById('reviewLang').value;
    const rating = state.selectedRating;
    const text = document.getElementById('reviewText').value.trim();
    
    if (rating === 0) {
        alert('Please select a rating');
        return;
    }
    
    if (!text) {
        alert('Please write a comment');
        return;
    }
    
    // Create review object
    const review = {
        id: Date.now(),
        name,
        lang,
        rating,
        text,
        date: new Date().toISOString()
    };
    
    // Get existing reviews
    const reviews = JSON.parse(localStorage.getItem('haron_reviews') || '[]');
    reviews.unshift(review);
    localStorage.setItem('haron_reviews', JSON.stringify(reviews));
    
    // Clear form
    document.getElementById('reviewName').value = '';
    document.getElementById('reviewText').value = '';
    state.selectedRating = 0;
    updateStars();
    
    // Re-render
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
    renderReviews(activeFilter);
}

function renderReviews(filter = 'all') {
    const reviews = JSON.parse(localStorage.getItem('haron_reviews') || '[]');
    
    let filtered = reviews;
    if (filter === '5') {
        filtered = reviews.filter(r => r.rating === 5);
    } else if (filter === '4') {
        filtered = reviews.filter(r => r.rating >= 4);
    }
    
    if (filtered.length === 0) {
        elements.reviewsList.innerHTML = `<p class="no-reviews">${translations.reviews.noReviews[state.currentLang]}</p>`;
        return;
    }
    
    elements.reviewsList.innerHTML = filtered.map(review => {
        const date = new Date(review.date).toLocaleDateString(state.currentLang === 'ar' ? 'ar-EG' : state.currentLang === 'de' ? 'de-DE' : 'en-US');
        const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
        
        return `
            <div class="review-card">
                <div class="review-header">
                    <span class="reviewer-name">${escapeHtml(review.name)}</span>
                    <span class="review-rating">${stars}</span>
                </div>
                <p class="review-text">${escapeHtml(review.text)}</p>
                <span class="review-date">${date}</span>
            </div>
        `;
    }).join('');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ========================================
// CHATBOT
// ========================================
function setupChatbot() {
    // Toggle panel
    elements.chatbotToggle.addEventListener('click', () => {
        elements.chatbotPanel.classList.toggle('active');
    });
    
    elements.chatbotClose.addEventListener('click', () => {
        elements.chatbotPanel.classList.remove('active');
    });
    
    // Quick actions
    elements.quickActions.forEach(btn => {
        btn.addEventListener('click', () => {
            handleChatAction(btn.dataset.action);
        });
    });
    
    // Send message
    elements.chatbotSend.addEventListener('click', sendChatMessage);
    elements.chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendChatMessage();
        }
    });
}

function handleChatAction(action) {
    const lang = state.currentLang;
    let message = '';
    let showBackBtn = true;
    
    switch(action) {
        case 'who':
            message = translations.chatbot.whoAnswer[lang];
            addQuickActionButtons();
            break;
            
        case 'content':
            message = translations.chatbot.contentAnswer[lang];
            addQuickActionButtons();
            break;
            
        case 'collab':
            message = translations.chatbot.collabPrompt[lang];
            state.chatStep = 'collab';
            break;
            
        case 'links':
            message = translations.chatbot.linksAnswer[lang];
            addSocialButtons();
            break;
            
        case 'review':
            message = translations.chatbot.reviewPrompt[lang];
            setTimeout(() => {
                window.location.hash = 'reviews';
                elements.chatbotPanel.classList.remove('active');
            }, 2000);
            break;
    }
    
    addBotMessage(message);
    if (showBackBtn) {
        addBackButton();
    }
}

function sendChatMessage() {
    const input = elements.chatbotInput;
    const text = input.value.trim().toLowerCase();
    
    if (!text) return;
    
    // Add user message
    addUserMessage(input.value.trim());
    input.value = '';
    
    // Handle based on current step
    if (state.chatStep === 'collab') {
        handleCollabInput(text);
        return;
    }
    
    // Keyword matching
    const lang = state.currentLang;
    
    // Check for keywords
    const keywords = {
        en: {
            'who': 'who',
            'story': 'who',
            'haron': 'who',
            'content': 'content',
            'daily': 'content',
            'instagram': 'links',
            'tiktok': 'links',
            'whatsapp': 'links',
            'social': 'links',
            'review': 'review',
            'collab': 'collab',
            'collaboration': 'collab',
            'partner': 'collab'
        },
        ar: {
            'من': 'who',
            'هارون': 'who',
            'قصة': 'who',
            'محتوى': 'content',
            'يومي': 'content',
            'إنستغرام': 'links',
            'تيكتوك': 'links',
            'واتساب': 'links',
            'تواصل': 'links',
            'رأي': 'review',
            'مراجعة': 'review',
            'تعاون': 'collab',
            'شراكة': 'collab'
        },
        de: {
            'wer': 'who',
            'geschichte': 'who',
            'haron': 'who',
            'content': 'content',
            'täglich': 'content',
            'instagram': 'links',
            'tiktok': 'links',
            'whatsapp': 'links',
            'sozial': 'links',
            'bewertung': 'review',
            'zusammenarbeit': 'collab',
            'kooperation': 'collab'
        }
    };
    
    const keywordMap = keywords[lang] || keywords.en;
    let matchedAction = null;
    
    for (const [key, action] of Object.entries(keywordMap)) {
        if (text.includes(key)) {
            matchedAction = action;
            break;
        }
    }
    
    if (matchedAction) {
        handleChatAction(matchedAction);
    } else {
        addBotMessage(translations.chatbot.noUnderstand[lang]);
        addQuickActionButtons();
    }
}

function handleCollabInput(text) {
    const lang = state.currentLang;
    
    // Simple state machine for collaboration
    if (!state.collabAnswers.platform) {
        state.collabAnswers.platform = text;
        addBotMessage("Great! What's your idea?");
    } else if (!state.collabAnswers.idea) {
        state.collabAnswers.idea = text;
        addBotMessage("Thanks! Any budget range? (optional - just press enter if none)");
    } else {
        state.collabAnswers.budget = text;
        
        // Thank user and provide contact options
        addBotMessage(translations.chatbot.collabThanks[lang]);
        
        // Reset state
        state.collabAnswers = {};
        state.chatStep = 'menu';
        
        // Show social buttons
        setTimeout(() => addSocialButtons(), 500);
    }
}

function addBotMessage(text) {
    const msg = document.createElement('div');
    msg.className = 'bot-message';
    msg.innerHTML = `<p>${escapeHtml(text)}</p>`;
    elements.chatbotMessages.appendChild(msg);
    scrollToBottom();
}

function addUserMessage(text) {
    const msg = document.createElement('div');
    msg.className = 'user-message';
    msg.innerHTML = `<p>${escapeHtml(text)}</p>`;
    elements.chatbotMessages.appendChild(msg);
    scrollToBottom();
}

function addQuickActionButtons() {
    const lang = state.currentLang;
    const container = document.getElementById('chatbotQuickActions');
    
    container.innerHTML = `
        <button class="quick-btn" data-action="who">${translations.chatbot.whoBtn[lang]}</button>
        <button class="quick-btn" data-action="content">${translations.chatbot.contentBtn[lang]}</button>
        <button class="quick-btn" data-action="collab">${translations.chatbot.collabBtn[lang]}</button>
        <button class="quick-btn" data-action="links">${translations.chatbot.linksBtn[lang]}</button>
        <button class="quick-btn" data-action="review">${translations.chatbot.reviewBtn[lang]}</button>
    `;
    
    // Re-attach event listeners
    container.querySelectorAll('.quick-btn').forEach(btn => {
        btn.addEventListener('click', () => handleChatAction(btn.dataset.action));
    });
}

function addSocialButtons() {
    const lang = state.currentLang;
    const container = document.getElementById('chatbotQuickActions');
    
    container.innerHTML = `
        <a href="https://www.instagram.com/haron._.11?igsh=MWlxbGpueTdqcWpiNQ==" target="_blank" class="quick-btn">Instagram</a>
        <a href="https://www.tiktok.com/@haron._.11?_r=1&_t=ZG-948yS8SsIFc" target="_blank" class="quick-btn">TikTok</a>
        <a href="https://wa.me/905366720667" target="_blank" class="quick-btn">WhatsApp</a>
    `;
    
    addBackButton();
}

function addBackButton() {
    const lang = state.currentLang;
    const container = document.getElementById('chatbotQuickActions');
    
    const backBtn = document.createElement('button');
    backBtn.className = 'quick-btn';
    backBtn.textContent = translations.chatbot.backToMenu[lang];
    backBtn.style.borderColor = 'var(--neon-violet)';
    backBtn.addEventListener('click', () => {
        state.chatStep = 'menu';
        state.collabAnswers = {};
        addBotMessage(translations.chatbot.greeting[lang]);
        addQuickActionButtons();
    });
    
    container.appendChild(backBtn);
}

function scrollToBottom() {
    elements.chatbotMessages.scrollTop = elements.chatbotMessages.scrollHeight;
}

// ========================================
// CONTACT SYSTEM
// ========================================
function setupContact() {
    // Copy message
    elements.copyMessage.addEventListener('click', copyContactMessage);
    
    // Open WhatsApp
    elements.openWhatsApp.addEventListener('click', openWhatsApp);
    
    // Open Instagram
    elements.openInstagram.addEventListener('click', openInstagramDM);
}

function getContactMessage() {
    const name = elements.contactName.value.trim() || 'Anonymous';
    const topic = elements.contactTopic.value;
    const message = elements.contactMessage.value.trim();
    const lang = state.currentLang.toUpperCase();
    
    const topicLabels = {
        collaboration: { en: 'Collaboration', ar: 'تعاون', de: 'Zusammenarbeit' },
        question: { en: 'Question', ar: 'سؤال', de: 'Frage' },
        support: { en: 'Support', ar: 'دعم', de: 'Unterstützung' },
        other: { en: 'Other', ar: 'أخرى', de: 'Sonstiges' }
    };
    
    return `Name: ${name}
Topic: ${topicLabels[topic][state.currentLang]}
Language: ${lang}

Message:
${message}`;
}

function copyContactMessage() {
    const msg = getContactMessage();
    navigator.clipboard.writeText(msg).then(() => {
        alert('Message copied to clipboard!');
    }).catch(() => {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = msg;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('Message copied to clipboard!');
    });
}

function openWhatsApp() {
    const name = elements.contactName.value.trim() || 'Visitor';
    const topic = elements.contactTopic.value;
    const message = elements.contactMessage.value.trim();
    const lang = state.currentLang.toUpperCase();
    
    const topicLabels = {
        collaboration: { en: 'Collaboration', ar: 'تعاون', de: 'Zusammenarbeit' },
        question: { en: 'Question', ar: 'سؤال', de: 'Frage' },
        support: { en: 'Support', ar: 'دعم', de: 'Unterstützung' },
        other: { en: 'Other', ar: 'أخرى', de: 'Sonstiges' }
    };
    
    const text = `*Name:* ${name}
*Topic:* ${topicLabels[topic][state.currentLang]}
*Language:* ${lang}

*Message:*
${message}`;
    
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/905366720667?text=${encodedText}`, '_blank');
}

function openInstagramDM() {
    window.open('https://www.instagram.com/direct/new/?haron._.11', '_blank');
}

// ========================================
// START
// ========================================
document.addEventListener('DOMContentLoaded', init);
