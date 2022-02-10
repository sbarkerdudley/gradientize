# Gradientize
  A visual-first browser for new music, using the Spotify API


![JavaScript](https://img.shields.io/badge/JavaScript%20-%23323330.svg?&style=flat-square&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/React%20-%2320232a.svg?&style=flat-square&logo=react&logoColor=%2361DAFB)
![HTML](https://img.shields.io/badge/HTML5%20-%23E34F26.svg?&style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3%20-%231572B6.svg?&style=flat-square&logo=css3&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white)

![Node](https://img.shields.io/badge/Node.js%20-%2343853D.svg?&style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express%20-%23404d59.svg?&style=flat-square)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=flat-square&logo=mongodb&logoColor=white)
![Babel](https://img.shields.io/badge/Babel-F9DC3E?style=flat-square&logo=babel&logoColor=white)
![webpack](https://img.shields.io/badge/webpack%20-%238DD6F9.svg?&style=flat-square&logo=webpack&logoColor=black)



### Spotify API Response Status Codes

| STATUS | CODE |	DESCRIPTION      |
| :----- | :--- |	:--------------- |
| 200 |	OK | The request has succeeded. The client can read the result of the request in the body and the headers of the response. |
| 201 |	Created | The request has been fulfilled and resulted in a new resource being created. |
| 202 |	Accepted | The request has been accepted for processing, but the processing has not been completed. |
| 204 |	No Content | The request has succeeded but returns no message body. |
| 304 |	Not Modified. See Conditional requests. |
| 400 |	Bad Request | The request could not be understood by the server due to malformed syntax. The message body will contain more information; see Response Schema. |
| 401 |	Unauthorized | The request requires user authentication or, if the request included authorization credentials, authorization has been refused for those credentials. |
| 403 |	Forbidden | The server understood the request, but is refusing to fulfill it. |
| 404 |	Not Found | The requested resource could not be found. This error can be due to a temporary or permanent condition. |
| 429 |	Too Many Requests | Rate limiting has been applied.
| 500 |	Internal Server Error. You should never receive this error because our clever coders catch them all … but if you are unlucky enough to get one, please report it to us through a comment at the bottom of this page. |
| 502 |	Bad Gateway | The server was acting as a gateway or proxy and received an invalid response from the upstream server. |
| 503 |	Service Unavailable | The server is currently unable to handle the request due to a temporary condition which will be alleviated after some delay. You can choose to resend the request again. |




### React Assets

#### Components

I built the bulk of the UI in about 2 days with the immense help of [Mantine.dev](https://github.com/mantinedev). I found it extremely intuitive and fast to *compose* a polished-looking app quickly. The styling API is a bit more work to get the hang of, and I mostly found myself making on-the-fly inline CSS changes as needed. Overall, I highly recommend the component library.

#### Hooks

- `useColor` - uses [Fast Average Color](https://github.com/fast-average-color/fast-average-color) to sample the average color in *RGB* of incoming images (album covers, playlist images, artist profile photos, etc). The `getColorAsync` method returns a promise, and an object of various formats of the sampled *RGB* color. Sometimes the color can be muddy when there is no dominant color, or the average is influenced by contrasting colors. The `getHue` method converts the `[ R, G, B ]` { value } property returned by `getColorAsync` and parses it into an integer where `0 <= n <= 360`. This format can be concatenated into an `hsl(${int}, 100%, 50%)` string to be used as a color property in CSS.

[hsl()](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl()) and [hsla()](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsla())

| `abbr.` | for | type/value range | Description |
| :---: | :--- | :------------- | :------------------------------------------------- |
| `h` | hue | 0 <= `int` <= 360 | value representing the pure hue of the `hsl` color |
| `s` | saturation | `'0%'` <= `string` <= `'100%'` | 100% saturation reflects a pure hue |
| `l` | lightness |  `'0%'` <= `string` <= `'100%'` | 50% is the pure hue, *100%* is white, *0%* is black |
| (`a`) | alpha | 0 <= `float` <= `1` | optional opacity when using the `hsla()` constructor. 0 is transparent, 1 is opaque |
