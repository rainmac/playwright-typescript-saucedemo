import { test } from "@playwright/test"
import { insertSessionCookie } from "../../utilities/injectSessionCookie"
import { InventoryPage } from "../../pages/InventoryPage";
import { Navigation } from "../../pages/Navigation";
import { CartPage } from "../../pages/CartPage";
import { CheckoutStepOnePage } from "../../pages/CheckoutStepOnePage";
import { CheckoutStepTwoPage } from "../../pages/CheckoutStepTwoPage";
import { CheckoutCompletePage } from "../../pages/CheckoutCompletePage";

test("User journey", async ({ browser }) => {
    const context = await browser.newContext();
    await insertSessionCookie(context)

    const page = await context.newPage()
    await page.goto("/inventory.html")

    const itemToPurchange = "Sauce Labs Backpack"

    // Inventory loads with expected items
    const inventoryPage = new InventoryPage(page)
    await inventoryPage.hasInventoryItems()

    const navigation = new Navigation(page)
    // Item "Sauce Labs Backpack" added and reflected in cart
    await navigation.expectedShoppingCardBadgeCount(0)
    await inventoryPage.hasItem(itemToPurchange)
    await inventoryPage.addItem(itemToPurchange)
    await navigation.expectedShoppingCardBadgeCount(1)
    
    // Navigate to cart and proceed to checkout
    await navigation.clickShoppingCartBadge()
    const cartPage = new CartPage(page)
    await cartPage.validateCartItems([itemToPurchange])
    await cartPage.proceedToCheckout()

    // Enter user information.  
    const checkout = new CheckoutStepOnePage(page)
    await checkout.fillOutInformation("Reiner", "Tolentino", "4770")
    await checkout.continueCheckout()
    
    // Validate order summary totals. 
    const checkoutStepTwo = new CheckoutStepTwoPage(page)
    await checkoutStepTwo.validateCheckoutItems([itemToPurchange])

    // Complete order and verify confirmation message.
    await checkoutStepTwo.finishCheckout()

    const checkoutCompletePage = new CheckoutCompletePage(page)
    await checkoutCompletePage.confirmOrderSuccess()
})