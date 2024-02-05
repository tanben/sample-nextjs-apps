"use server";

import { revalidatePath } from "next/cache";

export async function updateContext(pathname = "", context) {
  const hasContext = context && Object.keys(context).length > 0;
  const name = hasContext ? context.user.name : "";

  if (hasContext) {
    // WARNING: Example only don't do this in production
    globalThis.g_userContext = context;
  }

  revalidatePath("/");
}
