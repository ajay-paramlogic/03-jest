import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import LoginForm from "@/components/LoginForm";

test("LoginForm submits the form and shows a loading state", async () => {
  const mockOnSubmit = jest.fn();
  const { getByLabelText, getByText, getByRole } = render(
    <LoginForm onSubmit={mockOnSubmit} loading={false} />
  );

  const emailInput = getByLabelText(/email/i);
  const passwordInput = getByLabelText(/password/i);
  const submitButton = getByRole("button", { name: /login/i });

  // Simulate input changes
  fireEvent.change(emailInput, { target: { value: "test@example.com" } });
  fireEvent.change(passwordInput, { target: { value: "password123" } });

  // Click the submit button
  fireEvent.click(submitButton);

  // Ensure the mock function is called
  await waitFor(() => {
    expect(mockOnSubmit).toHaveBeenCalledWith(
      "test@example.com",
      "password123"
    );
  });
});

test("LoginForm shows loading state when loading prop is true", () => {
  const mockOnSubmit = jest.fn();
  const { getByRole } = render(
    <LoginForm onSubmit={mockOnSubmit} loading={true} />
  );

  const submitButton = getByRole("button", { name: /loading/i });
  expect(submitButton).toBeDisabled();
});
