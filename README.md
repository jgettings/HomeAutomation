# HomeAutomation
My home automation thingies. I'm choosing to make my own "hub" type thing so that I can customize
more than something off-the-shelf and so that it does not become obsolete.

## Running locally

```npm run start```

## Starting the app

```pm2 start app.js --interpreter ./node_modules/.bin/babel-node```

## Reloading on the server

```pm2 reload all```

# Endpoints and Triggers

| Path     | Trigger                                                                                                           | Actions             |
| -------- | ----------------------------------------------------------------------------------------------------------------- | ------------------- |
| /prewake | Sleep as android, 45 mins before smart wake: Tasker Intent com.urbandroid.sleep.alarmclock.AUTO_START_SLEEP_TRACK | Start sunrise light |
| /wake    | Sleep as android, alarm dismissed: Tasker Intent com.urbandroid.sleep.alarmclock.ALARM_ALERT_DISMISS              | Turn on main lights |


# Technical TODO List

1. Swagger
1. Make it run when the server reboots
