import { render, screen } from "@testing-library/react";
import TeamList from ".";
import { mockTeamsData } from "../../../data/repositories/__mocks__/mockData";
import * as useTeamList from "../../hooks/useTeamList";

const getStub = jest.spyOn(useTeamList, "default");

describe("TeamList page", () => {
  test("Render correct elements when page is loading", async () => {
    getStub.mockImplementationOnce(() => ({
      isLoading: true,
      teamList: [],
      hasError: false,
    }));
    render(<TeamList />);

    expect(
      screen.getByRole("heading", {
        name: /loading/i,
      })
    ).toBeInTheDocument();
  });

  test("Render correct elements when page is loaded the data", async () => {
    getStub.mockImplementationOnce(() => ({
      isLoading: false,
      teamList: mockTeamsData,
      hasError: false,
    }));

    render(<TeamList />);

    expect(
      screen.getByRole("heading", {
        name: /select a team to see its roster/i,
      })
    ).toBeInTheDocument();
  });

  test("Render error message when hook return some error", async () => {
    getStub.mockImplementationOnce(() => ({
      isLoading: false,
      teamList: [],
      hasError: true,
    }));

    render(<TeamList />);

    expect(
      screen.getByRole("heading", {
        name: /an error has ocurred, please try again/i,
      })
    ).toBeInTheDocument();
  });
});
