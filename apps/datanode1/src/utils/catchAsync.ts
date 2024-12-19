/* eslint-disable @typescript-eslint/no-explicit-any */
const catchAsync = (fn: any) => (req: any, res: any, next: any) => {
  Promise.resolve(fn(req, res, next)).catch((err) => next(err));
};

export default catchAsync;
