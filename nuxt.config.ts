// https://nuxt.com/docs/api/configuration/nuxt-config
import type {SessionConfig} from "h3";

const postmanMockServer = {

}

const cookieSessionConfig: Partial<SessionConfig> = {
  name: 'dialist-session',
  password: '',
  cookie: {
    domain: 'localhost',
    path: '/',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
    httpOnly: true,
    secure: false,
  },
}


/**     BASE RUNTIME CONFIGS        **/
const baseRuntimeConfig = {
  redis: {
    host: 'localhost',
    port: 6379,
  },
  nitro: {
    devStorage: {
      cache: {
        driver: 'redis',
        host: 'localhost',
        port: 6379,
      },
    },
  },
  /** Plaid / Finance **/
  plaid: {
    clientId: '',
    secret: '',
    env: '',
    templateId: '',
    linkName: '',
    webhookUrl: ''
  },
  finix: {
    username: '',
    password: '',
    applicationId: ''
  },
  /** cloudflare - images **/
  cloudflare: {
    accountId: '',
    apiToken: {
      images: ''
    },
  },
  /** AUTH / WORKOS **/
  oauth: {
    workos: {
      clientId: process.env.NUXT_OAUTH_WORKOS_CLIENT_ID,
      clientSecret: process.env.NUXT_OAUTH_WORKOS_CLIENT_SECRET,
      redirectUrl: process.env.NUXT_OAUTH_WORKOS_REDIRECT_URL,
      ipAllowlist: process.env.NUXT_OAUTH_WORKOS_IP_ALLOWLIST,
      actionsSignature: process.env.NUXT_OAUTH_WORKOS_ACTIONS_SIGNATURE,
      hookSignature: '',
    }
  },
  organizations: {
    dialist: {orgId: process.env.NUXT_ADMIN_DIALIST_ORG_ID,}
  },
  webhooks: {
    stripeWebhookSecret: process.env.NUXT_STRIPE_WEBHOOK_SECRET,
    stripeWebhookLocalSecret: process.env.NUXT_STRIPE_WEBHOOK_LOCAL_SECRET,
  },
  stripeServer: {
    secretKey: process.env.NUXT_STRIPE_SECRET_KEY,
  },
  /** FINGERPRINT.JS **/
  fingerprint: { encryptionKey: process.env.NUXT_FINGERPRINT_ENCRYPTION_KEY },
}
/**         DEV RUNTIME             **/
const developmentRuntime = {
  ...baseRuntimeConfig,
  session: cookieSessionConfig,
  mongoUri: '',
  mongoDbName: '',
  public: {
    baseUrl: ''
  }
}

/**         TEST RUNTIME             **/
const testingRuntime = {
  ...baseRuntimeConfig,
  session: {
    name: 'nuxt-session',
    password: process.env.NUXT_SESSION_PASSWORD || '',
    cookie: {
      sameSite: 'lax',
      domain: process.env.NUXT_TEST_DOMAIN,
    },
  },
}

/**         PRODUCTION RUNTIME             **/
const productionRuntime = {

}

export const getRuntimeConfig = () => {
  switch(process.env.NUXT_NODE_ENV) {
    case 'development':
      console.log("✔ Development Runtime Selected\n")
      return developmentRuntime
    case 'production':
      console.log("✔ Production Runtime Selected\n")
      return productionRuntime
    case 'test':
      console.log("✔ Test Runtime Selected\n")
      return testingRuntime
    default:
      console.log("✔ Default Runtime Selected\n")
      return developmentRuntime
  }
}

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  devtools: {
    enabled: true, timeline: {enabled: true,},
  },
  vite: {
    server: {
      allowedHosts: ['dialist.ngrok.dev', 'dev.dialist.com']
    }
  },
  imports: {
    autoImport: true,
  },
  app: {
    head: {
      script: [{src: 'https://cdn.plaid.com/link/v2/stable/link-initialize.js', defer: true}]
    }
  },

  runtimeConfig: {
    ...getRuntimeConfig(),
  },
  modules: [
    '@nuxtjs/seo',
    '@hypernym/nuxt-anime',
    '@primevue/nuxt-module',
    'nuxt-keen-slider',
    '@vueuse/motion/nuxt',
    '@nuxt/eslint',
    '@nuxt/content',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxt/image',
    'nuxt-lodash',
    '@nuxt/icon',
    '@unlok-co/nuxt-stripe',
    'nuxt-authorization',
      'shadcn-nuxt'
  ],
  authorization: {},
  css: ["@/assets/styles/tailwind.css", "@/assets/styles/base.css", "primeicons/primeicons.css"],
  primevue: {
    //autoImport:false,
    options: {
      theme: {
        preset: "none",
        options: {
          darkModeSelector: ".p-dark",
          cssLayer: true,
        },
      },
    },
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: 'Ui',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: 'app/components/ui'
  },

  postcss: {
    plugins: {
      "postcss-import": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  routeRules: {
    '/dashboard/**':{ssr:false},
    '/auth/**':{ssr:false},

  },
  // https://images.dialist.com/images/91d394cd-519c-469d-91f0-1a4748fdf200/w=300,h=300
  compatibilityDate: "2025-02-26",
})


/*
* MODULES from request-indexing... https://github.com/harlan-zw/request-indexing/blob/main/nuxt.config.ts
*
*
* Why seed main tokens?:
* (_, nuxt) => {
      // seed the main tokens if there isn't a pool available
      if (tokens.length === 0) {
        tokens = [{
          label: 'primary',
          client_id: env.NUXT_OAUTH_GOOGLE_CLIENT_ID!,
          client_secret: env.NUXT_OAUTH_GOOGLE_CLIENT_SECRET!,
        }]
      }
      nuxt.options.nitro!.virtual = nuxt.options.nitro!.virtual || {}
      nuxt.options.nitro.virtual['#app/token-pool.mjs']
        = [
          `export const tokens = ${JSON.stringify(tokens.map((t) => {
            t.id = t.id || hash(t)
            return t
          }))}`,
          `export const privateTokens = ${JSON.stringify(privateTokens.map((t) => {
            t.id = t.id || hash(t)
            return t
          }))}`,
        ].join('\n')
    },
  ],
*
* */



/* OLD PRIMEVUE CONFIG. Possibly we will use?

const Noir = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{zinc.50}',
            100: '{zinc.100}',
            200: '{zinc.200}',
            300: '{zinc.300}',
            400: '{zinc.400}',
            500: '{zinc.500}',
            600: '{zinc.600}',
            700: '{zinc.700}',
            800: '{zinc.800}',
            900: '{zinc.900}',
            950: '{zinc.950}'
        },
        colorScheme: {
            light: {
                primary: {
                    color: '{zinc.950}',
                    inverseColor: '#ffffff',
                    hoverColor: '{zinc.900}',
                    activeColor: '{zinc.800}'
                },
                highlight: {
                    background: '{zinc.950}',
                    focusBackground: '{zinc.700}',
                    color: '#ffffff',
                    focusColor: '#ffffff'
                }
            },
            dark: {
                primary: {
                    color: '{zinc.50}',
                    inverseColor: '{zinc.950}',
                    hoverColor: '{zinc.100}',
                    activeColor: '{zinc.200}'
                },
                highlight: {
                    background: 'rgba(250, 250, 250, .16)',
                    focusBackground: 'rgba(250, 250, 250, .24)',
                    color: 'rgba(255,255,255,.87)',
                    focusColor: 'rgba(255,255,255,.87)'
                }
            }
        }
    }
});
*
* */