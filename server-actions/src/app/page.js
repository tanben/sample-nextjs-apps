import { createRandomUser } from "@/app/utils";
import { ClientCard, GenerateContextButton } from "@/app/client-component";
import { updateContext } from "@/app/actions";
import { SimpleBox } from "@/app/user-details";
import { LDCustomProvider } from "@/app/ld-custprovider";
import { Suspense } from "react";
import LDSDK from "@/app/ldServer";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";

const flagKey = process.env.FLAG_KEY;

// WARNING!!!  Example only don't do this in production
globalThis.g_userContext = createRandomUser();

export default async function Home() {
  var context = g_userContext;
  const clientConfig = {
    flagKey,
    context,
  };

  const providerConfig = {
    clientSideID: process.env.CLIENT_SIDE_ID,
    context,
    options: {},
    reactOptions: {
      useCamelCaseFlagKeys: false,
    },
  };

  const flagValue = await LDSDK.getVariation(flagKey, context, false);
  return (
    <main>
      <h1>Context</h1>
      <TextField
        inputProps={{ style: { fontSize: 11, font: "0.9rem monospace" } }}
        id='contextField'
        margin='dense'
        fullWidth
        multiline
        value={JSON.stringify(context, null, 4)}
      />
      <Grid container spacing={2}>
        <Grid>
          <GenerateContextButton context={context} />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid xs>
          <span>Client Side Rendered</span>
          <Suspense fallback={<h2>Loading...</h2>}>
            <LDCustomProvider providerConfig={providerConfig}>
              <ClientCard
                clientConfig={clientConfig}
                providerConfig={providerConfig}
                updateContext={updateContext}
              />
            </LDCustomProvider>
          </Suspense>
        </Grid>
        <Grid xs>
          <span>Server Side Rendered</span>
          <SimpleBox
            context={context}
            flagKey={flagKey}
            flagValue={flagValue}
          />
        </Grid>
      </Grid>
    </main>
  );
}
