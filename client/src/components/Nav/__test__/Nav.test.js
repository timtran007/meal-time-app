import { render, screen } from '@testing-library/react';
import Nav from '../Nav'

const mockedSetUser = jest.fn()

it('renders the login page successfully', () => {
    render(
        <Nav 
            user={[]}
            setUser={mockedSetUser}
        />);
    if(user){
        const text = screen.getByText(/my recipes/i)
        expect(text).toBeInTheDocument();
    } else{
        const text = screen.getByText(/login/i);
        expect(text).toBeInTheDocument();
    }
});

