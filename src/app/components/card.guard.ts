import { CanActivateFn } from '@angular/router';

export const cardGuard: CanActivateFn = (route, state) => {
  return true;
};
