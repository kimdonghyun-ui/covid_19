import React, { useState } from "react";
import axios from "axios";
//import aa from "xml2json";
const convert = require("xml-js");
function App() {
  const [data, setData] = useState(null);

  const onClick = async () => {
    try {
      const response = await axios.get(
        "https://kingkdh.cafe24.com/openData/data.php"
      );
      console.log(response.data);
      var xmlToJson = convert.xml2json(response.data, {
        compact: true,
        spaces: 4,
      });
      //console.log(`xml to json => ${xmlToJson}`);

      setData(JSON.parse(xmlToJson));
      console.log(data.response.body.items);
    } catch (e) {
      console.log(e);
    }
  };

  // var hello =
  //   "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=kLaybC0vo38hpKzpqYnmbyCgLZxB4xvJAjrpXX%2FdO3yP0H9qwkxzkcqra29W0TAlA6ESxEQ%2BBZhQh0TnulIRLQ%3D%3D&pageNo=1&numOfRows=10&startCreateDt=20200310&endCreateDt=20200315";

  // const request = require("request");

  // const HOST = "http://openapi.data.go.kr/openapi/service/rest";
  // const SERVICE_KEY =
  //   "kLaybC0vo38hpKzpqYnmbyCgLZxB4xvJAjrpXX%252FdO3yP0H9qwkxzkcqra29W0TAlA6ESxEQ%252BBZhQh0TnulIRLQ%253D%253D";

  // var requestUrl = `${HOST}/Covid19/getCovid19InfStateJson?serviceKey=${SERVICE_KEY}`;

  // request.get(requestUrl, (err, res, body) => {
  //   if (err) {
  //     console.log(`err => ${err}`);
  //   } else {
  //     if (res.statusCode == 200) {
  //       var result = body;
  //       console.log(`body data => ${result}`);
  //       var xmlToJson = convert.xml2json(result, { compact: true, spaces: 4 });
  //       console.log(`xml to json => ${xmlToJson}`);
  //     }
  //   }
  // });

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={data.declaration} readOnly={true} />}
    </div>
  );
}

export default App;
