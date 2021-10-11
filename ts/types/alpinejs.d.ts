declare module "alpinejs" {
  const Alpine: {
    start: () => void;
    data: (componentName: string, callback: (params: any) => object) => void;
  };
  export default Alpine;
}
