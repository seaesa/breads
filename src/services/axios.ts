import { handleAxiosErorr } from '@/helpers/error';
import axios, { AxiosError } from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, CreateAxiosDefaults } from 'axios';

// config request to server
class Http<T extends CreateAxiosDefaults> {
	declare api: AxiosInstance;
	constructor({ baseURL, timeout = 1000 }: T) {
		this.api = axios.create({
			baseURL: baseURL,
			timeout: timeout,
		});
		this.handleRequestError();
		this.handleResponseError();
	}
	async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
		try {
			const response: AxiosResponse = await this.api.get(url, config);
			return response.data;
		} catch (error: unknown) {
			throw handleAxiosErorr(error as AxiosError);
		}
	}
	async post<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
		try {
			const response: AxiosResponse = await this.api.post(url, data, config);
			return response.data;
		} catch (error: any) {
			throw handleAxiosErorr(error as AxiosError);
		}
	}
	async put<T>(url: string, data: any, config: AxiosRequestConfig): Promise<T> {
		try {
			const response: AxiosResponse = await this.api.put(url, data, config);
			return response.data;
		} catch (error: any) {
			throw handleAxiosErorr(error as AxiosError);
		}
	}
	async patch<T>(url: string, config: AxiosRequestConfig): Promise<T> {
		try {
			const response: AxiosResponse = await this.api.get(url, config);
			return response.data;
		} catch (error: any) {
			throw handleAxiosErorr(error as AxiosError);
		}
	}
	handleRequestError() {
		const request = this.api.interceptors.request.use(
			(config) => {
				return config;
			},
			(error) => {
				return error;
			},
		);
		this.api.interceptors.response.eject(request);
	}
	handleResponseError() {
		const response = this.api.interceptors.response.use(
			(config) => {
				return config;
			},
			(error) => {
				return error;
			},
		);
		this.api.interceptors.response.eject(response);
	}
}

export const http = new Http({
	baseURL: import.meta.env.BREADS__API_SERVER,
});
