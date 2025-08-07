export default ({ env }) => {
  const adminJwtSecret = env('ADMIN_JWT_SECRET');
  const apiTokenSalt = env('API_TOKEN_SALT');
  const transferTokenSalt = env('TRANSFER_TOKEN_SALT');
  const encryptionKey = env('ENCRYPTION_KEY');
  const flagNps = env.bool('FLAG_NPS', true);
  const flagPromoteEE = env.bool('FLAG_PROMOTE_EE', true);

  // ✅ Logging values for debugging
  console.log('✅ Loaded Secrets:');
  console.log('API_TOKEN_SALT:', apiTokenSalt);
  console.log('ADMIN_JWT_SECRET:', adminJwtSecret);
  console.log('TRANSFER_TOKEN_SALT:', transferTokenSalt);
  console.log('ENCRYPTION_KEY:', encryptionKey);

  return {
    auth: {
      secret: adminJwtSecret,
    },
    apiToken: {
      salt: apiTokenSalt,
    },
    transfer: {
      token: {
        salt: transferTokenSalt,
      },
    },
    secrets: {
      encryptionKey: encryptionKey,
    },
    flags: {
      nps: flagNps,
      promoteEE: flagPromoteEE,
    },
  };
};
