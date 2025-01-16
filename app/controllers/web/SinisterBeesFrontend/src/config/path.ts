import { lazy } from 'react';

export const paths = {
  home: {
    path: '/',
    getHref: () => '/',
    component: lazy(() => import('../pages/landingPage')),
  },
  // auth pages paths
  auth: {
    register: {
      path: '/auth/register',
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/register${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
      component: lazy(() => import('../pages/Register')),
    },
    login: {
      path: '/auth/login',
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/login${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
      component: lazy(() => import('../pages/Login')),
    },
    logout: {
      path: '/auth/logout',
      getHref: () => '/auth/logout',
      component: lazy(() => import('../pages/Logout')),
    },
    resetPassword: {
      path: '/auth/reset-password',
      getHref: () => '/auth/reset-password',
      component: lazy(() => import('../pages/ResetPassword')),
    },
    forgetPassword: {
      path: '/auth/forget-password',
      getHref: () => '/auth/forget-password',
      component: lazy(() => import('../pages/ForgetPassword')),
    },
  },

  app: {
    root: {
      path: '/app',
      getHref: () => '/app',
    },
    dashboard: {
      path: '/dashboard',
      getHref: () => '/app/dashboard',
      component: lazy(() => import('../app/dashboard/dashboard')),
    },
    discussions: {
      path: 'discussions',
      getHref: () => '/app/discussions',
    },
    discussion: {
      path: 'discussions/:discussionId',
      getHref: (id: string) => `/app/discussions/${id}`,
    },
    users: {
      path: 'users',
      getHref: () => '/app/users',
    },
    profile: {
      path: 'profile',
      getHref: () => '/app/profile',
    },
  },
} as const;
