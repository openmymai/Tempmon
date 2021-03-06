import React, { useState, useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import useSWR from "swr";

async function fetcher(url) {
  const resp = await fetch(url);
  return resp.text();
};


const IndexPage = () => {
  const [ dateTime, setDateTime] = useState(new Date())

  const { data, error } = useSWR("http://10.10.12.201:8080/api", fetcher, { refreshInterval: 1000 }) 
  useEffect(() => {
    const id = setInterval(() => setDateTime(new Date()), 1000)
    return () => {
      clearInterval(id);
    }
  }, [])
    
  var days = ['วันอาทิตย์ที่', 'วันจันทร์ที่', 'วันอังคารที่', 'วันพุธที่', 'วันพฤหัสบดีที่', 'วันศุกร์ที่', 'วันเสาร์ที่']
  var months = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม']
  var date = dateTime.getDate()
  var day = days[dateTime.getDay()]
  var month = months[dateTime.getMonth()]
  var year = dateTime.getFullYear()
  var time = dateTime.toLocaleTimeString('th-TH')

  return (
    <div>
      <Container>
        <br />
          <Card>
            <Card.Img src="weather.png" />
            <Card.ImgOverlay>
            <Card.Body>
              <center>
              <h3>{day+" "+date+" "+month+" "+year}</h3>
              <h3>{time}</h3>
              <hr />
              {error && (
                <strong>{error}</strong>
              )}
              {!error && !data && <p>Loading ...</p>}
              {!error && data && 
                <h1>อุณหภูมิ {data}</h1>
              }
              </center>
            </Card.Body>
            </Card.ImgOverlay>
          </Card>

      </Container>
    </div>
  )
}

export default IndexPage;
