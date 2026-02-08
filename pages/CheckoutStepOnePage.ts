import { Locator, Page } from "@playwright/test";

export class CheckoutStepOnePage {

    private page: Page
    private firstName: Locator
    private lastName: Locator
    private zipCode: Locator
    private continueButton: Locator

    constructor(page:Page) {
        this.page = page
        this.firstName = page.getByPlaceholder("First Name")
        this.lastName = page.getByPlaceholder("Last Name")
        this.zipCode = page.getByPlaceholder("Zip/Postal Code")
        this.continueButton = page.getByRole("button", { name: "Continue" })
    }

    public async fillOutInformation(firstName:string, lastName:string, zipCode:string) {
        await this.firstName.waitFor()
        await this.firstName.fill(firstName)
        await this.lastName.fill(lastName)
        await this.zipCode.fill(zipCode)
    }

    public async continueCheckout() {
        await this.continueButton.waitFor()
        await this.continueButton.click()
    }
}