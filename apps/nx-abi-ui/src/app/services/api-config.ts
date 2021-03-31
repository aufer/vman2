import { InjectionToken } from '@angular/core';

export const API_CONFIG = new InjectionToken<ApiConfig>('api-config');

export interface ApiConfig {
  base: string;
}
