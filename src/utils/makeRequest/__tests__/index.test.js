import makeRequest from "..";
import axios from "axios";
// add this in constants ////
import {
  GET_RECORDS,
  PATCH_LIKES_BY_ID,
  BASE_URL,
  REQ_HEADER,
} from "../../../constants/apiEndPoints";
import { mockSongList } from "../../../__mocks__/carpane";
import { mockReq, mockRes } from "../../../__mocks__/makeRequest";

// edit this ////

const ERROR_ROUTE = "error";

jest.mock("axios");

describe("makeRequest", () => {
  it("should make an API call with appropriate request options and return response body when only end point is specified", async () => {
    axios.mockResolvedValueOnce({ data: mockRes });

    const mockParams = {
      url: BASE_URL + GET_RECORDS.url,
      method: GET_RECORDS.method,
      headers: REQ_HEADER,
    };

    expect(axios).not.toBeCalled();

    const response = await makeRequest(GET_RECORDS);

    console.log("res", response);
    console.log("expected", mockSongList);

    expect(axios).toBeCalledWith(mockParams);
    expect(response).toEqual(mockSongList);
  });

  it("should make an API call with appropriate request options and return response body when end point and request body is specified", async () => {
    axios.mockResolvedValueOnce({ data: mockRes });

    const mockEndPoint = PATCH_LIKES_BY_ID(1);

    const mockParams = {
      url: BASE_URL + mockEndPoint.url,
      method: mockEndPoint.method,
      ...mockReq,
      headers: REQ_HEADER,
    };

    expect(axios).not.toBeCalled();

    const response = await makeRequest(mockEndPoint, mockReq);

    expect(axios).toBeCalledWith(mockParams);
    expect(response).toEqual(mockSongList);
  });

  it("should navigate to error page when axios encounters an error with status code specified", async () => {
    axios.mockRejectedValueOnce({ response: { status: 500 } });
    const navigate = jest.fn();

    const mockEndPoint = PATCH_LIKES_BY_ID(1);

    await makeRequest(mockEndPoint, mockReq, navigate);

    expect(navigate).toBeTruthy();
    expect(navigate).toBeCalledTimes(1);
    expect(navigate).toBeCalledWith(`${ERROR_ROUTE}/:500`);
  });

  it("should navigate to error page when axios encounters an error with status code not specified", async () => {
    axios.mockRejectedValueOnce({});
    const navigate = jest.fn();

    const mockEndPoint = PATCH_LIKES_BY_ID(1);

    await makeRequest(mockEndPoint, mockReq, navigate);

    expect(navigate).toBeCalledTimes(1);
    expect(navigate).toBeCalledWith(ERROR_ROUTE);
  });

  it("should do nothing if navigate function is not passed as a paramter", async () => {
    axios.mockRejectedValueOnce({});
    const mockEndPoint = PATCH_LIKES_BY_ID(1);
    await makeRequest(mockEndPoint, mockReq);
  });
});
