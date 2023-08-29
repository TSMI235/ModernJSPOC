import { appTools, defineConfig } from '@modern-js/app-tools';
import { garfishPlugin } from '@modern-js/plugin-garfish';

export default defineConfig({
  dev: {
    port: 8081,
  },
  server: {
    ssr: false,
  },
  runtime: {
    router: true,
    state: true,
  },
  deploy: {
    microFrontend: {
      enableHtmlEntry: true,
    },
  },
  plugins: [appTools(), garfishPlugin()],
});
