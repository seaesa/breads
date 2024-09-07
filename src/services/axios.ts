import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const api = axios.create({
	baseURL: import.meta.env.BASE_URL,
	timeout: 10000,
});

class Http {
	async get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
		const response: AxiosResponse = await api.get(url, config);
		return response.data;
	}
	async post(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
		const response: AxiosResponse = await api.post(url, data, config);
		return response.data;
	}
	async put(url: string, data: any, config: AxiosRequestConfig): Promise<AxiosResponse<any>> {
		const response: AxiosResponse = await api.put(url, data, config);
		return response.data;
	}
	async patch(url: string, config: AxiosRequestConfig): Promise<AxiosResponse<any>> {
		const response: AxiosResponse = await api.get(url, config);
		return response.data;
	}
}
export { Http as http };
