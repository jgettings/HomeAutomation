# HomeAutomation
My home automation thingies. I'm choosing to make my own "hub" type thing so that I can customize
more than something off-the-shelf and so that it does not become obsolete.

## Running locally

```npm run start```

## Starting the app

```pm2 start app.js --interpreter ./node_modules/.bin/babel-node```

## Reloading on the server

```pm2 reload all```


# Technical TODO List

1. Fix jenkins auto-run
2. Make it run when the server reboots
3. Consolidate the build into one js file? 
