import { Locator, Page } from "@playwright/test";
import { DeliveryDetails } from "../fixtures/deliveryDetails";

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

    public async fillOutInformation(deliveryDetails:DeliveryDetails) {
        await this.firstName.waitFor()
        await this.firstName.fill(deliveryDetails.firstName)
        await this.lastName.fill(deliveryDetails.lastName)
        await this.zipCode.fill(deliveryDetails.postCode)
    }

    public async continueCheckout() {
        await this.continueButton.waitFor()
        await this.continueButton.click()
    }
}