export const httpGet = ({ url, headers = {} }) =>
	fetch(url, {
		method: 'GET',
		headers,
	}).then((response) => response.json());

export const httpPost = ({ url, headers = {}, body = {} }) =>
	fetch(url, {
		method: 'POST',
		headers,
		body: JSON.stringify(body),
	}).then((response) => response.json());

export const httpPut = ({ url, headers = {}, body = {} }) =>
	fetch(url, {
		method: 'PUT',
		headers,
		body: JSON.stringify(body),
	}).then((response) => response.json());

export const httpDelete = ({ url, headers = {} }) =>
	fetch(url, {
		method: 'DELETE',
		headers,
	}).then((response) => response.json());

export default { httpGet, httpPost, httpPut, httpDelete };
