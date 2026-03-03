import { defineConfig, devices } from '@playwright/test';

const PORT = process.env.PORT ?? '3000';
const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? `http://127.0.0.1:${PORT}`;

export default defineConfig({
    testDir: './tests',
    timeout: 45_000,
    expect: {
        timeout: 10_000,
    },
    fullyParallel: false,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: 1,
    reporter: [['list'], ['html', { open: 'never' }]],
    use: {
        baseURL,
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    },
    webServer: {
        command: 'npm run dev',
        url: baseURL,
        reuseExistingServer: !process.env.CI,
        timeout: 120_000,
    },
    projects: [
        {
            name: 'webkit',
            use: {
                ...devices['Desktop Safari'],
                viewport: { width: 1366, height: 900 },
            },
        },
        {
            name: 'webkit-ios',
            use: {
                ...devices['iPhone 13'],
            },
        },
    ],
});
