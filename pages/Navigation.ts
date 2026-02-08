import { Page, Locator, expect } from "@playwright/test";

export class Navigation {

    private  page:Page
    private shoppingCartBadge: Locator

    constructor(page:Page) {
        this.page = page
        this.shoppingCartBadge = page.getByTestId("shopping-cart-link")
    }

    public async expectedShoppingCardBadgeCount(itemCount:number) {
        await this.shoppingCartBadge.waitFor()
        let basketItemCount = parseInt(await this.shoppingCartBadge.innerText())
        
        if (Number.isNaN(basketItemCount)) {
            basketItemCount = 0
        }

        await expect(basketItemCount).toEqual(itemCount)
    }

    public async clickShoppingCartBadge() {
        await this.shoppingCartBadge.click()
    }

}