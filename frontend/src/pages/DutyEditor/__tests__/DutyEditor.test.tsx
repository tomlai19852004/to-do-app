import { render, waitFor, screen } from '@testing-library/react';
import { default as DutyEditor } from '../index';
import {
    RouterProvider,
    createMemoryRouter,
} from "react-router-dom";

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: any) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => {},
    })
});

const router = createMemoryRouter([{ path: '*', element: <DutyEditor /> }]);

test('DutyEditor to render correctly', async () => {
    render(<RouterProvider router={router} />);
    const targetElement = await waitFor(() => screen.getByText(/Editor/i));
    expect(targetElement).toBeInTheDocument();
})