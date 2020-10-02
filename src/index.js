const httpGet = ({ url, headers = {} }) =>
	fetch(url, {
		method: 'GET',
		headers,
	}).then((response) => response.json());

const httpPost = ({ url, headers = {}, body = {} }) =>
	fetch(url, {
		method: 'POST',
		headers,
		body: JSON.stringify(body),
	}).then((response) => response.json());

const httpPut = ({ url, headers = {}, body = {} }) =>
	fetch(url, {
		method: 'PUT',
		headers,
		body: JSON.stringify(body),
	}).then((response) => response.json());

const httpDelete = ({ url, headers = {} }) =>
	fetch(url, {
		method: 'DELETE',
		headers,
	}).then((response) => response.json());

export {
	httpGet as get,
	httpPost as post,
	httpPut as put,
	httpDelete as delete,
};
