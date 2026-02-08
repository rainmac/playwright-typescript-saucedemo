import { Page, Locator, expect } from "@playwright/test"

export class CartPage {
    
    private page:Page
    private basketItemNames:Locator
    private checkoutButton:Locator

    constructor(page:Page) {
        this.page = page
        this.basketItemNames = page.getByTestId("inventory-item-name")
        this.checkoutButton = page.getByRole("button", { name: "Checkout" })
    }

    public async validateCartItems(cartItems:string[]) {
        const items = await this.basketItemNames.allInnerTexts()
        cartItems.forEach(async cartItem => {
            await expect(items).toContain(cartItem)
        })
    }

    public async proceedToCheckout() {
        this.checkoutButton.waitFor()
        this.checkoutButton.click()
    }
}