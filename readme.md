# BitPrice
Build with NextJs. Contains template for NextJS. It shows realtime bitcoin equivalent of USD, EUR, GBP.

### Code
This code used to render the HTML symbols inside JSX.

```JSX
<span className="badge badge-primary" title={code} dangerouslySetInnerHTML={{ __html:symbol }} />
```

### API

[Coin Desk](https://api.coindesk.com/v1/bpi/currentprice.json) API is used for fetching bitcoin equivalent.

### Sample screen

<img width="50%" src="https://raw.githubusercontent.com/hariprasath2603/NextJs/master/photos/screenshot_home.png" alt="Screen shoot"></img>