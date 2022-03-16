import { I18n } from '~modules/localization';

import AppError from '../AppError';
import RuntimeError from '../RuntimeError';

export const parseError = (error: any): AppError => {
  // We don't want to parse our own error types
  if (error instanceof AppError) return error;

  const code = typeof error === 'object' && error.code ? error.code : 'UnknownException';
  const i18nKey = `${code[0].toLowerCase()}${code.slice(1)}`;

  return RuntimeError.fromOriginal(error, code, I18n.t(i18nKey, { defaultValue: I18n.t('errors.unknownException') }));
};
