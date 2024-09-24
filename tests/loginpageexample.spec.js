import {test} from '@playwright/test';
import { loginpage } from '../pages/loginpage';


test('test', async ({ page }) => {
    const Login = new loginpage(page)
    await Login.gotologin()
    await Login.enteremail('George')
    await Login.enterpassword('password')
    await Login.clickbtn()
    

})