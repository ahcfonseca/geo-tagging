import { renderHook, act } from "@testing-library/react";
import { MarkerProvider, useMarkerContext } from "../context/MarkerContext";

describe("MarkerContext", () => {
  it("should create a new point", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MarkerProvider>{children}</MarkerProvider>
    );

    const { result } = renderHook(() => useMarkerContext(), { wrapper });

    act(() => {
      result.current.addMarker({ lat: 10, lng: 20 });
    });

    expect(result.current.markers).toHaveLength(1);
    expect(result.current.markers[0]).toMatchObject({
      position: { lat: 10, lng: 20 },
      name: "Ponto nº 001",
    });
  });

  it("should delete a point", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <MarkerProvider>{children}</MarkerProvider>
    );

    const { result } = renderHook(() => useMarkerContext(), { wrapper });

    act(() => {
      result.current.addMarker({ lat: 10, lng: 20 });
      result.current.addMarker({ lat: 30, lng: 40 });
    });

    expect(result.current.markers).toHaveLength(2);

    act(() => {
      result.current.removeMarker(result.current.markers[0].id);
    });

    expect(result.current.markers).toHaveLength(1);
    expect(result.current.markers[0].position).toEqual({ lat: 30, lng: 40 });
  });
});
