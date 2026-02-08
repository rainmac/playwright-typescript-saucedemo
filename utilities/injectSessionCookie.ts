import { BrowserContext } from "@playwright/test";

export const insertSessionCookie = async (context:BrowserContext) => {
        await context.addCookies([{ 
            name: 'session-username', 
            value: 'standard_user', 
            url: 'https://www.saucedemo.com',
            secure: true,
            sameSite: 'None' as const
        }]);
    }