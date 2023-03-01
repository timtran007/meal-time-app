import { render, screen } from '@testing-library/react';
import FollowerCard from '../FollowerCard'

const mockFollowerProp ={
    name: "Vanessa",
    image_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
}
describe('FollowerCard', () => {

    it('renders Follower Card', async () => {
        render(<FollowerCard follower={mockFollowerProp}/>);
        const imageElement = await screen.findByRole('img')
        expect(imageElement).toBeInTheDocument()
    })
    
})

