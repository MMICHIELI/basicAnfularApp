import { environment } from 'src/environments/environment';

export interface IAppConfig {
  _apiBaseURL: string;
  _retryCount: number;
}

export class AppConfig implements IAppConfig {
  static readonly apiBaseURL: string = environment.apiBaseUrl;
  static readonly retryCount: number = environment.retryCount;
  // tslint:disable-next-line:variable-name
  _apiBaseURL = environment.apiBaseUrl;
  // tslint:disable-next-line:variable-name
  _retryCount = environment.retryCount;
}
