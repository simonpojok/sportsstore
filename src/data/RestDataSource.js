import Axios from "axios";
import { RestUrls } from "./Urls";

export class RestDataSource {
  GetData = (dataType, params) =>
    this.SendRequest("get", RestUrls[dataType], params);
  SendRequest = (method, url, params) => {
    return Axios.request({ method, url, params })
  };
}
