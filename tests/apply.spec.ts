import { expect, test } from '@playwright/test'
import {
  completeDestinationStage,
  startAnApplication
} from '../steps/apply'

test('Apply for landing', async ({ page }) => {
  await startAnApplication(page)
  await completeDestinationStage(page)
  await expect(page.getByText('Your dates')).toBeVisible()
})
