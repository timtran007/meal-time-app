import { render, screen } from '@testing-library/react';
import Nav from '../Nav'

const mockedSetUser = jest.fn()

describe('Nav when user is logged out', () => {
    it('renders the login page successfully', () => {
        render(
            <Nav 
                user={[]}
                setUser={mockedSetUser}
            />);
        const text = screen.getByText(/login/i)
        expect(text).toBeInTheDocument();
    });
})


describe('Nav when user is logged in', () => {
    it('renders the login page successfully', () => {
        render(
            <Nav 
                user={[{
                    email: 'tim@gmail.com'
                }]}
                setUser={mockedSetUser}
            />);
    const text = screen.getByText(/my recipes/i);
    expect(text).toBeInTheDocument();
    });
})
