const LoginPage = require("../loginPageObjectModal/login.page");
const SubPage = require("../loginPageObjectModal/sub.page");

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await LoginPage.open();

    await LoginPage.login("admin", "12345678");
    await expect(SubPage.success).toBeExisting();
    await expect(SubPage.success).toHaveTextContaining(
      "User is successfully logged in"
    );
  });
});
