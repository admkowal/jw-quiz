export const NAV_URLS = {
  ADMIN_PANEL: '/admin',
  SESSSION_ADMIN: '/admin/session'
};

export const getAdminSessionUrl = id => `${NAV_URLS.SESSSION_ADMIN}${id}`;