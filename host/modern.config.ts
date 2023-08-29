import { appTools, defineConfig } from '@modern-js/app-tools';
import { garfishPlugin } from '@modern-js/plugin-garfish';

export default defineConfig({
  runtime: {
    router: false,
    state: true,
    masterApp: {
      apps: [
        {
          name: 'remote',
          entry: 'http://127.0.0.1:8081/',
          activeWhen: '/remote',
        },
      ],
    },
  },
  server: {
    ssr: true,
  },
  plugins: [appTools(), garfishPlugin()],
});
