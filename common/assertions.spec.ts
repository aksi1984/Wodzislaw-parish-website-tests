import { Page, expect } from "@playwright/test";

export async function linkClickingAssertions(page: Page, expectedUrl: string, expectedTabName: string) {
    
    await expect(page).toHaveURL(expectedUrl);
    await expect(page).toHaveTitle(expectedTabName);
}