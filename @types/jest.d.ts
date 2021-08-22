type CustomObject = {
  [key: any]: any;
};

declare global {
  namespace jest {
    // eslint-disable-next-line max-len
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions,@typescript-eslint/no-unused-vars
    interface Matchers<R> {
      toHaveStyle: (style: CustomObject) => void;
      toMatchDiffSnapshot: (style: CustomObject) => void;
      toBeDisabled: () => boolean;
    }
  }
}
