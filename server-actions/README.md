This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Prerequisite
* LaunchDarkly account
* NodeJS >= v18.2
* NextJS >= 14
  > Note: On Next.js v13.4 `experimental.serverActions` must be set to `true` in your *next.config.js*
## Getting Started
1. Copy the .env.template to .env file and update the following properties, read [SDK keys](https://docs.launchdarkly.com/sdk/concepts/client-side-server-side#keys) for details:
   
```
# Server-side SDK Key
LAUNCHDARKLY_SDK_KEY="sdk-xxxxxxx"

# Client-side SDK Key
CLIENT_SIDE_ID="XXXXXX"

# Use or create your own toggle/feature flag, and assign key here
FLAG_KEY="simple-toggle"

```


2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


##  Use cases
This page contains a text field, a client and server side rendered component.
- The client component uses LD client-side SDK and has streaming enabled.
- The server-side component uses a server-side SDK and rendered from the server. 

1. Flag configuration change. Toggle your flag on/off to change flag states.
   - LaunchDarkly sends a flag configuration change event to the client component.
   - Client component re-renders upon onChange event.
   - Client component will call server action to re-render server-side components.
  
2. New LaunchDarkly context is generated. To generate new context click "Generate Context" button.
   - This client component (button) calls server action and updates the LaunchDarkly context on the server with the new context and re-renders components.
