const { createApp, reactive, computed, watch, ref } = Vue;

const defaultState = {
    // GLOBAL DESIGN
    fontHeadline: "Noto Serif",
    fontBody: "Helvetica Neue",
    fontMono: "Space Mono",
    fontSize: "16",

    // SCALES
    scHeroTag: 1.0,
    scHeroTitle: 1.0,
    scHeroDesc: 1.0,
    scHeroBtn: 1.0,
    scHeroSpec: 1.0,
    scCatTitle: 1.0,
    scCatModule: 1.0,
    scCatLink: 1.0,
    scTechTag: 1.0,
    scTechTitle: 1.0,
    scTechDesc: 1.0,
    scTechCardTitle: 1.0,
    scTechCardDesc: 1.0,
    scTechStatLabel: 1.0,
    scTechStatValue: 1.0,
    scCredTag: 1.0,
    scCredTitle: 1.0,
    scCredName: 1.0,
    scCredDesc: 1.0,
    scFooterTitle: 1.0,
    scFooterDesc: 1.0,
    scFaqTitle: 1.0,
    scFaqQ: 1.0,
    scFaqA: 1.0,

    // HERO
    heroTag: "Lugarde Summer Houses at Lawsons",
    heroTitle: "Enjoy the outdoors with \n<em>Lugarde</em>",
    heroDesc: "Upgrade your outdoor space with a professional-grade summer house, providing a durable extension for work, hobbies, or hosting. From garden offices to sheltered retreats, these robust structures offer a versatile, high-performance solution for year-round utility.",
    heroBtn1: "View Select Range",
    heroBtn1Url: "#",
    heroBtn2: "3D Configurator",
    heroBtn2Url: "#",
    heroSpec1Label: "Proven Heritage",
    heroSpec1Value: "40+ Years",
    heroSpec2Label: "Superior Build",
    heroSpec2Value: "A-Brand Quality",
    heroSpec3Label: "Expert Service",
    heroSpec3Value: "5-Year Warranty",
    heroImage: "https://www.lugarde.com/wp-content/uploads/sites/3/2025/09/Hellevoetsluis0119-HDR-1280x852.jpg",
    heroQuote: "\"For more than 40 years, Lugarde has been designing and producing high-quality wooden summerhouses, log cabins, verandas, carports, garages, gazebos and holiday homes – also bespoke.\"",
    
    // CATEGORIES (4 Items)
    categories: [
        { module: "Traditional Range", title: "Log Cabins", linkText: "View Models", linkUrl: "#", icon: "cabin" },
        { module: "Open Structures", title: "Gazebos", linkText: "View Models", linkUrl: "#", icon: "deck" },
        { module: "Prima 3=1 System", title: "Select Prima", linkText: "View Models", linkUrl: "#", icon: "pentagon" },
        { module: "Pro-System", title: "Select Modern", linkText: "View Models", linkUrl: "#", icon: "view_comfy" }
    ],

    // MID CTA
    configCtaTitle: "Want to design your own?",
    configCtaSub: "Create your perfect bespoke garden building with our interactive 3D configurator.",
    configCtaBtn: "Launch Configurator",
    configCtaBtnUrl: "#",

    // TECHNICAL SECTION
    techTag: "Engineering Report 042",
    techTitle: "Mastery in Every Joint.",
    techSub: "Comparing standard garden construction with the Lugarde Premier engineering philosophy. The difference is in the details you can't see.",
    tech1Title: "Prima 3-in-1 System",
    tech1Desc: "Our patented Prima system uses milled aluminum strips inside the timber joints, creating a completely wind and water-tight seal without the need for visible nails or screws.",
    tech1Img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMYMQjSPT8wpkEQynAxci2LFNDFZekl4zoqMKIVV2CIogechBHhFdq4T3Q0sT8iAWLtMRV4E1ZzBy6KTmFnXth-c8NbCysp-Z7oKuuAy8Zu__EDhu2kUo98y6J8CBXn5JEPmr4kWUK9wlj_NNwT8cFMcidEn2U2lYLS8YuDkLEQvGkeZrodX6cRmmXBASuQIgnT2_V6rq6fEE1137AAuix9Fs5WP6RJrjh3EpcCNwBNN2f0s8W7d2rjtvaG_3wps7AtoBLHjyBHOo",
    tech2Title: "Northern Sourced Pine",
    tech2Desc: "Lugarde exclusively uses pine from northern regions where cold climates force trees to grow slowly, resulting in tighter growth rings and naturally denser, more durable material.",
    tech2Img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgIHU0y4pjJBfrUT6x9862aC8bydeDd4_w6KSBe9YLeuK2TXJ4MG764Dbg671opu8h25gOaJCZ_x-yedD7vBKHtl6MiBUJSFjMPmSibIVyiote753a5sfCZf-Kc3mnklO4_uimKBRomikCREZeLBJZt5G7f-p5DsGtU9kjnJY2ZExSyr4rJ_S-1Ne1IIWbKh0KWkxRQCzZn4GrBQJ2RjyuxRUsG2gnG_KQc1qsIzZR2VSMgbaW_jLeBt7BgKj_IL8iarQa-ViGsGA",

    // TRADE CREDENTIALS
    credTag: "Compliance & Standards",
    credTitle: "Trade Credentials",
    credentials: [
        { icon: "verified", name: "FSC & PEFC", desc: "Timber Chain of Custody" },
        { icon: "description", name: "ISO 9001:2015", desc: "Quality Management System" },
        { icon: "architecture", name: "RIBA NBS", desc: "BIM Objects Available" },
        { icon: "security", name: "LPS 1175", desc: "Security Rated Options" }
    ],

    // FOOTER CTA
    footerTag: "Ready for Construction",
    footerTitle: "Your project, <br/>our engineering.",
    footerDesc: "Download our comprehensive Technical Hub guide or schedule a technical briefing with our architectural lead.",
    footerBtn1: "Download Technical Guide",
    footerBtn1Url: "#",
    footerBtn2: "Speak to an Engineer",
    footerBtn2Url: "#",

    // FAQ SECTION
    faqTag: "Common Queries",
    faqTitle: "Frequently Asked Questions",
    faqs: [
        { question: "What is the warranty period?", answer: "All our summerhouses come with a 5-year warranty on manufacturing faults, giving you peace of mind." },
        { question: "Do I need planning permission?", answer: "In many cases, our buildings are designed to fall within permitted development rights. However, we advise checking with your local authority as regulations can vary based on location and size." },
        { question: "Is delivery and installation included?", answer: "Delivery is typically included within standard regions. Professional installation is available as an optional extra and can be quoted separately." }
    ]
};

// Global templates so we can use them in computed and export properties

const getScaleCSS = (s) => `
/* Granular Scale Overrides */
.lugarde-premier-page .lp-hero__tag { font-size: calc(10px * ${s.scHeroTag}) !important; }
@media(min-width: 1024px) { .lugarde-premier-page .lp-hero__tag { font-size: calc(12px * ${s.scHeroTag}) !important; } }

.lugarde-premier-page .lp-hero__title { font-size: calc(3rem * ${s.scHeroTitle}) !important; }
@media(min-width: 1024px) { .lugarde-premier-page .lp-hero__title { font-size: calc(4.5rem * ${s.scHeroTitle}) !important; } }

.lugarde-premier-page .lp-hero__desc { font-size: calc(1rem * ${s.scHeroDesc}) !important; }
.lugarde-premier-page .lp-hero__buttons .lp-btn { font-size: calc(0.8rem * ${s.scHeroBtn}) !important; }

.lugarde-premier-page .lp-hero__spec-label { font-size: calc(10px * ${s.scHeroSpec}) !important; }
.lugarde-premier-page .lp-hero__spec-value { font-size: calc(0.875rem * ${s.scHeroSpec}) !important; }

.lugarde-premier-page .lp-category-card__module { font-size: calc(10px * ${s.scCatModule}) !important; }
.lugarde-premier-page .lp-category-card__title { font-size: calc(1.75rem * ${s.scCatTitle}) !important; }
.lugarde-premier-page .lp-category-card__link { font-size: calc(10px * ${s.scCatLink}) !important; }

.lugarde-premier-page .lp-config-cta__title { font-size: calc(2rem * ${s.scCtaTitle}) !important; }

.lugarde-premier-page .lp-technical__tag { font-size: calc(0.75rem * ${s.scTechTag}) !important; }
.lugarde-premier-page .lp-technical__title { font-size: calc(2.5rem * ${s.scTechTitle}) !important; }
@media(min-width: 1024px) { .lugarde-premier-page .lp-technical__title { font-size: calc(3.75rem * ${s.scTechTitle}) !important; } }
.lugarde-premier-page .lp-technical__subtitle { font-size: calc(1.25rem * ${s.scTechDesc}) !important; }

.lugarde-premier-page .lp-tech-card__content-title { font-size: calc(1.5rem * ${s.scTechCardTitle}) !important; }
.lugarde-premier-page .lp-tech-card__content-desc { font-size: calc(0.875rem * ${s.scTechCardDesc}) !important; }

.lugarde-premier-page .lp-tech-stat__label { font-size: calc(10px * ${s.scTechStatLabel}) !important; }
.lugarde-premier-page .lp-tech-stat__value { font-size: calc(0.875rem * ${s.scTechStatValue}) !important; }

.lugarde-premier-page .lp-credentials__tag { font-size: calc(10px * ${s.scCredTag}) !important; }
.lugarde-premier-page .lp-credentials__title { font-size: calc(1.875rem * ${s.scCredTitle}) !important; }
.lugarde-premier-page .lp-credential__name { font-size: calc(0.75rem * ${s.scCredName}) !important; }
.lugarde-premier-page .lp-credential__desc { font-size: calc(10px * ${s.scCredDesc}) !important; }

.lugarde-premier-page .lp-cta__title { font-size: calc(2.5rem * ${s.scFooterTitle}) !important; }
@media(min-width: 1024px) { .lugarde-premier-page .lp-cta__title { font-size: calc(4.5rem * ${s.scFooterTitle}) !important; } }
.lugarde-premier-page .lp-cta__desc { font-size: calc(1.25rem * ${s.scFooterDesc}) !important; }

.lugarde-premier-page .lp-faq__title { font-size: calc(2.5rem * ${s.scFaqTitle}) !important; }
.lugarde-premier-page .lp-faq__question { font-size: calc(1.25rem * ${s.scFaqQ}) !important; }
.lugarde-premier-page .lp-faq__answer p { font-size: calc(1rem * ${s.scFaqA}) !important; }
`;

const getBlock3 = (s) => `
<section class="lp-hero lp-blueprint-grid" id="lugarde-hero">
  <div class="lp-hero__grid">
    <div class="lp-hero__content">
        <div class="lp-hero__brand">
          <img src="https://www.lugarde.com/wp-content/uploads/2021/01/logo.png" alt="Lugarde Logo" class="lp-hero__lugarde-logo" />
          <span class="lp-hero__dealer-badge">Authorised<br/>Premium Dealer</span>
        </div>
      <p class="lp-hero__tag">
        <span class="lp-hero__tag-line"></span> ${s.heroTag}
      </p>
      <h1 class="lp-hero__title">
        ${s.heroTitle.replace(/\n/g, '<br/>')}
      </h1>
      <p class="lp-hero__desc">
        ${s.heroDesc}
      </p>
      <div class="lp-hero__buttons">
        <button class="lp-btn lp-btn-primary" onclick="window.location.href='${s.heroBtn1Url}'">${s.heroBtn1}</button>
        <button class="lp-btn lp-btn-outline" onclick="window.location.href='${s.heroBtn2Url}'">${s.heroBtn2}</button>
      </div>
      <div class="lp-hero__specs">
        <div>
          <span class="lp-hero__spec-label">${s.heroSpec1Label}</span>
          <span class="lp-hero__spec-value">${s.heroSpec1Value}</span>
        </div>
        <div>
          <span class="lp-hero__spec-label">${s.heroSpec2Label}</span>
          <span class="lp-hero__spec-value">${s.heroSpec2Value}</span>
        </div>
        <div>
          <span class="lp-hero__spec-label">${s.heroSpec3Label}</span>
          <span class="lp-hero__spec-value">${s.heroSpec3Value}</span>
        </div>
      </div>
    </div>
    <div class="lp-hero__image-wrap">
      <img src="${s.heroImage}" alt="Hero" />
      <div class="lp-hero__quote">
        <span class="material-symbols-outlined">architecture</span>
        <p>${s.heroQuote}</p>
      </div>
    </div>
  </div>
</section>
`;

const getBlock4 = (s) => `
<section class="lp-categories" id="lugarde-categories">
  <div class="lp-categories__grid">
    ${s.categories.map(cat => `
    <div class="lp-category-card">
      <div class="lp-category-card__content">
        <span class="lp-category-card__module">${cat.module}</span>
        <h2 class="lp-category-card__title">${cat.title}</h2>
        <a class="lp-category-card__link" href="${cat.linkUrl}">
          ${cat.linkText} <span class="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
      <span class="material-symbols-outlined lp-category-card__bg-icon">${cat.icon}</span>
    </div>
    `).join('')}
  </div>
</section>

<section class="lp-config-cta" id="lugarde-configurator">
  <div class="lp-container">
    <div class="lp-config-cta__inner">
      <div class="lp-config-cta__text">
        <h2 class="lp-config-cta__title">${s.configCtaTitle}</h2>
        <p class="lp-config-cta__subtitle">${s.configCtaSub}</p>
      </div>
      <a href="${s.configCtaBtnUrl}" class="lp-config-cta__button">
        ${s.configCtaBtn} <span class="material-symbols-outlined">design_services</span>
      </a>
    </div>
  </div>
</section>

<section class="lp-technical" id="lugarde-technical">
  <div class="lp-technical__bg lp-blueprint-grid"></div>
  <div class="lp-container">
    <div class="lp-technical__header">
      <h2 class="lp-technical__tag"><span class="lp-technical__tag-line"></span> ${s.techTag}</h2>
      <h3 class="lp-technical__title">${s.techTitle}</h3>
      <p class="lp-technical__subtitle">${s.techSub}</p>
    </div>
    <div class="lp-technical__grid">
      <div class="lp-tech-card">
        <div class="lp-tech-card__img-wrap lp-tech-card__img-wrap--premier">
          <img class="lp-tech-card__img" src="${s.tech1Img}" />
        </div>
        <div class="lp-tech-card__body">
          <div class="lp-tech-card__num">01</div>
          <div>
            <h4 class="lp-tech-card__content-title">${s.tech1Title}</h4>
            <p class="lp-tech-card__content-desc">${s.tech1Desc}</p>
            <div class="lp-tech-card__stats">
              <div class="lp-tech-stat">
                <span class="lp-tech-stat__label">Seal Rating</span>
                <span class="lp-tech-stat__value">Class 4 Air Tight</span>
              </div>
              <div class="lp-tech-stat">
                <span class="lp-tech-stat__label">Assembly</span>
                <span class="lp-tech-stat__value">Mechanical Lock</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lp-tech-card">
        <div class="lp-tech-card__img-wrap lp-tech-card__img-wrap--standard">
          <img class="lp-tech-card__img" src="${s.tech2Img}" />
        </div>
        <div class="lp-tech-card__body">
          <div class="lp-tech-card__num">02</div>
          <div>
            <h4 class="lp-tech-card__content-title">${s.tech2Title}</h4>
            <p class="lp-tech-card__content-desc">${s.tech2Desc}</p>
            <div class="lp-tech-card__stats">
              <div class="lp-tech-stat">
                <span class="lp-tech-stat__label">Fiber Density</span>
                <span class="lp-tech-stat__value">+45% vs Standard</span>
              </div>
              <div class="lp-tech-stat">
                <span class="lp-tech-stat__label">Moisture Content</span>
                <span class="lp-tech-stat__value">14% Kiln Dried</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

const getBlock5 = (s) => `
<section class="lp-credentials" id="lugarde-credentials">
  <div class="lp-container">
    <div class="lp-credentials__inner">
      <div class="lp-credentials__heading">
        <h3 class="lp-credentials__tag">${s.credTag}</h3>
        <h4 class="lp-credentials__title">${s.credTitle}</h4>
      </div>
      <div class="lp-credentials__items">
        ${s.credentials.map(c => `
        <div class="lp-credential">
          <span class="material-symbols-outlined">${c.icon}</span>
          <div>
            <span class="lp-credential__name">${c.name}</span>
            <span class="lp-credential__desc">${c.desc}</span>
          </div>
        </div>
        `).join('')}
      </div>
    </div>
  </div>
</section>

<section class="lp-cta" id="lugarde-cta">
  <div class="lp-cta__lines">
    <div class="lp-cta__line-v"></div>
    <div class="lp-cta__line-v"></div>
    <div class="lp-cta__line-h"></div>
  </div>
  <div class="lp-container">
    <div class="lp-cta__content">
      <span class="lp-cta__tag">${s.footerTag}</span>
      <h2 class="lp-cta__title">${s.footerTitle}</h2>
      <p class="lp-cta__desc">${s.footerDesc}</p>
      <div class="lp-cta__buttons">
        <button class="lp-btn lp-btn-cta-white" onclick="window.location.href='${s.footerBtn1Url}'">${s.footerBtn1}</button>
        <button class="lp-btn lp-btn-cta-ghost" onclick="window.location.href='${s.footerBtn2Url}'">${s.footerBtn2}</button>
      </div>
    </div>
  </div>
</section>
`;

const getBlock6 = (s) => `
<section class="lp-faq" id="lugarde-faq">
  <div class="lp-container">
    <div class="lp-faq__header">
      <h3 class="lp-faq__tag">${s.faqTag}</h3>
      <h2 class="lp-faq__title">${s.faqTitle}</h2>
    </div>
    <div class="lp-faq__list">
      ${s.faqs.map((faq, index) => `
      <details class="lp-faq__item" ${index === 0 ? 'open' : ''}>
        <summary class="lp-faq__question">
          ${faq.question}
          <span class="material-symbols-outlined lp-faq__icon">expand_more</span>
        </summary>
        <div class="lp-faq__answer">
          <p>${faq.answer}</p>
        </div>
      </details>
      `).join('')}
    </div>
  </div>
</section>
`;


createApp({
    setup() {
        let initialState = JSON.parse(JSON.stringify(defaultState));
        const savedStateStr = localStorage.getItem('lugardeBuilderState');
        if (savedStateStr) {
            try {
                const saved = JSON.parse(savedStateStr);
                initialState = { ...initialState, ...saved };
            } catch (e) {
                console.error("Could not load saved state", e);
            }
        }
        
        const state = reactive(initialState);

        // Keep local storage perfectly synced with the state
        watch(state, (newState) => {
            localStorage.setItem('lugardeBuilderState', JSON.stringify(newState));
        }, { deep: true });

        const activeTab = ref('hero');
        const showExport = ref(false);
        const exportTab = ref(1);
        const exportedBlocks = reactive({ block1: '', block3: '', block4: '', block5: '', block6: '' });

        const previewHtml = computed(() => {
            return "<style>" + getScaleCSS(state) + "</style>\\n" + getBlock3(state) + "\\n" + getBlock4(state) + "\\n" + getBlock5(state) + "\\n" + getBlock6(state);
        });

        const wrapBlock = (htmlString) => {
            return `<div class="lugarde-premier-page">\n${htmlString}\n</div>`;
        };

        const exportBlocks = async () => {
            // Fetch Block 1 Shared Styles completely so we can output it.
            let block1Str = "";
            try {
                // In the builder, template-styles.css holds our exact styling.
                const res = await fetch('template-styles.css');
                const css = await res.text();
                block1Str = `<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400&family=Space+Mono&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>

<!-- Magento scoped wrapper styles block -->
<style>
${css}

/* Dynamic User Overrides */
.lugarde-premier-page {
    --lp-font-headline: '${state.fontHeadline}', serif !important;
    --lp-font-body: '${state.fontBody}', sans-serif !important;
    --lp-font-mono: '${state.fontMono}', monospace !important;
    font-size: ${state.fontSize}px !important;
}

${getScaleCSS(state)}
</style>`;
            } catch (e) {
                block1Str = "<!-- Please copy the contents of block-1-shared-styles.html directly from original source -->";
            }

            exportedBlocks.block1 = block1Str;
            // Wrap the layout blocks so they independently pull in the scoped CSS
            exportedBlocks.block3 = wrapBlock(getBlock3(state));
            exportedBlocks.block4 = wrapBlock(getBlock4(state));
            exportedBlocks.block5 = wrapBlock(getBlock5(state));
            exportedBlocks.block6 = wrapBlock(getBlock6(state));

            showExport.value = true;
            exportTab.value = 1;
        };

        const copyActiveBlock = () => {
            const key = 'block' + exportTab.value;
            navigator.clipboard.writeText(exportedBlocks[key]);
            alert('Block Copied to Clipboard!');
        };

        const resetState = () => {
            if (confirm("Are you sure you want to reset all content and sizes back to their original defaults? This cannot be undone.")) {
                localStorage.removeItem('lugardeBuilderState');
                Object.assign(state, defaultState);
                location.reload();
            }
        };

        const addFaq = () => {
            state.faqs.push({ question: "New Question?", answer: "Provide an answer here." });
        };

        const removeFaq = (idx) => {
            state.faqs.splice(idx, 1);
        };

        return {
            state,
            activeTab,
            previewHtml,
            showExport,
            exportTab,
            exportedBlocks,
            exportBlocks,
            copyActiveBlock,
            resetState,
            addFaq,
            removeFaq
        }
    }
}).mount('#app');
