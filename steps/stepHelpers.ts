import { Page, expect } from '@playwright/test'

export const fillDateFieldInGroup = async(page: Page, group: string, date: { day: string; month: string; year: string }) => {
  await page.getByRole('group', { name: group }).getByLabel('Day').fill(date.day)
  await page.getByRole('group', { name: group }).getByLabel('Month').fill(date.month)
  await page.getByRole('group', { name: group }).getByLabel('Year').fill(date.year)
}

type QuestionAndAnswer = { question: string; answer: string }

const expectToSeeQuestionAndAnswer = async(page: Page, qAndA: QuestionAndAnswer) => {
  await expect(page.getByText(`${qAndA.question} ${qAndA.answer}`)).toBeVisible()
}

export const expectToSeeAllQuestionsAndAnswers = async(page: Page) => {
  const nextYear = (new Date().getFullYear() + 1).toString()

  await expectToSeeQuestionAndAnswer(page, {
    question: 'Destination',
    answer: 'Mars'
  } )
  await expectToSeeQuestionAndAnswer(page, {
    question: 'Requested landing date',
    answer: `10 August ${nextYear}`
  })
  await expectToSeeQuestionAndAnswer(page, {
    question: 'Requested departure date',
    answer: `17 August ${nextYear}`
  })
  await expectToSeeQuestionAndAnswer(page, {
    question: 'Registration ID',
    answer: 'ABC123A'
  })
  await expectToSeeQuestionAndAnswer(page, {
    question: 'Name',
    answer: 'Roger Smith'
  })
  await expectToSeeQuestionAndAnswer(page, {
    question: 'Email address',
    answer: 'roger@example.com'
  })
  await expectToSeeQuestionAndAnswer(page, {
    question: 'Licence ID',
    answer: '123ABC00'
  })
}
