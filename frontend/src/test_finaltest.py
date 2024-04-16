import pytest
import time
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

driver = webdriver.Chrome()
vars = {}

driver.get("http://localhost:3000/")
driver.set_window_size(788, 816)
driver.find_element(By.ID, "studentId").click()
driver.find_element(By.ID, "studentId").send_keys("1")
driver.find_element(By.ID, "password").click()
driver.find_element(By.ID, "password").send_keys("passwordA")
driver.find_element(By.CSS_SELECTOR, "button").click()

driver.find_element(By.CSS_SELECTOR, ".user-image > img").click()
driver.find_element(By.CSS_SELECTOR, ".attendance-card:nth-child(2)").click()
driver.find_element(By.CSS_SELECTOR, ".result-heading").click()
driver.find_element(By.CSS_SELECTOR, ".announcement:nth-child(2) > h3").click()
driver.find_element(By.CSS_SELECTOR, ".announcement:nth-child(4)").click()
driver.find_element(By.CSS_SELECTOR, ".announcement:nth-child(6) > h3").click()
driver.find_element(By.CSS_SELECTOR, ".announcement:nth-child(8)").click()
driver.find_element(By.CSS_SELECTOR, ".tab:nth-child(2)").click()
driver.find_element(By.CSS_SELECTOR, ".tab:nth-child(3)").click()

driver.find_element(By.CSS_SELECTOR, ".semester-card:nth-child(1) .subject:nth-child(2)").click()
driver.find_element(By.CSS_SELECTOR, ".semester-card:nth-child(2) .subject:nth-child(2) > pre").click()
driver.find_element(By.CSS_SELECTOR, ".semester-card:nth-child(3) .subject:nth-child(3) > pre").click()
driver.find_element(By.CSS_SELECTOR, ".semester-card:nth-child(4)").click()
driver.find_element(By.CSS_SELECTOR, ".tab:nth-child(2)").click()

driver.find_element(By.CSS_SELECTOR, ".semester-card:nth-child(3) .subject:nth-child(1) > pre").click()
driver.find_element(By.CSS_SELECTOR, ".semester-card:nth-child(2)").click()
driver.find_element(By.CSS_SELECTOR, ".semester-card:nth-child(1)").click()
driver.find_element(By.CSS_SELECTOR, ".semester-card:nth-child(1) .subject:nth-child(3)").click()
driver.find_element(By.CSS_SELECTOR, ".semester-card:nth-child(4) > h2").click()
driver.find_element(By.CSS_SELECTOR, ".tab:nth-child(3)").click()

driver.quit()
