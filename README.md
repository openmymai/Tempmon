### DS18B20
### GoFiber
### NextJS
#
### Go Fiber Features
- Robust routing
- Serve static files
- Extreme performance
- Low memory footprint
- API endpoints
- Middleware & Next support
- Rapid server-side programming
- Template engines
- WebSocket support
- Server-Sent events
- Rate Limiter
- Translated in 15 languages
- And much more, explore Fiber

### gofiber features could make the great projects.
- Express-inspired
- Robust routing
- Serve static files
- Extreme performance
- API ready
- Flexible middleware support
- Low memory footprint
- Template engine
- Websocket support
- Rate limiter

### Project Components
1. Raspberry Pi 3
2. DS18B20 Kit
3. NodeJS (This project Node version 18.4.0)

### Running and Developing on Raspberry Pi 3
1. Clone the repository
```
$ git clone https://github.com/openmymai/DS18B20_GoFiber_NextJSStatic
```
2. Build Go at Root, it will build binary executable file
```
$ go build
```
3. In nextjs directory, install dependencies and export to static file
```
$ npm install && npm export
```
4. Run the project
```
$ ./<binary_file>
```
5. Use Systemd to start service at startup by create temp.service in /lib/systemd/system/temp.service
```
[Unit]
Description=Temperature Monitoring
Documentation=Temp System Documents
After=network.target

[Service]
Environment=8080
Type=simple
User=wolverine
WorkingDirectory=/<project_directory>
ExecStart=/<project-directory>/<binary_file>
Restart=on-failure

[Install]
WantedBy=multi-user.target
```
Then enable and start it on startup
```
$ sudo systemctl enable temp
$ sudo systemctl start temp
```

## License

[MIT](/LICENSE)

---

© 2022 Sirisak Chantanate
