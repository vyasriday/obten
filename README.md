# obten

A fetch based minimal HTTP client for JavaScript Applications running in the web browser.

## Usage

#### Install obten in your node application

```bash
  npm install --save obten
```

#### import obten

```javascript
import obten from 'obten';
```

##### obten uses a configuration object for any of it's methods. See below how to use it in your applications.

1. Making a `GET` request:

```javascript
obten
	.httpGet({
		url: '',
	})
	.then((data) => console.log(data));
```

note: `url` is a required parameter.

2. Making a `POST` request

```javascript
obten
	.httpPost({
		url: '',
		body: {},
	})
	.then((data) => console.log(data));
```

note: `url` and `body` are the required parameters.

3. Making a `PUT` request:

```javascript
obten
	.httpPut({
		url: '',
		body: {},
	})
	.then((data) => console.log(data));
```

note: `url` and `body` are the required parameters.

4. Making a `DELETE` request

```javascript
obten
	.httpDelete({
		url: '',
	})
	.then((data) => console.log(data));
```

note: `url` is a required parameter.

#### You can optionally pass a `headers` object with your headers in the standard format

```javascript
obten.method({
	headers: {
		'header-name': 'value',
	},
});
```

note: method can be any of the one mentioned above.

## LICENSE

[MIT](LICENSE)
