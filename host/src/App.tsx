import { useModuleApps } from '@modern-js/plugin-garfish/runtime';

export default () => {
  const { MApp } = useModuleApps();

  return <MApp />;
};
