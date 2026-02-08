import { Locator, Page, expect } from "@playwright/test";

export class CheckoutStepTwoPage {

    private page: Page
    private checkoutItems: Locator
    private finishButton: Locator

    constructor(page:Page) {
        this.page = page
        this.finishButton = page.getByRole("button", { name: "Finish"} )
        this.checkoutItems = page.getByTestId("inventory-item-name")
    }

    public async validateCheckoutItems(expectedItems:string[]) {
        await this.checkoutItems.first().waitFor()
        const items = await this.checkoutItems.allInnerTexts()
        expectedItems.forEach(async expectedItem => {
            await expect(items).toContain(expectedItem)
        })
    }

    public async finishCheckout() {
        await this.finishButton.waitFor()
        await this.finishButton.click()
    }
}