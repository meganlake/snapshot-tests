import renderer from 'react-test-renderer'
import Megan from './GitHubCard'

test('renders a snapshot', () => {
    const tree = renderer.create(<Megan/>).toJSON()
    expect(tree).toMatchSnapshot()
})