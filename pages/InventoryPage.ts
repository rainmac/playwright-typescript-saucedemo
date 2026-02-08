import { expect, Locator, Page, test } from "@playwright/test"

export class InventoryPage {

    private page: Page
    private inventoryItems: Locator
    private itemNames: Locator

    constructor(page:Page) {
        this.page = page
        this.inventoryItems = page.getByTestId("inventory-item")
        this.itemNames = page.getByTestId("inventory-item-name")
    }

    public async hasInventoryItems() {
        await this.inventoryItems.first().waitFor()
        await expect(this.inventoryItems).not.toHaveCount(0)
    }

    public async hasItem(itemName:string) {
        await this.itemNames.first().waitFor()
        const items = await this.itemNames.allInnerTexts()
        await expect(items).toContain(itemName)
    }

    public async addItem(itemName:string) {
        await this.itemNames.first().waitFor()
        const items = await this.itemNames.allInnerTexts()
        const itemIndex = items.indexOf(itemName)

        const inventoryItem = this.inventoryItems.nth(itemIndex)
        await inventoryItem.waitFor()

        const removeButton = await inventoryItem.getByRole("button", { name: "Remove" })
        const addToCartButton = await inventoryItem.getByRole("button", { name: "Add to cart" })
        
        await expect(removeButton).not.toBeVisible()
        await expect(addToCartButton).toBeVisible()

        await addToCartButton.click()

        await expect(removeButton).toBeVisible()
        await expect(removeButton).toHaveCSS('background-color', 'rgb(255, 255, 255)');
        await expect(removeButton).toHaveCSS('border', '0.8px solid rgb(226, 35, 26)');
        await expect(removeButton).toHaveCSS('color', 'rgb(226, 35, 26)');
        await expect(addToCartButton).not.toBeVisible()
    }
}