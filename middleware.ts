import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// Просто убираем проверку аутентификации
export default clerkMiddleware(async (auth, req) => {
  return NextResponse.next(); // Оставляем страницу без защиты
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
