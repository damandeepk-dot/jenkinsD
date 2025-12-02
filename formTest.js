const { Builder, By, Key, until } = require("selenium-webdriver");

(async function demoqaFormTest() {
  // Launch Chrome browser
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    // 1. Navigate to the website
    await driver.get("https://demoqa.com/automation-practice-form");

    // Maximize window
    await driver.manage().window().maximize();

    // 2. Fill First Name
    await driver.findElement(By.id("firstName")).sendKeys("John");

    // 3. Fill Last Name
    await driver.findElement(By.id("lastName")).sendKeys("Doe");

    // 4. Enter Email
    await driver.findElement(By.id("userEmail")).sendKeys("john.doe@example.com");

    // 5. Select Gender (Male)
    await driver.findElement(By.xpath("//label[text()='Male']")).click();

    // 6. Enter Mobile Number
    await driver.findElement(By.id("userNumber")).sendKeys("9876543210");

    // 7. Scroll down to make Submit button visible
    await driver.executeScript("window.scrollBy(0, 300)");

    // 8. Click Submit
    await driver.findElement(By.id("submit")).click();

    // 9. Wait for confirmation modal
    await driver.wait(
      until.elementLocated(By.id("example-modal-sizes-title-lg")),
      5000
    );

    // 10. Validate Success Message
    let successMsg = await driver
      .findElement(By.id("example-modal-sizes-title-lg"))
      .getText();

    if (successMsg.includes("Thanks for submitting the form")) {
      console.log("✅ Test Passed: Form submitted successfully!");
    } else {
      console.log("❌ Test Failed: Confirmation message mismatch.");
    }
  } catch (error) {
    console.error("❌ Test encountered an error:", error);
  } finally {
    // Close the browser
   // await driver.quit();
  }
})();
