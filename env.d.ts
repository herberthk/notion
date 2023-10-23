declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CONVEX_DEPLOYMENT: string;
      NEXT_PUBLIC_CONVEX_URL: string;
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: string;
      CLERK_SECRET_KEY: string;
      NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: string;
      NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: string;
      CLERK_AUTH_DOMAIN_URL: string;
      EDGE_STORE_ACCESS_KEY: string;
      EDGE_STORE_SECRET_KEY: string;
    }
  }
}

export {}
