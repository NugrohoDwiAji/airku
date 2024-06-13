import argon2 from "argon2";
import bcrypt from "bcrypt"
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/custome-script/prisma";

type Credential = {
  email: string;
  password: string;
};

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {},
      // @ts-ignore
      async authorize(credentials: Credential) {
        try {
          const { email, password } = credentials;
          const user = await prisma.user.findUnique({
            where: {
              email,
            },
          });

          if (!user) {
            console.error("user tidak ada");
            return null;
          }

          
          const isPasswordMatched = await bcrypt.compare(
            password,
            user.password
          );

          if (!isPasswordMatched) {
            console.error("pass tidak cocok");
            return null;
          }
          const {username} = user;
          return user;
        } catch (error) {
          console.error("Error during authentication:", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  // callbacks: {
  //   jwt: async ({ token, user }) => {
  //     // Menyertakan atribut tambahan dalam token JWT
  //     if (user) {
  //       token.id = user.id;
  //       token.email = user.email;
  //       token.username = user.username;
  //     }
  //     return token;
  //   },
  // },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/loginPage",
  },
});
