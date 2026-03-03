import { expect, test, type Page } from '@playwright/test';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

async function saveSnapshot(page: Page, projectName: string) {
    const snapshotsDir = join(process.cwd(), 'artifacts', 'safari-snapshots');
    mkdirSync(snapshotsDir, { recursive: true });

    await page.screenshot({
        path: join(snapshotsDir, `${projectName}-home.png`),
        fullPage: true,
    });
}

test.describe('Safari(WebKit) smoke', () => {
    test('renders hero and signup form', async ({ page }) => {
        await page.goto('/');

        await expect(page.getByRole('heading', {
            name: /ebulição instantânea/i,
            level: 1,
        })).toBeVisible();

        await expect(page.getByRole('heading', {
            name: /crie sua conta e comece a vender hoje mesmo/i,
            level: 2,
        })).toBeVisible();

        await expect(page.getByRole('button', { name: /começar agora/i })).toBeVisible();

        await saveSnapshot(page, test.info().project.name);
    });

    test('applies masks for cpf and celular', async ({ page }) => {
        await page.goto('/');

        const cpfInput = page.locator('#cpf');
        const celularInput = page.locator('#celular');

        await cpfInput.click();
        await cpfInput.pressSequentially('12345678901');
        await expect(cpfInput).toHaveValue('123.456.789-01');

        await celularInput.click();
        await celularInput.pressSequentially('11987654321');
        await expect(celularInput).toHaveValue('(11) 98765-4321');
    });

    test('keeps sticky form on desktop breakpoint', async ({ page }) => {
        await page.goto('/');

        const stickyContainer = page.locator('main > div').nth(1);
        const position = await stickyContainer.evaluate((element) => getComputedStyle(element).position);
        const isMobileSafari = test.info().project.name === 'webkit-ios';

        if (isMobileSafari) {
            expect(position).toBe('relative');
            return;
        }

        expect(position).toBe('sticky');
    });

    test('shows client-side required validation', async ({ page }) => {
        await page.goto('/');

        await page.getByRole('button', { name: /começar agora/i }).click();

        const nameInput = page.locator('#name');
        const isNameValid = await nameInput.evaluate((element) => (element as HTMLInputElement).checkValidity());

        expect(isNameValid).toBe(false);
    });
});
