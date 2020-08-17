import reducer from "./errorReducer";
import * as actionTypes from "../actions/actionTypes";

describe("errorReducer", () => {
  it("Should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      msg: {},
      status: null,
      id: null,
    });
  });

  it("Should store the error message , status and id", () => {
    expect(
      reducer(
        { msg: {}, status: null, id: null },
        {
          type: actionTypes.GET_ERRORS,
          payload: {
            msg: { message: "error msg" },
            status: 400,
            id: "some-id",
          },
        }
      )
    ).toEqual({
      msg: { message: "error msg" },
      status: 400,
      id: "some-id",
    });
  });
});
