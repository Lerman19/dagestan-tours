import './styles.css';

const chatLinks = {
  whatsapp: 'https://wa.me/70000000000',
  telegram: 'https://t.me/dagestan_tours',
  max: 'https://max.ru/dagestan_tours',
};

const tours = [
  {
    title: 'Однодневные',
    text: 'Яркий выезд к главным видам Дагестана без ночевки.',
    meta: '1 день',
  },
  {
    title: 'Многодневные',
    text: 'Горы, аулы, каньоны и спокойный темп с продуманным маршрутом.',
    meta: '2-7 дней',
  },
  {
    title: 'Индивидуальные',
    text: 'Маршрут под вашу компанию, даты, ритм и пожелания.',
    meta: 'по запросу',
  },
  {
    title: 'Групповые',
    text: 'Готовые поездки для тех, кто хочет ехать в компании.',
    meta: 'мини-группы',
  },
];

const features = [
  'Экскурсии по горным аулам',
  'Трансфер и встреча гостей',
  'Маршруты для первого знакомства',
  'Помощь с программой поездки',
];

const icons = {
  whatsapp: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.59 2 2.16 6.43 2.16 11.88c0 1.74.46 3.44 1.33 4.94L2.08 22l5.31-1.39a9.9 9.9 0 0 0 4.65 1.18h.01c5.45 0 9.88-4.43 9.88-9.88a9.8 9.8 0 0 0-2.88-7Zm-7.01 15.22h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.15.83.84-3.07-.2-.32a8.18 8.18 0 1 1 7.01 3.89Zm4.48-6.13c-.25-.12-1.45-.72-1.67-.8-.22-.08-.38-.12-.54.12-.16.25-.62.8-.76.96-.14.16-.28.18-.52.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.28.37-.42.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.54-.42l-.46-.01c-.16 0-.43.06-.65.31-.22.25-.85.83-.85 2.02s.87 2.34.99 2.5c.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.29Z"/>
    </svg>`,
  telegram: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21.73 3.28a1.1 1.1 0 0 0-1.13-.18L2.86 9.96c-.79.31-.77 1.42.03 1.7l4.55 1.58 1.77 5.64c.25.8 1.28.99 1.8.34l2.55-3.21 4.79 3.54c.66.49 1.61.12 1.75-.68l2.16-14.55c.07-.42-.14-.82-.53-1.04ZM18.4 6.49l-8.2 7.3-.32 3.14-1.09-3.48 9.61-6.96Z"/>
    </svg>`,
  max: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.25 5.25h3.04l4.72 7.2 4.71-7.2h3.03v13.5h-3.01V10.6l-3.8 5.78h-1.88l-3.8-5.78v8.15H4.25V5.25Z"/>
    </svg>`,
};

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Туры по Дагестану">
      <span class="brand-mark">D</span>
      <span>
        <strong>Дагестан</strong>
        <small>туры и экскурсии</small>
      </span>
    </a>

    <nav class="nav-links" aria-label="Основная навигация">
      <a href="#routes">Маршруты</a>
      <a href="#formats">Форматы</a>
      <a href="#contacts">Контакты</a>
    </nav>

    <div class="chat-links" aria-label="Чаты">
      <a class="chat-link whatsapp" href="${chatLinks.whatsapp}" aria-label="Написать в WhatsApp" target="_blank" rel="noreferrer">
        ${icons.whatsapp}
      </a>
      <a class="chat-link telegram" href="${chatLinks.telegram}" aria-label="Написать в Telegram" target="_blank" rel="noreferrer">
        ${icons.telegram}
      </a>
      <a class="chat-link max" href="${chatLinks.max}" aria-label="Написать в MAX" target="_blank" rel="noreferrer">
        ${icons.max}
      </a>
    </div>
  </header>

  <main id="top">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-shade"></div>
      <div class="hero-content">
        <p class="eyebrow">Горы, аулы, каньоны и живые маршруты</p>
        <h1 id="hero-title">Туры по Дагестану</h1>
        <p class="hero-text">
          Однодневные и многодневные экскурсии, индивидуальные поездки, групповые туры и трансфер для гостей республики.
        </p>
        <div class="hero-actions">
          <a class="primary-action" href="${chatLinks.whatsapp}" target="_blank" rel="noreferrer">Написать в WhatsApp</a>
          <a class="secondary-action" href="#formats">Смотреть форматы</a>
        </div>
      </div>
      <div class="hero-note" aria-label="Доступные форматы">
        <span>Однодневные</span>
        <span>Многодневные</span>
        <span>Индивидуальные</span>
        <span>Групповые</span>
      </div>
    </section>

    <section class="intro" id="routes">
      <div class="section-copy">
        <p class="eyebrow">Куда едем</p>
        <h2>Маршрут можно собрать под первый визит или полноценное путешествие</h2>
      </div>
      <div class="feature-grid">
        ${features.map((feature) => `<div class="feature-item">${feature}</div>`).join('')}
      </div>
    </section>

    <section class="formats" id="formats">
      <div class="section-copy">
        <p class="eyebrow">Форматы</p>
        <h2>Выберите темп поездки, детали уточним в чате</h2>
      </div>
      <div class="tour-grid">
        ${tours.map((tour) => `
          <article class="tour-card">
            <span>${tour.meta}</span>
            <h3>${tour.title}</h3>
            <p>${tour.text}</p>
          </article>
        `).join('')}
      </div>
    </section>

    <section class="contact-band" id="contacts">
      <div>
        <p class="eyebrow">Связаться</p>
        <h2>Напишите, сколько вас человек и на какие даты планируете поездку</h2>
      </div>
      <div class="contact-actions">
        <a class="chat-pill whatsapp" href="${chatLinks.whatsapp}" target="_blank" rel="noreferrer">${icons.whatsapp}<span>WhatsApp</span></a>
        <a class="chat-pill telegram" href="${chatLinks.telegram}" target="_blank" rel="noreferrer">${icons.telegram}<span>Telegram</span></a>
        <a class="chat-pill max" href="${chatLinks.max}" target="_blank" rel="noreferrer">${icons.max}<span>MAX</span></a>
      </div>
    </section>
  </main>
`;
