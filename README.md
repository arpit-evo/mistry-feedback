# Mistry Feedback

- basic setup project using this command

```bash
npx create-next-app@latest
```

- learn about [`resend`](https://resend.com/) mail service. for ref check file `sendVerificationEmail.ts`.
- Learn about `NextAuth.js` it is package about authentication and sign-in.

## [NextAuth package](https://next-auth.js.org/getting-started/introduction)

- For adding nextAuth in project we need to create folder like this `api/auth/[...nextauth]`
- Inside that create option for NextAuth file ref `options.ts` and `route.ts`.
- Learn how to modified packages type, file ref `next-auth.d.ts`.
- next auth run through middleware so in middleware import one statement and configure middleware.

```typescript
export { default } from "next-auth/middleware";
```
