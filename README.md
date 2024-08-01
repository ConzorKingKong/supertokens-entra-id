# Supertokens Microsoft Entra ID

This project displays how to integrate Microsoft Entra ID as an IdP in Supertokens.

A `.env` file is required inside of the `backend` folder with the following values:

```
CLIENT_ID=<CLIENT_ID>
CLIENT_SECRET_VALUE=<CLIENT_SECRET_VALUE>
TENANT_ID=<TENANT_ID>
```

This project creates the callback uri at `http://localhost:3001/auth/callback/entra`

Run the project with `npm run start` in the root folder