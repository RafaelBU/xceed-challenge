import { renderHook } from "@testing-library/react-hooks";
import { mockTeamsData } from "../../data/repositories/__mocks__/mockData";
import useTeamList from "./useTeamList";

jest.mock("../../data/repositories/findTeams");

describe("useTeamList", () => {
  test("Load teams from custom hook", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useTeamList());

    expect(result.current.isLoading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.teamList).toEqual(mockTeamsData);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.hasError).toBe(false);
  });
});
