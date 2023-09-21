import React, { useEffect } from "react";
import axios from "axios";
import LeftNav from "../components/LeftNav";
import RightNav from "../components/RightNav";
import Box from "../components/Box";

// @require_GET
// def get_demo_today(request):
//     collection = get_collection(db_handle, 'demo')
//     ret = list(collection.find({}))
//     ret = []
//     for item in ret:
//         item_data = {
//             "location": str(item["location"]),
//             "date": str(item["date"]),
//             "time": str(item["time"]),
//             "amount": str(item["amount"])
//         }
//         ret.append(item_data)
//     return JsonResponse({'demo': ret})

const DemoInfo = (props) => {
  function getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
  const csrftoken = getCookie("csrftoken");
  useEffect(() => {
    // Django 서버에서 사용자 이름을 가져오는 요청
    axios
      .get(`/api/get_demo_today/`, {
        headers: {
          "X-CSRFToken": csrftoken,
        },
      })
      .then((response) => {
        if (response) {
          console.log(response.data.demo);
        } else {
          console.log("error");
        }
      })
      .catch((error) => {
        console.error("사용자 이름 가져오기 오류:", error);
      });
  }, []);

  return (
    <div id="wrapper">
      <LeftNav openCustomModal={props.openCustomModal} />
      <Box>test</Box>
      <RightNav
        openSignModal={props.openSignModal}
        openLocModal={props.openLocModal}
        openLoginModal={props.openLoginModal}
      />
    </div>
  );
};

export default DemoInfo;
