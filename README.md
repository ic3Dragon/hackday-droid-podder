# hackday-droid-podder
During the bootcamp at SALT we were given the challange to individually create a full stack application from scratch.
We got to choose our projects freely.
This app is what I built during that day.
It's an early-stage app for automating podcast creaton utilising external AI technologies to create audio and post summery based on user input.

## API resources
this app uses two external APIs for the conversions. You will need to create a developer account with both and save your keys into a local -env-file in the following format in order to access them. 

```
ONEAI_API_KEY="YOUR-KEY-HERE"
CLOUD_KEY="YOUR-KEY-HERE"
```

### links to external API's 
- [Lovo API](https://api.lovo.ai/)
- [Meaningcloud API](https://www.meaningcloud.com/)


## Set-up
To install dependencies and start the server run ``cd client && npm i && cd ../server && npm i && npm start``.

Start the client in a separate terminal using ``cd client && npm start``

ENJOY! 
