import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MarkerProvider } from "../context/MarkerContext";
import PointsList from "../components/PointsList";
import React from "react";

describe("PointsList", () => {
  it("should render the empty points message when there are no points", () => {
    render(
      <MarkerProvider>
        <PointsList />
      </MarkerProvider>
    );

    expect(
      screen.getByText("Sem pontos de monitoramento para exibir no momento.")
    ).toBeInTheDocument();
  });

  it("should render the list of points when there are saved points", () => {
    const mockMarkers = [
      {
        id: "1",
        position: { lat: 10, lng: 20 },
        name: "Ponto nº 001",
        createdAt: new Date(),
      },
      {
        id: "2",
        position: { lat: 30, lng: 40 },
        name: "Ponto nº 002",
        createdAt: new Date(),
      },
    ];

    jest.spyOn(React, "useContext").mockReturnValue({
      markers: mockMarkers,
      setActivePoint: jest.fn(),
      activeMarker: null,
    });

    render(
      <MarkerProvider>
        <PointsList />
      </MarkerProvider>
    );

    expect(screen.getByText("Ponto nº 001")).toBeInTheDocument();
    expect(screen.getByText("Ponto nº 002")).toBeInTheDocument();
  });
});
