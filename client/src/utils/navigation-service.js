export const NAV_URLS = {
  HOME: '/',
  SESSION: '/session',
  QUESTION: '/question'
};

export const getSessionUrl = id => `${NAV_URLS.SESSION}/${id}`;