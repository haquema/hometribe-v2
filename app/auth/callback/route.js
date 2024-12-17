import { createClient } from "@/utils/supabase/server";

const supabase = createClient();

async function handleSignInWithGoogle(response) {
  const { data, error } = await supabase.auth.signInWithIdToken({
    provider: 'google',
    token: response.credential,
    nonce: '<NONCE>',
  })
}

