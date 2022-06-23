package main

import (
  "fmt"
  "log"
  
  "github.com/yryz/ds18b20"
  "github.com/gofiber/fiber/v2"
)

func main() {
  app := fiber.New()
  
  app.Static("/", "./nextjs/dist")

  app.Get("/api", TempRead)

  log.Fatal(app.Listen(":8080"))
}

func TempRead(c *fiber.Ctx) error {
  var msg string
  sensors, err := ds18b20.Sensors()
  if err != nil {
    panic(err)
  }
  for _, sensor := range sensors {
    t, err := ds18b20.Temperature(sensor)
    if err == nil {
      msg = fmt.Sprintf("%.2f°C\n", t)
    }
  }
  return c.SendString(msg)
}
