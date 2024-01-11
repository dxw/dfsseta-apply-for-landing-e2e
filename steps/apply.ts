import { Page } from '@playwright/test'
import { fillDateFieldInGroup } from './stepHelpers.ts'

export const startAnApplication = async (page: Page) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Start now' }).click()
}

export const completeDestinationStage = async (page: Page) => {
  await page.getByLabel("mars").check()
  await page.getByRole('button', { name: 'Save and continue' }).click()
}

export const completeDatesStage = async (page: Page) => {
  await fillDateFieldInGroup(
    page,
    'Enter your requested landing date',
    { year: '2024',
      month: '8',
      day: '3',
    },
  )

  await fillDateFieldInGroup(
    page,
    'Enter your requested departure date',
    { year: '2024',
      month: '8',
      day: '27',
    },
  )

  await page.getByRole('button', { name: 'Save and continue' }).click()
}

