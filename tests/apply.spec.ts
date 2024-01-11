import { expect, test } from '@playwright/test'
import {
  completeDestinationStage,
  startAnApplication,
  completeDatesStage,
  completeRegistrationIdStage,
  completePersonalDetailsStage,
} from '../steps/apply'

test('Apply for landing', async ({ page }) => {
  await startAnApplication(page)
  await completeDestinationStage(page)
  await completeDatesStage(page)
  await completeRegistrationIdStage(page)
  await completePersonalDetailsStage(page)
  await expect(page.getByText('Check your answers')).toBeVisible()
});
