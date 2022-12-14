import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const { ENVIRONMENT, DOMAIN } = publicRuntimeConfig;
const isDev = ENVIRONMENT === 'development';

export type ResponseError = {
	message: string;
	data: any;
	index?: number;
	take?: number;
	pages?: number;
	updated_at: string;
	status: string;
	status_code: number;
};

const api = axios.create({
	baseURL: isDev ? 'http://localhost:8080' : `https://api.${DOMAIN}/`,
});

api.defaults.withCredentials = true;

export { api };
