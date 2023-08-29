import './index.css';
import { useLoaderData } from '@modern-js/runtime/router';

const Index = () => {
  const data = useLoaderData() as any;
  return (
    <div className="container-box">
      <p>Remote sub module {data.message}</p>
    </div>
  );
};

export default Index;
