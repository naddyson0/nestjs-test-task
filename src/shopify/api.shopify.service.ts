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

    const shopifyAdminApiAccessToken =
      this.configService.get<string>('shopifyAdminApiAccessToken');

    this.baseUrl = `https://${shopifyStore}/admin/api/${shopifyApiVersion}`;

    this.headers = new AxiosHeaders();
    this.headers.set('Content-Type', 'application/json');
    this.headers.set('X-Shopify-Access-Token', shopifyAdminApiAccessToken);
  }

  async get<T>(
    restUrl: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T, any>> {
    return firstValueFrom(
      this.httpService.get<T>(`${this.baseUrl}/${restUrl}`, {
        headers: this.headers,
        ...config,
      } as AxiosRequestConfig),
    );
  }

  async post<T>(
    restUrl: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T, any>> {
    return firstValueFrom(
      this.httpService.post<T>(`${this.baseUrl}/${restUrl}`, data, {
        headers: this.headers,
        ...config,
      } as AxiosRequestConfig),
    );
  }
}
