import { render, screen } from '@testing-library/react';
import FollowingCard from '../FollowingCard'

const mockFollowingProp ={
    id: 3,
    name: "Vanessa",
    image_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
}
const mockUserProp = {
    following: [{
        id: 1,
        name: "Vanessa",
        image_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    }],
    following_ships: [{
        id: 2,
        user_1_id: 2,
        user_2_id: 3
    }]
}
describe('FollowingCard', () => {

    it('renders Following Card', async () => {
        render(<FollowingCard user={mockUserProp} following={mockFollowingProp}/>);
        const imageElement = await screen.findByRole('img')
        expect(imageElement).toBeInTheDocument()
    })
    
})

