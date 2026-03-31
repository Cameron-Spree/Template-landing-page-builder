const { createApp, reactive, computed } = Vue;

const defaultState = {
    // GLOBAL DESIGN
    fontHeadline: "Noto Serif",
    fontBody: "Helvetica Neue",
    fontMono: "Space Mono",
    fontSize: "16",

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

    // FOOTER CTA
    footerTag: "Ready for Construction",
    footerTitle: "Your project, <br/>our engineering.",
    footerDesc: "Download our comprehensive Technical Hub guide or schedule a technical briefing with our architectural lead.",
    footerBtn1: "Download Technical Guide",
    footerBtn1Url: "#",
    footerBtn2: "Speak to an Engineer",
    footerBtn2Url: "#",
};

// Global templates so we can use them in computed and export properties
const getBlock3 = (s) => `
<section class="lp-hero lp-blueprint-grid" id="lugarde-hero">
  <div class="lp-hero__grid">
    <div class="lp-hero__content">
        <div class="lp-hero__brand">
          <img src="https://www.lugarde.com/wp-content/uploads/2021/01/logo.png" alt="Lugarde Logo" class="lp-hero__lugarde-logo" onerror="this.src='https://www.lugarde.com/wp-content/themes/lugarde/images/logo.png'"/>
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
        <h3 class="lp-credentials__tag">Compliance &amp; Standards</h3>
        <h4 class="lp-credentials__title">Trade Credentials</h4>
      </div>
      <div class="lp-credentials__items">
        <div class="lp-credential">
          <span class="material-symbols-outlined">verified</span>
          <div>
            <span class="lp-credential__name">FSC &amp; PEFC</span>
            <span class="lp-credential__desc">Timber Chain of Custody</span>
          </div>
        </div>
        <div class="lp-credential">
          <span class="material-symbols-outlined">description</span>
          <div>
            <span class="lp-credential__name">ISO 9001:2015</span>
            <span class="lp-credential__desc">Quality Management System</span>
          </div>
        </div>
        <div class="lp-credential">
          <span class="material-symbols-outlined">architecture</span>
          <div>
            <span class="lp-credential__name">RIBA NBS</span>
            <span class="lp-credential__desc">BIM Objects Available</span>
          </div>
        </div>
        <div class="lp-credential">
          <span class="material-symbols-outlined">security</span>
          <div>
            <span class="lp-credential__name">LPS 1175</span>
            <span class="lp-credential__desc">Security Rated Options</span>
          </div>
        </div>
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


createApp({
    setup() {
        const state = reactive(defaultState);
        const activeTab = Vue.ref('hero');
        const showExport = Vue.ref(false);
        const exportTab = Vue.ref(1);
        const exportedBlocks = reactive({ block1: '', block3: '', block4: '', block5: '' });

        const previewHtml = computed(() => {
            return getBlock3(state) + "\\n" + getBlock4(state) + "\\n" + getBlock5(state);
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
</style>`;
            } catch (e) {
                block1Str = "<!-- Please copy the contents of block-1-shared-styles.html directly from original source -->";
            }

            exportedBlocks.block1 = block1Str;
            // Wrap the layout blocks so they independently pull in the scoped CSS
            exportedBlocks.block3 = wrapBlock(getBlock3(state));
            exportedBlocks.block4 = wrapBlock(getBlock4(state));
            exportedBlocks.block5 = wrapBlock(getBlock5(state));

            showExport.value = true;
            exportTab.value = 1;
        };

        const copyActiveBlock = () => {
            const key = 'block' + exportTab.value;
            navigator.clipboard.writeText(exportedBlocks[key]);
            alert('Block Copied to Clipboard!');
        };

        return {
            state,
            activeTab,
            previewHtml,
            showExport,
            exportTab,
            exportedBlocks,
            exportBlocks,
            copyActiveBlock
        }
    }
}).mount('#app');
