// Complete Translation System
const translations = {
    en: {
        "welcome": "Welcome to BunaGebeya Ethiopia - The Birthplace of Coffee",
        "current-language": "English",
        "search-placeholder": "Search for Ethiopian coffee...",
        "account": "Account",
        "wishlist": "Wishlist",
        "cart": "Cart",
        "all-coffees": "All Coffees",
        "guji-region": "Guji Region",
        "harrar-region": "Harrar Region",
        "yirgachefe-region": "Yirgachefe Region",
        "sidama-region": "Sidama Region",
        "new-arrivals": "New Arrivals",
        "best-sellers": "Best Sellers",
        "hero-title": "Discover Authentic Ethiopian Coffee",
        "hero-subtitle": "Direct from farmers to your cup. Explore our premium selection of Ethiopian coffee beans from the birthplace of coffee.",
        "hero-button": "Explore Our Coffees",
        "coffees-title": "Our Premium Ethiopian Coffees",
        "coffees-subtitle": "Directly sourced from Ethiopian farmers. Each coffee has unique flavor profiles that reflect their region of origin.",
        "best-seller": "Best Seller",
        "popular": "Popular",
        "new": "New",
        "limited": "Limited",
        "guji-title": "Premium Guji Coffee",
        "guji-region-text": "Guji Region",
        "guji-desc": "Known for its complex flavor profiles with notes of citrus, bergamot, and stone fruits.",
        "harrar-title": "Harrar Coffee",
        "harrar-region-text": "Harrar Region",
        "harrar-desc": "Famous for its dry-processed beans with complex, wine-like flavors and blueberry notes.",
        "yirgachefe-title": "Yirgachefe Coffee",
        "yirgachefe-region-text": "Yirgachefe Region",
        "yirgachefe-desc": "Renowned for its delicate body, bright acidity, and floral aroma with citrus notes.",
        "sidama-title": "Sidama Coffee",
        "sidama-region-text": "Sidama Region",
        "sidama-desc": "Produces coffees with bright, wine-like acidity and complex flavor profiles.",
        "add-to-cart": "Add to Cart",
        "cultural-title": "The Ethiopian Coffee Ceremony",
        "cultural-p1": "The Ethiopian coffee ceremony is a central part of Ethiopian culture and social life. It is a ritualized form of making and drinking coffee that can take several hours.",
        "cultural-p2": "The ceremony is typically performed by a woman and involves roasting green coffee beans, grinding them, and brewing the coffee in a special pot called a jebena.",
        "cultural-p3": "Guests are invited to enjoy the aromatic coffee along with traditional snacks like popcorn or roasted barley. The ceremony is a time for conversation, community, and connection.",
        "cultural-button": "Learn More",
        "cart-title": "Shopping Cart",
        "remove": "Remove",
        "total": "Total",
        "checkout": "Proceed to Checkout",
        "footer-desc": "Bridging the gap between Ethiopian coffee farmers and global coffee lovers for mutual growth and authentic experiences.",
        "shop": "Shop",
        "customer-service": "Customer Service",
        "contact": "Contact Us",
        "shipping": "Shipping Policy",
        "returns": "Returns & Refunds",
        "faq": "FAQ",
        "track": "Track Your Order",
        "about": "About Us",
        "story": "Our Story",
        "farmers": "Our Farmers",
        "sustainability": "Sustainability",
        "press": "Press",
        "careers": "Careers",
        "tagline": "The Birthplace of Coffee",
        "menu": "Menu",
        "chat-us": "Chat Us",
        "chat-title": "Chat with Buna Gebeya",
        "welcome-message": "Hello! Welcome to Buna Gebeya Ethiopia. How can we help you today?",
        "sample-question": "I'm interested in your Guji coffee. Can you tell me more about it?",
        "guji-response": "Our Guji coffee is known for its complex flavor with notes of citrus and stone fruits. It's directly sourced from farmers in the Guji region.",
        "message-placeholder": "Type your message...",
        "customer-service": "Customer Service",
        "sales-manager": "Sales Manager",
        "coffee-expert": "Coffee Expert",
        "farmer-relations": "Farmer Relations",
        "account-title": "Account",
        "buy-coffee": "Buy Coffee",
        "sell-coffee": "Sell Coffee",
        "cancel": "Cancel",
        "login": "Login / Register",
        "or-login-with": "Or login with",
        "register-seller": "Register as Seller",
        "view-profile": "View Profile",
        "order-history": "Order History",
        "logout": "Logout",
        "wishlist-title": "My Wishlist",
        "empty-wishlist": "Your wishlist is empty",
        "add-to-wishlist": "Add coffees you love to your wishlist",
        "clear-wishlist": "Clear Wishlist",
        "share-wishlist": "Share",
        "filter-title": "Filter Products",
        "reset-filters": "Reset",
        "apply-filters": "Apply",
        "ethiopian-only": "Ethiopian Only",
        "verified-suppliers": "Verified Suppliers",
        "samples-available": "Samples Available",
        "clear-all": "Clear All",
        "filter-products": "Filter Products",
        "categories": "Categories",
        "coffee-regions": "Coffee Regions",
        "supplier-types": "Supplier Types",
        "product-options": "Product Options",
        "coffee-properties": "Coffee Properties",
        "price-range": "Price Range",
        "showing": "Showing",
        "of": "of",
        "products": "products"
    },
    am: {
        "welcome": "ወደ ቡና ገበያ ኢትዮጵያ እንኳን ደህና መጡ - የቡና መዳረሻ",
        "current-language": "አማርኛ",
        "search-placeholder": "ለኢትዮጵያ ቡና ይፈልጉ...",
        "account": "መለያ",
        "wishlist": "የሚፈልጉት ዝርዝር",
        "cart": "ጋሪ",
        "all-coffees": "ሁሉም ቡናዎች",
        "guji-region": "ጉጂ ክልል",
        "harrar-region": "ሐረር ክልል",
        "yirgachefe-region": "ይርጋቸፍ ክልል",
        "sidama-region": "ሲዳማ ክልል",
        "new-arrivals": "አዲስ የመጡ",
        "best-sellers": "በብዛት የሚሸጡ",
        "hero-title": "እውነተኛ የኢትዮጵያ ቡና ይፈልጉ",
        "hero-subtitle": "በቀጥታ ከአርሶ አደሮች ወደ ኩባያዎ። ከቡና መዳረሻ የሚመጡ የኢትዮጵያ ቡና አተሮችን ይመልከቱ።",
        "hero-button": "ቡናዎቻችንን ይመልከቱ",
        "coffees-title": "የእኛ ፕሪሚየም የኢትዮጵያ ቡናዎች",
        "coffees-subtitle": "በቀጥታ ከኢትዮጵያ አርሶ አደሮች የተገኘ። እያንዳንዱ ቡና የራሱ ልዩ ጣዕሞች አሉት ይህም የመነሻ ክልላቸውን ያንፀባርቃል።",
        "best-seller": "በብዛት የሚሸጥ",
        "popular": "ተወዳጅ",
        "new": "አዲስ",
        "limited": "የተገደበ",
        "guji-title": "ፕሪሚየም ጉጂ ቡና",
        "guji-region-text": "ጉጂ ክልል",
        "guji-desc": "በሲትረስ፣ በርጋሞት እና በድንጋይ ፍራፍሬዎች ምልክቶች በተለያዩ ጣዕሞች ይታወቃል።",
        "harrar-title": "ሐረር ቡና",
        "harrar-region-text": "ሐረር ክልል",
        "harrar-desc": "በደረቅ የተሰራባቸው አተሮች በተለያዩ ጣዕሞች፣ እንደ ወይን ጣዕሞች እና የብልጭታ ምልክቶች በመኖራቸው ይታወቃሉ።",
        "yirgachefe-title": "ይርጋቸፍ ቡና",
        "yirgachefe-region-text": "ይርጋቸፍ ክልል",
        "yirgachefe-desc": "በስሉል አካል፣ ብሩህ አሲድ እና በሲትረስ ምልክቶች አበባ አሜን በመኖሩ ይታወቃል።",
        "sidama-title": "ሲዳማ ቡና",
        "sidama-region-text": "ሲዳማ ክልል",
        "sidama-desc": "ብሩህ፣ እንደ ወይን አሲድ እና ተለያዩ ጣዕሞች ያላቸውን ቡናዎች ያመርታል።",
        "add-to-cart": "ወደ ጋሪ ጨምር",
        "cultural-title": "የኢትዮጵያ የቡና ሥነ ሥርዓት",
        "cultural-p1": "የኢትዮጵያ የቡና ሥነ ሥርዓት ለኢትዮጵያ ባህል እና ማህበራዊ ሕይወት መሃል ነው። ጥቂት ሰዓታት ሊወስድ የሚችል የቡና ማዘጋጀት እና መጠጣት ሥርዓት ነው።",
        "cultural-p2": "ሥርዓቱ በተለምዶ በሴት ይከናወናል እና አረንጓዴ የቡና አተሮችን መጋገር፣ መፍጨት እና በጀበና የሚባል ልዩ ድስት ውስጥ መፍጨትን ያካትታል።",
        "cultural-p3": "እንግዶች አሮማቲክ ቡና ከባህላዊ ምግቦች ጋር እንደ ፎፎክርን ወይም የተጠበሰ ገብስ ለመጠጣት ይጋበዛሉ። ሥርዓቱ ለንግግር፣ ማህበረሰብ እና ግንኙነት ጊዜ ነው።",
        "cultural-button": "ተጨማሪ ይወቁ",
        "cart-title": "የግዢ ጋሪ",
        "remove": "አስወግድ",
        "total": "ጠቅላላ",
        "checkout": "ወደ ክፍያ ቀጠር",
        "footer-desc": "በኢትዮጵያ የቡና አርሶ አደሮች እና በዓለም የቡና ተወዳጆች መካከል ለጋራ እድገት እና እውነተኛ ተሞክሮዎች የሚያገናኝ።",
        "shop": "ግዢ",
        "customer-service": "የደንበኛ አገልግሎት",
        "contact": "አግኙን",
        "shipping": "የመላኪያ ፖሊሲ",
        "returns": "መመለሻዎች እና ተመላሽ ገንዘብ",
        "faq": "ተደጋግሞም የሚጠየቁ ጥያቄዎች",
        "track": "ትዕዛዝዎን ይከታተሉ",
        "about": "ስለ እኛ",
        "story": "ታሪካችን",
        "farmers": "አርሶ አደሮቻችን",
        "sustainability": "ዘላቂነት",
        "press": "ፕሬስ",
        "careers": "ሥራዎች",
        "tagline": "የቡና መዳረሻ",
        "menu": "ማውጫ",
        "chat-us": "አናግረን",
        "chat-title": "ከቡና ገበያ ጋር ያውሩ",
        "welcome-message": "ሰላም! ወደ ቡና ገበያ ኢትዮጵያ እንኳን ደህና መጡ። ዛሬ እንዴት ልንረዳዎት እንችላለን?",
        "sample-question": "በጉጂ ቡናዎ ፍላጎት አለኝ። በላዩ ላይ የበለጠ መረጃ ማግኘት እችላለሁ?",
        "guji-response": "የእኛ ጉጂ ቡና በሲትረስ እና በድንጋይ ፍራፍሬዎች ምልክቶች በተለያዩ ጣዕሞች ይታወቃል። በቀጥታ ከጉጂ ክልል አርሶ አደሮች የተገኘ ነው።",
        "message-placeholder": "መልእክትዎን ይፃፉ...",
        "customer-service": "የደንበኛ አገልግሎት",
        "sales-manager": "የሽያጭ አስተዳዳሪ",
        "coffee-expert": "የቡና ባለሙያ",
        "farmer-relations": "ከአርሶ አደሮች ግንኙነት",
        "account-title": "መለያ",
        "buy-coffee": "ቡና ይግዙ",
        "sell-coffee": "ቡና ይሽጡ",
        "cancel": "ሰርዝ",
        "login": "ግባ / ይመዝገቡ",
        "or-login-with": "ወይም በዚህ ይግቡ",
        "register-seller": "እንደ ሻጭ ይመዝገቡ",
        "view-profile": "መገለጫ ይመልከቱ",
        "order-history": "የትዕዛዝ ታሪክ",
        "logout": "ውጣ",
        "wishlist-title": "የምፈልጋቸው ዝርዝር",
        "empty-wishlist": "የምትፈልጋቸው ዝርዝር ባዶ ነው",
        "add-to-wishlist": "የሚወዷቸውን ቡናዎች ወደ የምትፈልጋቸው ዝርዝር ያክሉ",
        "clear-wishlist": "የምትፈልጋቸውን ዝርዝር አጽዳ",
        "share-wishlist": "አጋራ",
        "filter-title": "ምርቶችን አጣራ",
        "reset-filters": "እንደገና አቀናብር",
        "apply-filters": "ተግብር",
        "ethiopian-only": "ኢትዮጵያዊ ብቻ",
        "verified-suppliers": "የተረጋገጡ አቅራቢዎች",
        "samples-available": "ናሙናዎች ይገኛሉ",
        "clear-all": "ሁሉንም አጽዳ",
        "filter-products": "ምርቶችን አጣራ",
        "categories": "ምድቦች",
        "coffee-regions": "የቡና ክልሎች",
        "supplier-types": "የአቅራቢ አይነቶች",
        "product-options": "የምርት አማራጮች",
        "coffee-properties": "የቡና ባህሪያት",
        "price-range": "የዋጋ ክልል",
        "showing": "የሚታየው",
        "of": "ከ",
        "products": "ምርቶች"
    }
};

// Global variable to track current language
let currentLanguage = 'en';

// Function to change language
function changeLanguage(lang) {
    console.log('Changing language to:', lang);
    currentLanguage = lang;
    
    // Update all translatable elements
    const translatableElements = document.querySelectorAll('[data-translate]');
    console.log('Found translatable elements:', translatableElements.length);
    
    translatableElements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
            console.log('Translated:', key, 'to:', translations[lang][key]);
        } else {
            console.warn('Translation not found for key:', key, 'in language:', lang);
        }
    });
    
    // Update placeholders
    const searchInput = document.querySelector('.search-bar input');
    if (translations[lang] && translations[lang]['search-placeholder'] && searchInput) {
        searchInput.placeholder = translations[lang]['search-placeholder'];
    }
    
    // Update language button text
    const languageBtn = document.querySelector('.language-btn span');
    if (translations[lang] && translations[lang]['current-language'] && languageBtn) {
        languageBtn.textContent = translations[lang]['current-language'];
    }
    
    // Save language preference to localStorage
    try {
        localStorage.setItem('bunaGebeyaLanguage', lang);
        console.log('Language preference saved:', lang);
    } catch (e) {
        console.error('Error saving language preference:', e);
    }
}

// Initialize language system
function initLanguageSystem() {
    console.log('Initializing language system...');
    
    const languageOptions = document.querySelectorAll('.language-option');
    console.log('Found language options:', languageOptions.length);
    
    // Load saved language preference
    let savedLanguage;
    try {
        savedLanguage = localStorage.getItem('bunaGebeyaLanguage');
        console.log('Saved language found:', savedLanguage);
    } catch (e) {
        console.error('Error loading saved language:', e);
        savedLanguage = 'en';
    }
    
    if (savedLanguage && translations[savedLanguage]) {
        changeLanguage(savedLanguage);
    } else {
        // Default to English
        changeLanguage('en');
    }

    // Add click event listeners to language options
    languageOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const selectedLang = option.getAttribute('data-lang');
            console.log('Language option clicked:', selectedLang);
            changeLanguage(selectedLang);
        });
    });

    // Close language dropdown when clicking outside
    document.addEventListener('click', (e) => {
        const languageSelector = document.querySelector('.language-selector');
        if (languageSelector && !languageSelector.contains(e.target)) {
            const dropdown = languageSelector.querySelector('.language-dropdown');
            if (dropdown) {
                dropdown.style.opacity = '0';
                dropdown.style.visibility = 'hidden';
                dropdown.style.transform = 'translateY(10px)';
            }
        }
    });

    console.log('Language system initialized successfully');
}

// Make functions globally available
window.changeLanguage = changeLanguage;
window.initLanguageSystem = initLanguageSystem;
window.translations = translations;