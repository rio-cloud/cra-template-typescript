/* eslint-disable no-console */
export const trace =
    process.env.NODE_ENV !== 'production' ? (...args: any) => console.log('[src/index]', ...args) : () => {};
