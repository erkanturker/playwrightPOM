async function waitForSpecificResponse(page, endpoint, method = "GET") {
  return await page.waitForResponse(
    (response) =>
      response.url() === `${process.env.API_URL}/${endpoint}` &&
      response.request().method() === method
  );
}

module.exports = { waitForSpecificResponse };
