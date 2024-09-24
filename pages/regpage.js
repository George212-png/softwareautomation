exports.regpage = class regpage {
    constructor(page){
        this.page = page;
        this.firstbtn = page.locator("//a[@data-testid='open-registration-form-button']");
        this.firstname = page.locator("//input[@name='firstname']");
        this.surname = page.locator("//input[@name='lastname']");
        this.email = page.locator("//input[@name='reg_email__']");
        this.pass = page.locator("//input[@id='password_step_input']");
        this.btn = page.locator("//button[@name='websubmit']");
    }

    async gotoreg() {
        await this.page.goto("https://web.facebook.com/");

    }

    async regfacebook (firstbtn,firstname, surname, email, pass){
        await this.firstbtn.click(firstbtn);
        await this.firstname.fill(firstname);
        await this.surname.fill(surname);
        await this.email.fill(email);
        await this.pass.fill(pass);
        await this.btn.click();

    }
    async enterpage(firstbtn){
        await this.firstbtn.click(firstbtn);
    }
    async enterfirstname(firstname){
        await this.page.waitForSelector("//input[@name='firstname']", {timeout: 3000});
        await this.firstname.fill(firstname);

    }
    async entersurname(surname){
        await this.page.waitForSelector("//input[@name='lastname']", {timeout: 3000});
        await this.surname.fill(surname);
    }
    async enteremail(email){
        await this.page.waitForSelector("//input[@name='reg_email__']", {timeout: 3000});
        await this.email.fill(email);
    }
    async enterpassword(pass){
        await this.page.waitForSelector("//input[@id='password_step_input']", {timeout: 3000});
        await this.pass.fill(pass);
    }

    async clickbtn(){
        await  this.btn.click();
    }
}