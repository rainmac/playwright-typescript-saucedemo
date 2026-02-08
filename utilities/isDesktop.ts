import { Page } from "@playwright/test";

export const isDesktop = (page: Page) => {
        const viewPort = page.viewportSize()
        if (viewPort && viewPort.width >= 600) {
            return true
        }

        return false
    }