type CallbackFn<T, P> = (data: T, cb: (callback: P) => void) => void;

/**
 * Register a callback for a NUI event.
 * @param event
 * @param callback
 */
export const RegisterNuiCB = <T = any, P = any>(event: string, callback: CallbackFn<T, P>) => {
  RegisterNuiCallbackType(event);
  on(`__cfx_nui:${event}`, callback);
};
