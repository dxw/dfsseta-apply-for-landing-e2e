import { expect, test } from '@playwright/test'
import {
  completeDestinationStage,
  startAnApplication,
  completeDatesStage,
} from '../steps/apply'

test('Apply for landing', async ({ page }) => {
  await startAnApplication(page)
  await completeDestinationStage(page)
  await completeDatesStage(page)
  await expect(page.getByText('Your registration ID')).toBeVisible()
});
