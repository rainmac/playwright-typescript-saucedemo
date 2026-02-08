import { Locator, Page, expect } from "@playwright/test";

export class CheckoutCompletePage {

    private page: Page
    private confirmationHeader: Locator
    private backHomeButton: Locator

    constructor(page:Page) {
        this.page = page
        this.confirmationHeader = page.getByRole("heading", { name: "Thank you for your order!" })
        this.backHomeButton = page.getByRole("button", { name: "Back Home" })
    }

    public async confirmOrderSuccess() {
        await this.confirmationHeader.waitFor()
        await expect(this.confirmationHeader).toBeVisible()
        await expect(this.backHomeButton).toBeVisible()
    }
}