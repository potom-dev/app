import GitHub from "@auth/core/providers/github";
import { convexAuth } from "@convex-dev/auth/server";

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [
    GitHub({
      profile(githubProfile, tokens) {
        return {
          id: githubProfile.id.toString(),
          name: githubProfile.name,
          email: githubProfile.email,
          image: githubProfile.avatar_url as string,
          githubId: githubProfile.id.toString(),
        };
      },
    }),
  ],
  callbacks: {
    async redirect({ redirectTo }) {
      if (
        !redirectTo.startsWith("exp://") &&
        !redirectTo.startsWith("http://localhost")
      ) {
        throw new Error(`Invalid redirectTo URI ${redirectTo}`);
      }
      return redirectTo;
    },
  },
});