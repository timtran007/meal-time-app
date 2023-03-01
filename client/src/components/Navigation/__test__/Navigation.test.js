import { render, screen } from '@testing-library/react';
import Navigation from '../Navigation'

const mockedSetUser = jest.fn()

describe('Navigation when user is logged out', () => {
    it('renders the login page successfully', () => {
        render(
            <Navigation 
                user={[]}
                setUser={mockedSetUser}
            />);
        const text = screen.getByText(/login/i)
        expect(text).toBeInTheDocument();
    });
})


describe('Navigation when user is logged in', () => {
    it('renders the login page successfully', () => {
        render(
            <Navigation 
                user={[{
                    email: 'tim@gmail.com'
                }]}
                setUser={mockedSetUser}
            />);
    const text = screen.getByText(/my recipes/i);
    expect(text).toBeInTheDocument();
    });
})
