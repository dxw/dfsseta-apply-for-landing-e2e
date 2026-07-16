import { Page } from '@playwright/test'
import {
  fillDateFieldInGroup,
  expectToSeeAllQuestionsAndAnswers
} from './stepHelpers.ts'

export const startAnApplication = async (page: Page) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Start now' }).click()
}

export const completeDestinationStage = async (page: Page) => {
  await page.getByLabel("mars").check()
  await page.getByRole('button', { name: 'Save and continue' }).click()
}

export const completeDatesStage = async (page: Page) => {
  const nextYear = (new Date().getFullYear() + 1).toString()

  await fillDateFieldInGroup(
    page,
    'Enter your requested landing date',
    { year: nextYear,
      month: '8',
      day: '10',
    },
  )

  await fillDateFieldInGroup(
    page,
    'Enter your requested departure date',
    { year: nextYear,
      month: '8',
      day: '17',
    },
  )

  await page.getByRole('button', { name: 'Save and continue' }).click()
}

export const completeRegistrationIdStage = async (page: Page) => {
  await page.getByLabel('Registration ID').fill('ABC123A')
  await page.getByRole('button', { name: 'Save and continue' }).click()
}

export const completePersonalDetailsStage = async (page: Page) => {
  await page.getByLabel('Full name').fill('Roger Smith')
  await page.getByLabel('Email address').fill('roger@example.com')
  await page.getByLabel('Licence ID').fill('123ABC00')
  await page.getByRole('button', { name: 'Save and continue' }).click()
}

export const completeCheckYourAnswersStage = async (page: Page) => {
  await expectToSeeAllQuestionsAndAnswers(page)
  await page.getByRole('button', { name: 'Confirm and apply' }).click()
}

