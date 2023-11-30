import { Page } from '@playwright/test'

export const startAnApplication = async (page: Page) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Start now' }).click()
}

export const completeDestinationStage = async (page: Page) => {
  await page.getByLabel("mars").check()
  await page.getByRole('button', { name: 'Save and continue' }).click()
}

