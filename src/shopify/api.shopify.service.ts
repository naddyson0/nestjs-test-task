import { HttpException, Injectable, Scope } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { AxiosHeaders, AxiosRequestConfig, AxiosResponse } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable({ scope: Scope.REQUEST })
export class ShopifyApiService {
  private readonly baseUrl: string;
  private readonly headers: AxiosHeaders;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    const shopifyStore = this.configService.get<string>('shopifyStore');
    const shopifyApiVersion =
      this.configService.get<string>('shopifyApiVersion');

    const shopifyApiPassword =
      this.configService.get<string>('shopifyApiPassword');

    this.baseUrl = `https://${shopifyStore}/admin/api/${shopifyApiVersion}`;

    this.headers = new AxiosHeaders();
    this.headers.set('Content-Type', 'application/json');
    this.headers.set('X-Shopify-Access-Token', shopifyApiPassword);
  }

  async get<T>(
    restUrl: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T, any>> {
    return firstValueFrom(
      this.httpService
        .get<T>(`${this.baseUrl}/${restUrl}`, {
          headers: this.headers,
          ...config,
        } as AxiosRequestConfig)
        .pipe(
          catchError((e) => {
            throw new HttpException(e.response.data, e.response.status);
          }),
        ),
    );
  }

  async post<T>(
    restUrl: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T, any>> {
    return firstValueFrom(
      this.httpService
        .post<T>(`${this.baseUrl}/${restUrl}`, data, {
          headers: this.headers,
          ...config,
        } as AxiosRequestConfig)
        .pipe(
          catchError((e) => {
            throw new HttpException(e.response.data, e.response.status);
          }),
        ),
    );
  }
}
