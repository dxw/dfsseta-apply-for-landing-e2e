import { Page } from '@playwright/test'

export const fillDateFieldInGroup = async(page: Page, group: string, date: { day: string; month: string; year: string }) => {
  await page.getByRole('group', { name: group }).getByLabel('Day').fill(date.day)
  await page.getByRole('group', { name: group }).getByLabel('Month').fill(date.month)
  await page.getByRole('group', { name: group }).getByLabel('Year').fill(date.year)
}
