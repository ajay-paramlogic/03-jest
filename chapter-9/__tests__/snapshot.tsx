import { render } from "@testing-library/react";
import Home from "@/pages/index";
import Button from "@/components/Button";
import UserCard from "@/components/UserCard";

describe("Snapshot Tests", () => {
  test("renders homepage unchanged", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });

  test("Button renders correctly", () => {
    const onClickMock = jest.fn();
    const { asFragment } = render(
      <Button text="Click me!" onClick={onClickMock} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("UserCard renders correctly", () => {
    const user = {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
    };

    const { asFragment } = render(<UserCard user={user} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
