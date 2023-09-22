import React, { useEffect, useState } from "react";
import axios from "axios";
import LeftNav from "../components/LeftNav";
import RightNav from "../components/RightNav";
const { kakao } = window;

const Transfer = (props) => {
  const [busNum, setBusNum] = useState(null);
  const [busInfo, setBusInfo] = useState(null);
  const [lat, setLat] = useState(localStorage.getItem("latitude"));
  const [lon, setLon] = useState(localStorage.getItem("longitude"));

  useEffect(() => {
    const continer = document.getElementById("content-display");
    const options = {
      center: new kakao.maps.LatLng(lat, lon),
      level: 3,
    };
    const map = new kakao.maps.Map(continer, options);
    const marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(lat, lon),
      clickable: true,
    });
    marker.setMap(map);
  }, [lat, lon]);

  const handleBusInputChange = (e) => {
    setBusNum(e.target.value);
  };

  const handleSearchClick = () => {
    console.log(busNum);
    axios.get(`api/get_bus_route/${busNum}`).then((response) => {
      const data = response.data;
      if (data.station.length === 0) {
        alert("No results found.");
      } else {
        // Find closest station
        let closestStationInfo = null;
        let shortestDistance = Number.MAX_VALUE;
        let route_id = null;

        data.station.forEach((station) => {
          const x2 = station.x;
          const y2 = station.y;
          const distance = Math.sqrt(
            Math.pow(x2 - lon, 2) + Math.pow(y2 - lat, 2)
          );
          if (distance < shortestDistance) {
            closestStationInfo = station;
            shortestDistance = distance;
            route_id = data.route_id;
          }
        });

        // Perform other actions (e.g., alert message, map markers) here
        alert(
          `${busNum}번 버스가 지나는 가장 가까운 정류장은 ${closestStationInfo.name}으로 이동합니다.`
        );
        setLat(closestStationInfo.y);
        setLon(closestStationInfo.x);
        function getCookie(name) {
          let value = "; " + document.cookie;
          let parts = value.split("; " + name + "=");
          if (parts.length === 2) return parts.pop().split(";").shift();
        }
        const csrftoken = getCookie("csrftoken");
        axios
          .get(`api/get_bus_pos/${route_id}/`, {
            headers: {
              "X-CSRFToken": csrftoken,
            },
          })
          .then((res) => {
            console.log(res.data);
            setBusInfo(`${busNum}번 버스 3분 뒤 도착 <저상버스>`);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  const wrapperStyle = {
    height: "80%",
    display: "flex",
    padding: "10vh 15vw",
  };
  return (
    <div id="wrapper" style={wrapperStyle}>
      <LeftNav openCustomModal={props.openCustomModal} />
      <div className="content-box">
        <div id="content-display"></div>
        <div id="search-bus-box" className="search-container">
          <input
            type="text"
            id="bus-input"
            className="search-input"
            placeholder="버스 노선을 검색해주세요."
            value={busNum}
            onChange={handleBusInputChange}
          />
          <button className="search-button" onClick={handleSearchClick}>
            검색
          </button>
        </div>
        {busInfo && (
          <p
            style={{
              fontSize: "15px",
            }}
          >
            {busInfo}
          </p>
        )}
      </div>

      <RightNav
        openSignModal={props.openSignModal}
        openLocModal={props.openLocModal}
        openLoginModal={props.openLoginModal}
      />
    </div>
  );
};

export default Transfer;
