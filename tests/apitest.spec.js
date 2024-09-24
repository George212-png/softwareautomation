import { test, expect } from "@playwright/test";

const url = "https://reqres.in/api/users/2";

test('API Test: Fetch User Data', async ({ request }) => {
    const response = await request.get(url);
  
    // Check for successful response (status code 200)
    expect(response.status()).toBe(200);
  
    // Get the response body as JSON
    const data = await response.json();
    console.log(data)
  
    // Assert the presence of expected properties in the response
    // expect(data).toHaveProperty('id');
    // expect(data).toHaveProperty('email');

  });

