import time
from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()

driver.get("http://localhost:3000/")
driver.set_window_size(1552, 832)

driver.find_element(By.CSS_SELECTOR, ".user-profile-section > .user-details").click()
driver.find_element(By.CSS_SELECTOR, ".cardss").click()
driver.find_element(By.CSS_SELECTOR, ".result-heading").click()
driver.find_element(By.CSS_SELECTOR, ".announcement:nth-child(2)").click()
driver.find_element(By.CSS_SELECTOR, ".announcement:nth-child(4) > h3").click()
driver.find_element(By.CSS_SELECTOR, ".announcement:nth-child(6)").click()
driver.find_element(By.CSS_SELECTOR, ".tab:nth-child(2)").click()
driver.find_element(By.CSS_SELECTOR, ".semester-card:nth-child(3) .subject:nth-child(2) > pre").click()
driver.find_element(By.CSS_SELECTOR, ".semester-card:nth-child(2) .subject:nth-child(2)").click()
driver.find_element(By.CSS_SELECTOR, ".semester-card:nth-child(1) .subject:nth-child(2) > pre").click()
driver.find_element(By.CSS_SELECTOR, ".semester-card:nth-child(4) > h2").click()
driver.find_element(By.CSS_SELECTOR, ".tab:nth-child(3)").click()
driver.find_element(By.CSS_SELECTOR, ".semester-card:nth-child(3) .subject:nth-child(1) > pre").click()
driver.find_element(By.CSS_SELECTOR, ".semester-card:nth-child(2) .subject:nth-child(1)").click()
driver.find_element(By.CSS_SELECTOR, ".semester-card:nth-child(1) .subject:nth-child(2) > pre").click()
driver.find_element(By.CSS_SELECTOR, ".semester-card:nth-child(4) > h2").click()

driver.quit()
