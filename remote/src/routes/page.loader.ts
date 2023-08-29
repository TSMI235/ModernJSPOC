const loader = async (): Promise<any> => {
  console.log('LOADER');
  return {
    message: 'hello world',
  };
};
export default loader;
