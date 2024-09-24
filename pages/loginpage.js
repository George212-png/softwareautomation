exports.loginpage = class loginpage {
    constructor(page) {
        this.page = page;
        this.email =  page.locator("#email");
        this.password = page.locator("//input[@id='pass']");
        this.btn = page.getByTestId("open-registration-form-button");
        
    }

 async gotologin() {
    await this.page.goto("https://web.facebook.com/");

    }  
async logintofacebook(email, password){
    await this.email.fill(email);
    await this.password.fill(password);
    await this.btn.click();
}

async enteremail(email){
    await this.page.waitForSelector("#email", { timeout: 3000 });
    await this.email.fill(email);
}

async enterpassword(password) {
    await this.page.waitForSelector("//input[@id='pass']", {timeout: 3000});
    await this.password.fill(password);
}


async clickbtn(){
    await this.btn.click();
}
}