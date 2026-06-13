/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_UMAMI_BASE_URL?: string;
  readonly VITE_UMAMI_SCRIPT_URL?: string;
  readonly VITE_UMAMI_WEBSITE_ID?: string;
  readonly VITE_UMAMI_API_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

