import 'dotenv/config'
import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  maxFailures: 1,
  workers: 1,
  reporter: 'html',
  timeout: process.env.CI ? 5 * 60 * 1000 : 2 * 60 * 1000,
  use: {
    trace: 'on',
    video: 'on',
    screenshot: 'on'
  },
  projects: [
    {
      name: 'setupDeployed',
      testMatch: /.*\.setup\.ts/,
      use: { baseURL: process.env.RUBY_IMPLEMENTATION_DEPLOYED_URL },
    },
    {
      name: 'deployed',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: process.env.RUBY_IMPLEMENTATION_DEPLOYED_URL,
      },
      dependencies: ['setupDeployed'],
    },
    {
      name: 'setupLocal',
      testMatch: /.*\.setup\.ts/,
      use: {
        baseURL: process.env.RUBY_IMPLEMENTATION_LOCAL_URL,
      },
    },
    {
      name: 'local',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: process.env.RUBY_IMPLEMENTATION_LOCAL_URL,
      },
      dependencies: ['setupLocal'],
    },
  ],
})
