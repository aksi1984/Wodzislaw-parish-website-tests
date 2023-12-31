import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../base/basePage.spec";

export class DropdownList extends BasePage {

    readonly parent: Locator;

    constructor(page: Page) {

        super(page);

        this.parent = page.getByRole('link', {name: 'Informacje stałe', exact: false});
    }

    async hoverParent() {

        await this.parent.hover();
    }

    async clickLink(linkText: string) {

        await this.page.getByRole('link', {name: linkText}).click();
    }
}