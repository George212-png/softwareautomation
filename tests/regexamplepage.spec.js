import {test, expect} from '@playwright/test';
import { regpage } from '../pages/regpage';

test ('test', async ({ page })=> {
    const Reg = new regpage(page)
    await Reg.gotoreg()
    await Reg.enterpage()
    await Reg.enterfirstname('George')
    await Reg.entersurname('Adaramola')
    await Reg.enteremail('adaramolageorge03@gmail.com')
    await Reg.enterpassword('password')
    await Reg.clickbtn()

})

// const url = "https://reqres.in/api/users/2";

// test('API Test: Fetch User Data', async ({ request }) => {
//     const response = await request.get(url);
  
//     // Check for successful response (status code 200)
//     expect(response.ok()).toBe(true);
//     const data = await response.json();
  
//     // Assert the presence of expected properties in the response
//     expect(data).toHaveProperty('id');
//     expect(data).toHaveProperty('email');

//   });
