import { renderHook } from "@testing-library/react-hooks";
import * as findTeamPlayers from "../../data/repositories/findTeamPlayers";
import findTeamPlayersFailureMock from "../../data/repositories/__mocks__/findTeamPlayersFailureMock";
import findTeamPlayersMock from "../../data/repositories/__mocks__/findTeamPlayersMock";
import { mockTeamPlayers } from "../../data/repositories/__mocks__/mockData";
import useTeamPlayers from "./useTeamPlayers";

const getStub = jest.spyOn(findTeamPlayers, "default");

describe("useTeamPlayers", () => {
  test("Load team players from custom hook", async () => {
    getStub.mockImplementationOnce(async () => await findTeamPlayersMock());

    const { result, waitForNextUpdate } = renderHook(() =>
      useTeamPlayers("52")
    );

    expect(result.current.isLoading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.teamPlayers).toEqual(mockTeamPlayers);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.hasError).toBe(false);
  });

  test("Returns error if the team not exists", async () => {
    getStub.mockImplementationOnce(
      async () => await findTeamPlayersFailureMock()
    );

    const { result, waitForNextUpdate } = renderHook(() =>
      useTeamPlayers("-1")
    );

    expect(result.current.isLoading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.teamPlayers).toEqual({});
    expect(result.current.isLoading).toBe(false);
    expect(result.current.hasError).toBe(true);
  });
});
