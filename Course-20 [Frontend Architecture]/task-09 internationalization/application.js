import resources from './locales/index.js';
import i18next from "i18next";
import onChange from "on-change";


export default async () => {
  const state = {
    languages: {
      Русский: 'ru',
      English: 'en',
    },
    activeLng: 'English',
    clickValue: 0,
  }
  await i18next.init({
    lng: state.languages[state.activeLng],
    resources,
  });

  const render = (stat) => {
    const btnGroup = document.createElement('div');
    const clickBtn = document.createElement('button');
    const resetBtn = document.createElement('button');
    const container = document.querySelector('.container');
    const newContainer = document.createElement('div');

    newContainer.setAttribute('class', 'container card w-25 p-3 m-3');
    btnGroup.setAttribute('class', 'btn-group');
    btnGroup.setAttribute('role', 'group');
    const languages = Object.entries(state.languages);
    languages.forEach(([language]) => {
      const langBtn = document.createElement('button');
      langBtn.setAttribute('type', 'button');
      if (language === stat.activeLng) {
        langBtn.setAttribute('class', 'btn btn-primary');
      } else {
        langBtn.setAttribute('class', 'btn btn-outline-primary');
      }
      langBtn.textContent = language;
      btnGroup.append(langBtn);
    });

    clickBtn.setAttribute('type', 'button');
    clickBtn.setAttribute('class', 'btn btn-info');
    clickBtn.textContent = i18next.t('clickButton.key', {
      count: stat.clickValue,
    });
    resetBtn.setAttribute('type', 'button');
    resetBtn.setAttribute('class', 'btn btn-warning');
    resetBtn.textContent = i18next.t('resetButton');
    newContainer.appendChild(btnGroup);
    newContainer.appendChild(clickBtn);
    newContainer.appendChild(resetBtn);
    container.replaceWith(newContainer);

    const langButtons = document.querySelectorAll('.btn-group .btn');
    const watchedState = onChange(stat, (path, value) => {
      if (path === 'clickValue') {
        const clickButton2 = document.querySelector('.btn-info');
        clickButton2.textContent = i18next.t('clickButton.key', { count: value });
      }
      if (path === 'activeLng') {
        i18next.changeLanguage(watchedState.languages[value]);
        clickBtn.textContent = i18next.t('clickButton.key', {
          count: watchedState.clickValue,
        });
        resetBtn.textContent = i18next.t('resetButton');
        watchedState.activeLng = value;
        render(watchedState);
      }
    });

    clickBtn.addEventListener('click', () => {
      watchedState.clickValue += 1;
    });

    resetBtn.addEventListener('click', () => {
      watchedState.clickValue = 0;
    });

    langButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        watchedState.activeLng = e.target.textContent;
      });
    });
  };
  render(state);
}
