import time
from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()

driver.get("http://localhost:3000/")
driver.set_window_size(1552, 832)

driver.find_element(By.CSS_SELECTOR, ".tab:nth-child(2)").click()
driver.find_element(By.CSS_SELECTOR, ".tab:nth-child(3)").click()

driver.quit()
