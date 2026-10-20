import { test, expect } from '@playwright/test';

//yêu cầu đổi test1 thành truy cập 1 link khác và kiểm tra title
test('has title', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com');

  // ktra xem khi load page xong có hiện title "Tài liệu học automation test" hay ko
  await expect(page).toHaveTitle('Tài liệu học automation test - Playwright Việt Nam');
});

test('get started link', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com');

  // truy cập vào phần tử dạng link trên trang có tên là "	Bài học 1: Register Page 
  await page.getByRole('link', { name: 'Bài học 1: Register Page' }).click();

  // Ktra xem khi click vào link đó có hiện ra heading User Registration hay ko
  await expect(page.getByRole('heading', { name: 'User Registration' })).toBeVisible();
});
