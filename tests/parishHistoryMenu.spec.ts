import { linkClickingAssertions } from "../common/assertions.spec";
import { URLs } from "../enums/URLs.spec";
import { test } from "../fixtures/subpageMenu.spec";
import { getLinkData } from "../loaders/linkData.spec";

test.use({ url: URLs.PARISH_HISTORY });

const linkData = getLinkData('parishHistory');

test.describe('Parish history menu tests',async () => {
    
    for(const data of linkData) {

        test('Clicking the "' + data.link + '" link',async ({page, menu}) => {
            
            await test.step('Click the "' + data.link + '" link',async () => {
                
                await menu.clickLink(data.link);
            })

            await linkClickingAssertions(page, data.pageUrl, data.tabName);
        })
    }
})