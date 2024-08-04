import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { login } from "../services/authService";
// import { createGuest, getGuest } from "./data-service";

const authConfig = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const userCredentials = {
          user_email: credentials.email,
          user_password: credentials.password,
        };
        const user = await login(userCredentials);

        const userData = {
          name: "User",
          email: user, //proveding user data through email because we cannot send other data by here into the session
        };

        if (user.status === 200) {
          return userData;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      if (auth?.user) {
        return true;
      } else {
        return false;
      }
    },

    async session({ session, user }) {
      return { user: session.user.email }; //get data send by authorize thorough email and save or send it in session
    },
  },

  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
