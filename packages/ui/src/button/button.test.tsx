import * as React from "react";
import { expect, test, describe, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import { Button } from "./index";
import "@testing-library/jest-dom";

describe("Button components", () => {
  test("function::onClick", () => {
    const onClickMock = vi.fn();
    const { getByText } = render(
      <Button onClick={onClickMock}>Click me</Button>
    );

    const button = getByText("Click me");
    expect(button).toBeDefined();

    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test("variant::primary variant", () => {
    const { getByText } = render(<Button variant="primary">Click me</Button>);

    const button = getByText("Click me");
    expect(button).toHaveClass("bg-primary");
  });

  test("variant::secondary", () => {
    const { getByText } = render(<Button variant="secondary">Click me</Button>);

    const button = getByText("Click me");
    expect(button).toHaveClass("bg-secondary");
  });

  test("variant::outline", () => {
    const { getByText } = render(<Button variant="outline">Click me</Button>);

    const button = getByText("Click me");
    expect(button).toHaveClass("border-primary");
  });
});
