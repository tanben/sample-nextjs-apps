"use client";

import { useFlags, useLDClient } from "launchdarkly-react-client-sdk";
import { SimpleBox } from "./user-details";
import { usePathname } from "next/navigation";
import { updateContext } from "./actions";
import { createRandomUser } from "@/app/utils";

function UserCard({ flagKey, context, updateContext, pathname }) {
  const flags = useFlags();
  const flagValue = flags[flagKey];

  const ldClient = useLDClient();

  ldClient &&
    ldClient.on("change", function (settings) {
      // Call server action
      updateContext(pathname);
    });
  return (
    <SimpleBox flagKey={flagKey} context={context} flagValue={flagValue} />
  );
}

export function ClientCard(props) {
  const { clientConfig, updateContext } = props;
  const pathname = usePathname();
  return (
    <UserCard
      {...clientConfig}
      updateContext={updateContext}
      pathname={pathname}
    />
  );
}

export function GenerateContextButton({ context }) {
  const pathname = usePathname();
  const label = "Generate Context";
  return (
    <button
      type='submit'
      onClick={() => {
        const context = createRandomUser(pathname);

        // Call server action
        updateContext(pathname, context);
      }}
    >
      {label}
    </button>
  );
}
