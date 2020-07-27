import * as jwt from "jsonwebtoken";

const { JWT_SECRET } = process.env;

export function sign(data: Object): string {
  return jwt.sign(data, JWT_SECRET);
}

export function verify<T extends Object>(token: string): T {
  try {
    return jwt.verify(token, JWT_SECRET) as T;
  } catch (e) {
    return null;
  }
}
